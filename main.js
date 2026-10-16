document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll setting
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--scroll', window.scrollY + 'px');
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // 2. Scramble Text Effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789∫∑√∆∞≈";
    function scramble(el) {
        let iteration = 0;
        const originalText = el.innerText || el.textContent;
        if (el.dataset.scrambling === "true") return;
        el.dataset.scrambling = "true";

        const textArray = originalText.split("");

        const interval = setInterval(() => {
            for (let i = 0; i < textArray.length; i++) {
                if (i < iteration) {
                    textArray[i] = originalText[i];
                } else {
                    textArray[i] = letters[Math.floor(Math.random() * letters.length)];
                }
            }
            el.innerText = textArray.join("");

            if(iteration >= originalText.length) {
                clearInterval(interval);
                el.dataset.scrambling = "false";
            }
            iteration += 1 / 3;
        }, 30);
    }

    // 3. Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('decipher-text')) {
                    scramble(entry.target);
                    entry.target.classList.remove('decipher-text');
                }
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 4. Cached rects for cards & mouse move
    window.cards = Array.from(document.querySelectorAll(".spotlight-card, .btn-glow"));

    let cachedRects = [];

    window.updateRects = function updateRects() {
        cachedRects = window.cards.map(card => {
            const rect = card.getBoundingClientRect();
            // Cache on element for mousemove
            card._cachedRect = {
                left: rect.left,
                top: rect.top,
                width: rect.width,
                height: rect.height
            };
            // Return for particles
            return {
                top: rect.top + window.scrollY,
                bottom: rect.bottom + window.scrollY,
                left: rect.left,
                right: rect.right
            };
        });
    }

    window.resizeObserver = new ResizeObserver(() => {
        window.updateRects();
        if (typeof resizeCanvas === 'function') resizeCanvas();
    });

    window.cards.forEach(card => window.resizeObserver.observe(card));
    window.resizeObserver.observe(document.body);

    window.cards.forEach(card => {
        if(card.classList.contains('spotlight-card')) {
            card.addEventListener('mousemove', e => {
                if (window.innerWidth < 768) return;
                const rect = card._cachedRect;
                if (!rect) return;
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }, { passive: true });
        }
    });

    // 5. Math Snow Engine with Typed Arrays and Object Pooling
    const canvas = document.getElementById('math-physics');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });

    let width, height;
    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        updateRects();
    }
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    // Mouse tracking
    let mouseX = -1000, mouseY = -1000;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY + window.scrollY;
    }, { passive: true });

    window.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY + window.scrollY;
        }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY + window.scrollY;
        }
    }, { passive: true });

    // Typed Arrays (Data-Oriented Design)
    let MAX_PARTICLES = window.innerWidth < 768 ? 75 : 150;
    const PARTICLE_STRIDE = 12;
    const particleData = new Float32Array(MAX_PARTICLES * PARTICLE_STRIDE);
    const symbols = ['∫','∑','√','∆','∞','≈','π','θ','Ω','α','β','γ','λ','μ','ρ','σ','φ','ω', 'x', 'y', '='];

    const symbolCanvas = document.createElement('canvas');
    const symbolCtx = symbolCanvas.getContext('2d');
    const maxSymbolSize = 40;
    symbolCanvas.width = maxSymbolSize * symbols.length;
    symbolCanvas.height = maxSymbolSize;
    symbolCtx.fillStyle = '#E5BE85';
    symbolCtx.textBaseline = 'middle';
    symbolCtx.textAlign = 'center';
    symbolCtx.font = `${maxSymbolSize * 0.8}px monospace`;

    for (let i = 0; i < symbols.length; i++) {
        symbolCtx.fillText(symbols[i], i * maxSymbolSize + maxSymbolSize/2, maxSymbolSize/2);
    }

    function spawnParticle(index, randomY = false) {
        const offset = index * PARTICLE_STRIDE;
        particleData[offset + 0] = Math.random() * width;
        particleData[offset + 1] = randomY ? (window.scrollY + Math.random() * height) : (window.scrollY - 50 - Math.random() * 100);
        particleData[offset + 2] = (Math.random() - 0.5) * 0.5;

        const baseVy = Math.random() * 0.8 + 0.8;
        particleData[offset + 3] = baseVy;
        particleData[offset + 4] = baseVy;

        particleData[offset + 5] = Math.random() * 16 + 14;
        particleData[offset + 6] = Math.random() * Math.PI * 2;
        particleData[offset + 7] = Math.random() * Math.PI * 2;
        particleData[offset + 8] = (Math.random() - 0.5) * 0.02;
        particleData[offset + 9] = 0.5 + Math.random() * 0.3;
        particleData[offset + 10] = 0;
        particleData[offset + 11] = Math.floor(Math.random() * symbols.length);
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
        spawnParticle(i, true);
    }

    const collisionResult = {
        y: 0,
        vx: 0,
        vy: 0,
        isBouncing: 0
    };

    function handleCollision(x, y, vx, vy, size, elasticity, baseVy, isBouncing) {
        let hit = false;
        for (let j = 0; j < cachedRects.length; j++) {
            const rect = cachedRects[j];
            if (x > rect.left && x < rect.right && y + size > rect.top && y < rect.bottom) {
                if (vy > 0 && y < rect.top + 20) {
                    y = rect.top - size;
                    vy *= -elasticity;
                    vx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 1);
                    isBouncing = 1;
                    hit = true;
                }
            }
        }

        if (!hit && vy > baseVy) {
            vy *= 0.95;
            if (Math.abs(vy - baseVy) < 0.1) {
                isBouncing = 0;
                vy = baseVy;
            }
        }

        collisionResult.y = y;
        collisionResult.vx = vx;
        collisionResult.vy = vy;
        collisionResult.isBouncing = isBouncing;
    }

    function isParticleOutOfBounds(x, y, width, height, scrollY) {
        return y > scrollY + height + 100 || x < -50 || x > width + 50;
    }

    function updateParticles() {
        for (let i = 0; i < MAX_PARTICLES; i++) {
            const offset = i * PARTICLE_STRIDE;

            let x = particleData[offset + 0];
            let y = particleData[offset + 1];
            let vx = particleData[offset + 2];
            let vy = particleData[offset + 3];
            let baseVy = particleData[offset + 4];
            let size = particleData[offset + 5];
            let phase = particleData[offset + 6];
            let rot = particleData[offset + 7];
            let rotSpeed = particleData[offset + 8];
            let elasticity = particleData[offset + 9];
            let isBouncing = particleData[offset + 10];

            if (isBouncing === 0) {
                phase += 0.02;
                x += Math.sin(phase) * 0.5 + vx;
                particleData[offset + 6] = phase;
            } else {
                x += vx;
                vy += 0.1;
            }

            const dx = x - mouseX;
            const dy = y - mouseY;
            const distSq = dx * dx + dy * dy;
            if (distSq < 22500) {
                const dist = Math.sqrt(distSq);
                const force = (150 - dist) / 150;
                vx += (dx / dist) * force * 1.5;
                vy += (dy / dist) * force * 0.5;
            }

            vx *= 0.95;
            y += vy;
            rot += rotSpeed;

            handleCollision(x, y, vx, vy, size, elasticity, baseVy, isBouncing);
            y = collisionResult.y;
            vx = collisionResult.vx;
            vy = collisionResult.vy;
            isBouncing = collisionResult.isBouncing;

            if (isParticleOutOfBounds(x, y, width, height, window.scrollY)) {
                spawnParticle(i, false);
            } else {
                particleData[offset + 0] = x;
                particleData[offset + 1] = y;
                particleData[offset + 2] = vx;
                particleData[offset + 3] = vy;
                particleData[offset + 7] = rot;
                particleData[offset + 10] = isBouncing;
            }
        }
    }

    function renderParticles() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < MAX_PARTICLES; i++) {
            const offset = i * PARTICLE_STRIDE;
            const x = particleData[offset + 0];
            const y = particleData[offset + 1];
            const size = particleData[offset + 5];
            const rot = particleData[offset + 7];
            const symbolIndex = particleData[offset + 11];

            ctx.save();
            ctx.translate(x, y - window.scrollY);
            ctx.rotate(rot);

            ctx.globalAlpha = size / 40;
            const scale = size / maxSymbolSize;
            ctx.scale(scale, scale);
            ctx.drawImage(
                symbolCanvas,
                symbolIndex * maxSymbolSize, 0, maxSymbolSize, maxSymbolSize,
                -maxSymbolSize/2, -maxSymbolSize/2, maxSymbolSize, maxSymbolSize
            );

            ctx.restore();
        }
    }

    function animate() {
        updateParticles();
        renderParticles();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    // ========================================================
    // 5.5 Handmade Pixelated Starfield & Slow Shooting Stars Engine
    // ========================================================
    const starCanvas = document.getElementById('celestial-canvas');
    if (starCanvas) {
        const sCtx = starCanvas.getContext('2d');
        let sWidth = 0, sHeight = 0;

        function resizeStarCanvas() {
            sWidth = starCanvas.width = window.innerWidth;
            sHeight = starCanvas.height = window.innerHeight;
            initTwinkleStars();
        }
        window.addEventListener('resize', resizeStarCanvas, { passive: true });

        // --- A. Pixelated Twinkling Stars (Handmade 16-bit Geometry) ---
        let stars = [];

        function initTwinkleStars() {
            const count = window.innerWidth < 768 ? 90 : 190;
            stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * sWidth,
                    y: Math.random() * sHeight,
                    baseAlpha: 0.5 + Math.random() * 0.45,
                    twinkleSpeed: 0.8 + Math.random() * 2.5,
                    twinklePhase: Math.random() * Math.PI * 2,
                    // 0: 2x2 square, 1: 3x3 cross, 2: 5x5 diamond star, 3: 7x7 vintage cross
                    type: Math.random() < 0.45 ? 0 : (Math.random() < 0.75 ? 1 : (Math.random() < 0.92 ? 2 : 3)),
                    // Warm gold (#E5BE85), Radiant Bone (#FFFDF8), Diamond Ice (#D8E5F8)
                    color: Math.random() < 0.55 ? '229, 190, 133' : (Math.random() < 0.88 ? '255, 252, 244' : '210, 225, 250'),
                    parallax: 0.05 + Math.random() * 0.09
                });
            }
        }

        // --- B. Slow-Moving Shooting Stars with Handmade Pixel Trail ---
        let shootingStars = [];
        let sparks = []; // Floating stardust embers shed by shooting stars
        let lastSpawnTime = performance.now();
        let nextSpawnDelay = 800; // First shooting star appears within 1s

        function createShootingStar() {
            // Slight downward angle: 18 to 23 degrees below horizontal
            const angleDeg = 18 + Math.random() * 5;
            const angleRad = (angleDeg * Math.PI) / 180;
            // Serene, meditative glide (slow moving)
            const speed = 2.2 + Math.random() * 0.8;

            // Spawn from upper-left quadrant
            const startX = Math.random() * (sWidth * 0.45) - 80;
            const startY = Math.random() * (sHeight * 0.35) - 30;

            shootingStars.push({
                x: startX,
                y: startY,
                vx: Math.cos(angleRad) * speed,
                vy: Math.sin(angleRad) * speed,
                length: 110 + Math.random() * 50, // Rich pixelated tail length
                thickness: 3, // Crisp pixel thickness
                alpha: 0,
                maxAlpha: 0.95,
                state: 'fade-in',
                distanceTraveled: 0,
                maxDistance: sWidth * 0.75 + Math.random() * (sWidth * 0.4),
                color: Math.random() > 0.35 ? '229, 190, 133' : '255, 250, 240',
                lastSparkDist: 0
            });
        }

        let lastFrameTime = performance.now();

        function renderCelestial(now) {
            // Delta-time for silky high-FPS motion across 60Hz and 120Hz displays
            const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
            lastFrameTime = now;

            sCtx.clearRect(0, 0, sWidth, sHeight);

            const scrollY = window.scrollY || 0;

            // 1. Draw Pixelated Twinkling Stars
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                const alphaMod = (Math.sin(now * 0.001 * star.twinkleSpeed + star.twinklePhase) + 1) * 0.5;
                const alpha = Math.max(0.18, Math.min(1, star.baseAlpha * (0.4 + alphaMod * 0.65)));

                // Subtle parallax on scroll with screen wrapping
                let drawX = Math.floor(star.x);
                let drawY = Math.floor((star.y - scrollY * star.parallax) % sHeight);
                if (drawY < 0) drawY += sHeight;

                sCtx.fillStyle = `rgba(${star.color}, ${alpha.toFixed(3)})`;

                if (star.type === 0) {
                    // 2x2 crisp pixel square
                    sCtx.fillRect(drawX, drawY, 2, 2);
                } else if (star.type === 1) {
                    // 3x3 handmade cross
                    const arm = alphaMod > 0.65 ? 2 : 1;
                    sCtx.fillRect(drawX, drawY, 2, 2);
                    sCtx.fillStyle = `rgba(${star.color}, ${(alpha * 0.7).toFixed(3)})`;
                    sCtx.fillRect(drawX, drawY - arm, 2, arm);
                    sCtx.fillRect(drawX, drawY + 2, 2, arm);
                    sCtx.fillRect(drawX - arm, drawY, arm, 2);
                    sCtx.fillRect(drawX + 2, drawY, arm, 2);
                } else if (star.type === 2) {
                    // 5x5 diamond star
                    sCtx.fillRect(drawX, drawY, 3, 3);
                    sCtx.fillStyle = `rgba(${star.color}, ${(alpha * 0.6).toFixed(3)})`;
                    sCtx.fillRect(drawX + 1, drawY - 2, 1, 2);
                    sCtx.fillRect(drawX + 1, drawY + 3, 1, 2);
                    sCtx.fillRect(drawX - 2, drawY + 1, 2, 1);
                    sCtx.fillRect(drawX + 3, drawY + 1, 2, 1);
                } else {
                    // 7x7 vintage pixel cross sparkle
                    const flare = alphaMod > 0.5 ? 3 : 2;
                    sCtx.fillRect(drawX, drawY, 3, 3);
                    sCtx.fillStyle = `rgba(${star.color}, ${(alpha * 0.65).toFixed(3)})`;
                    sCtx.fillRect(drawX + 1, drawY - flare, 1, flare);
                    sCtx.fillRect(drawX + 1, drawY + 3, 1, flare);
                    sCtx.fillRect(drawX - flare, drawY + 1, flare, 1);
                    sCtx.fillRect(drawX + 3, drawY + 1, flare, 1);
                }
            }

            // 2. Spawn Organic Shooting Stars
            if (now - lastSpawnTime > nextSpawnDelay) {
                if (shootingStars.length < 2) {
                    createShootingStar();
                }
                lastSpawnTime = now;
                nextSpawnDelay = 5000 + Math.random() * 5500; // Next shooting star in 5-10.5s
            }

            // 3. Update & Draw Shooting Stars (High FPS glide + handmade pixel wake)
            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];

                const moveDist = Math.hypot(s.vx, s.vy) * (dt * 60);
                s.x += s.vx * (dt * 60);
                s.y += s.vy * (dt * 60);
                s.distanceTraveled += moveDist;

                // Smooth organic fade in & fade out
                if (s.state === 'fade-in') {
                    s.alpha += dt * 1.8;
                    if (s.alpha >= s.maxAlpha) {
                        s.alpha = s.maxAlpha;
                        s.state = 'gliding';
                    }
                } else if (s.state === 'gliding') {
                    if (s.distanceTraveled > s.maxDistance || s.x > sWidth + 120 || s.y > sHeight + 120) {
                        s.state = 'fade-out';
                    }
                } else if (s.state === 'fade-out') {
                    s.alpha -= dt * 1.4;
                    if (s.alpha <= 0) {
                        shootingStars.splice(i, 1);
                        continue;
                    }
                }

                // Shed floating pixel stardust embers along the path
                if (s.distanceTraveled - s.lastSparkDist > 8) {
                    s.lastSparkDist = s.distanceTraveled;
                    sparks.push({
                        x: s.x - (Math.random() - 0.5) * 6,
                        y: s.y - (Math.random() - 0.5) * 6,
                        alpha: s.alpha * (0.7 + Math.random() * 0.3),
                        life: 1.8 + Math.random() * 1.2,
                        maxLife: 1.8 + Math.random() * 1.2,
                        color: s.color,
                        size: Math.random() > 0.4 ? 2 : 3
                    });
                }

                // Render stepped pixel tail (20 discrete integer segments)
                const segments = 20;
                const speedMag = Math.hypot(s.vx, s.vy);
                const normVx = s.vx / speedMag;
                const normVy = s.vy / speedMag;

                for (let seg = segments; seg >= 0; seg--) {
                    const t = seg / segments; // 1 at head, 0 at tail tip
                    const segDist = (1 - t) * s.length;
                    const px = Math.floor(s.x - normVx * segDist);
                    const py = Math.floor(s.y - normVy * segDist);
                    const segAlpha = s.alpha * Math.pow(t, 1.8) * 0.9;
                    const segThickness = Math.max(1, Math.round(s.thickness * Math.pow(t, 0.7)));

                    sCtx.fillStyle = `rgba(${s.color}, ${segAlpha.toFixed(3)})`;
                    sCtx.fillRect(px, py, segThickness, segThickness);
                }

                // Pixel star head: 3x3 white core + warm gold cross halo
                const hx = Math.floor(s.x);
                const hy = Math.floor(s.y);
                // Outer pixel halo
                sCtx.fillStyle = `rgba(229, 190, 133, ${(s.alpha * 0.75).toFixed(3)})`;
                sCtx.fillRect(hx - 2, hy, 7, 3);
                sCtx.fillRect(hx, hy - 2, 3, 7);
                // Core white-hot star
                sCtx.fillStyle = `rgba(255, 255, 250, ${s.alpha.toFixed(3)})`;
                sCtx.fillRect(hx, hy, 3, 3);
            }

            // 4. Update & Draw Stardust Embers (Floating handmade pixel sparks)
            for (let i = sparks.length - 1; i >= 0; i--) {
                const sp = sparks[i];
                sp.life -= dt;
                if (sp.life <= 0) {
                    sparks.splice(i, 1);
                    continue;
                }
                const progress = sp.life / sp.maxLife;
                const curAlpha = sp.alpha * progress;

                sCtx.fillStyle = `rgba(${sp.color}, ${curAlpha.toFixed(3)})`;
                sCtx.fillRect(Math.floor(sp.x), Math.floor(sp.y), sp.size, sp.size);
            }

            requestAnimationFrame(renderCelestial);
        }

        resizeStarCanvas();
        requestAnimationFrame(renderCelestial);
    }

    // 6. Global Form Submit Handler (Loading State)
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (e) => {
            setTimeout(() => {
                if (!e.defaultPrevented) {
                    const btn = e.submitter || form.querySelector('button[type="submit"], button:not([type="button"]), input[type="submit"]');
                    if (btn) {
                        btn.disabled = true;
                        btn.classList.add('opacity-50', 'cursor-not-allowed');
                        const originalText = btn.innerHTML;
                        btn.dataset.originalText = originalText;
                        btn.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-current inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Submitting...`;
                    }
                }
            }, 0);
        });
    });

    // Handle BFCache (Back/Forward Cache) restoration to re-enable submit buttons
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            document.querySelectorAll("form button[disabled], form input[type='submit'][disabled]").forEach(btn => {
                if (btn.dataset.originalText) {
                    btn.innerHTML = btn.dataset.originalText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
        }
    });
});
