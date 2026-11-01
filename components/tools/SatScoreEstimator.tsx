'use client';

import React, { useState, useMemo } from 'react';

export interface SatEstimatorProps {
  compact?: boolean;
  onPlanSelected?: (planSummary: string) => void;
}

export default function SatScoreEstimator({ compact = false, onPlanSelected }: SatEstimatorProps) {
  const [baselineScore, setBaselineScore] = useState<number>(580);
  const [weeks, setWeeks] = useState<number>(12);
  const [mathTrack, setMathTrack] = useState<'Algebra II' | 'Pre-Calc' | 'AP Calc'>('Pre-Calc');
  const [lockedIn, setLockedIn] = useState<boolean>(false);

  // Projection Engine
  const { projectedDelta, targetScore, hoursPerWeek, priorityTopics, trajectoryLabel } = useMemo(() => {
    const headroom = 800 - baselineScore;

    // Track multiplier
    const trackMultipliers: Record<string, number> = {
      'Algebra II': 1.0,
      'Pre-Calc': 1.15,
      'AP Calc': 1.25,
    };
    const trackMult = trackMultipliers[mathTrack] || 1.0;

    // Weeks duration factor
    const weekFactors: Record<number, { factor: number; hours: number }> = {
      4: { factor: 0.38, hours: 6.5 },
      8: { factor: 0.62, hours: 5.0 },
      12: { factor: 0.78, hours: 4.0 },
      16: { factor: 0.88, hours: 3.5 },
    };
    const weekData = weekFactors[weeks] || { factor: 0.78, hours: 4.0 };

    // Calculate raw delta with diminishing returns for high baselines
    let rawDelta = Math.round(headroom * weekData.factor * (trackMult * 0.85));
    // Enforce realistic bounds
    rawDelta = Math.max(30, Math.min(headroom, rawDelta));
    // Step by 10
    const delta = Math.round(rawDelta / 10) * 10;
    const finalTarget = Math.min(800, baselineScore + delta);

    // Topic prioritizations
    let topics: { name: string; emphasis: string; details: string }[] = [];
    let trajectory = '';

    if (baselineScore < 560) {
      trajectory = 'Foundational Reconstruction & Acceleration';
      topics = [
        {
          name: 'Problem Solving & Data Analysis',
          emphasis: 'High Priority (40%)',
          details: 'Unit conversions, proportional reasoning, two-way contingency tables, and statistical scatterplots.',
        },
        {
          name: 'Linear Algebra Foundations',
          emphasis: 'Essential (35%)',
          details: 'Deconstruct slope-intercept, system intersections, and word-problem translation traps.',
        },
        {
          name: 'Quadratic & Function Basics',
          emphasis: 'Reinforcement (25%)',
          details: 'Standard, vertex, and factored forms; quadratic formula; factoring shortcuts.',
        },
      ];
    } else if (baselineScore <= 680) {
      trajectory = 'Target 700+ Advanced Mastery Pipeline';
      topics = [
        {
          name: 'Advanced Math & Nonlinear Systems',
          emphasis: 'Critical Focus (45%)',
          details: 'Rational expressions, extraneous roots, function transformations, and polynomial long division.',
        },
        {
          name: 'Geometry, Circles & Radian Trig',
          emphasis: 'High Yield (30%)',
          details: 'Circle equations (h, k), arc-length conversions, similar triangles, and special trig ratios.',
        },
        {
          name: 'Desmos Graphical Speed Techniques',
          emphasis: 'Efficiency (25%)',
          details: 'Instant solutions for system intersections, table-based regression, and slider parameters.',
        },
      ];
    } else {
      trajectory = 'Target 770–800 Elite Perfection Protocol';
      topics = [
        {
          name: 'Module 2 Hard-Tier Trap Neutralization',
          emphasis: 'Perfection Focus (50%)',
          details: 'Constant-matching in polynomial identities, parameterized quadratic constraints, and edge cases.',
        },
        {
          name: 'Sub-45-Second Desmos Workflows',
          emphasis: 'Time Bank (30%)',
          details: 'Banking 8+ minutes on Module 2 to exhaustively check questions #18–22 without time stress.',
        },
        {
          name: 'Error Pattern Root-Cause Log',
          emphasis: 'Zero Margin (20%)',
          details: 'Systematic elimination of reading misinterpretations, sign omissions, and notation traps.',
        },
      ];
    }

    return {
      projectedDelta: delta,
      targetScore: finalTarget,
      hoursPerWeek: weekData.hours,
      priorityTopics: topics,
      trajectoryLabel: trajectory,
    };
  }, [baselineScore, weeks, mathTrack]);

  const handleLockIn = (e: React.MouseEvent) => {
    e.preventDefault();
    setLockedIn(true);

    const planSummary = `Baseline: ${baselineScore} | Target: ${targetScore} (+${projectedDelta} pts) | Weeks: ${weeks} | Track: ${mathTrack}`;
    if (onPlanSelected) {
      onPlanSelected(planSummary);
    }

    // Attempt to pre-fill schedule form notes or inputs
    if (typeof document !== 'undefined') {
      const scheduleEl = document.getElementById('schedule');
      if (scheduleEl) {
        scheduleEl.scrollIntoView({ behavior: 'smooth' });
      }

      // Populate form message or notes if available
      const msgInputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input[name="Message"], textarea[name="Message"], input[name="Current Math Course"]'
      );
      msgInputs.forEach((el) => {
        if (!el.value || el.value.includes('Baseline:')) {
          el.value = `[SAT Goal] Baseline: ${baselineScore} → Target: ${targetScore} in ${weeks} wks (${mathTrack})`;
        }
      });
    }
  };

  return (
    <div
      className={`rounded-3xl border border-[#E5BE85]/30 bg-[#0B0B33] p-6 sm:p-8 md:p-10 text-[#F8FAFC] shadow-2xl relative overflow-hidden transition-all ${
        compact ? 'max-w-2xl mx-auto' : 'w-full'
      }`}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, #E5BE85 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5BE85]/20 pb-5 mb-8">
        <div>
          <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-widest mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5BE85] animate-pulse"></span>
            Interactive Diagnostic Estimator
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF5E8]">
            Digital SAT Math Score Delta Engine
          </h3>
        </div>
        <div className="px-3 py-1 rounded-full border border-[#E5BE85]/30 bg-[#101144] font-mono text-xs text-[#E5BE85]">
          South Windsor Studio Model
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Control 1: Baseline Slider */}
        <div className="bg-[#101144]/80 p-5 rounded-2xl border border-[#E5BE85]/20">
          <div className="flex items-center justify-between mb-2">
            <label className="font-mono text-xs text-[#8E9AB0] uppercase">Baseline Math Score</label>
            <span className="font-mono text-lg font-bold text-[#E5BE85]">{baselineScore}</span>
          </div>
          <input
            type="range"
            min="400"
            max="750"
            step="10"
            value={baselineScore}
            onChange={(e) => setBaselineScore(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-[#0B0B33] rounded-lg appearance-none cursor-pointer accent-[#E5BE85]"
          />
          <div className="flex justify-between font-mono text-[10px] text-[#8E9AB0] mt-2">
            <span>400</span>
            <span>550</span>
            <span>700</span>
            <span>750</span>
          </div>
        </div>

        {/* Control 2: Weeks Available */}
        <div className="bg-[#101144]/80 p-5 rounded-2xl border border-[#E5BE85]/20">
          <label className="block font-mono text-xs text-[#8E9AB0] uppercase mb-2">Weeks to Target Test</label>
          <div className="grid grid-cols-4 gap-2">
            {[4, 8, 12, 16].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setWeeks(w)}
                className={`py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  weeks === w
                    ? 'bg-[#E5BE85] text-[#0B0B33] shadow-md shadow-[#E5BE85]/20 scale-105'
                    : 'bg-[#0B0B33] text-[#E2E8F0] border border-[#E5BE85]/20 hover:border-[#E5BE85]/60'
                }`}
              >
                {w}w
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] text-[#8E9AB0] mt-2">
            {weeks <= 4 ? 'Sprint diagnostic' : weeks <= 8 ? 'Accelerated prep' : 'Full conceptual mastery'}
          </p>
        </div>

        {/* Control 3: Current Math Course */}
        <div className="bg-[#101144]/80 p-5 rounded-2xl border border-[#E5BE85]/20">
          <label className="block font-mono text-xs text-[#8E9AB0] uppercase mb-2">School Math Track</label>
          <div className="grid grid-cols-3 gap-1.5">
            {(['Algebra II', 'Pre-Calc', 'AP Calc'] as const).map((track) => (
              <button
                key={track}
                type="button"
                onClick={() => setMathTrack(track)}
                className={`py-2 px-1 rounded-xl font-mono text-[11px] font-bold text-center transition-all ${
                  mathTrack === track
                    ? 'bg-[#E5BE85] text-[#0B0B33] shadow-md shadow-[#E5BE85]/20'
                    : 'bg-[#0B0B33] text-[#E2E8F0] border border-[#E5BE85]/20 hover:border-[#E5BE85]/60'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] text-[#8E9AB0] mt-2">
            Calibrates algebraic depth & speed
          </p>
        </div>
      </div>

      {/* Projection Scoreboard */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#101144] to-[#17185C] border border-[#E5BE85]/40 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#E5BE85]/20">
          <div className="sm:pr-4">
            <div className="font-mono text-xs text-[#8E9AB0] uppercase mb-1">Baseline Score</div>
            <div className="font-serif text-3xl font-bold text-[#E2E8F0]">{baselineScore}</div>
          </div>
          <div className="pt-4 sm:pt-0 sm:px-4">
            <div className="font-mono text-xs text-[#8E9AB0] uppercase mb-1">Projected Gain</div>
            <div className="font-serif text-4xl font-extrabold text-[#E5BE85]">
              +{projectedDelta} <span className="text-sm font-sans font-normal text-[#E2E8F0]">pts</span>
            </div>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-4">
            <div className="font-mono text-xs text-[#8E9AB0] uppercase mb-1">Estimated Target</div>
            <div className="font-serif text-4xl font-extrabold text-[#FAF5E8] flex items-center justify-center gap-2">
              <span>{targetScore}</span>
              {targetScore >= 750 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#E5BE85] text-[#0B0B33] font-mono font-bold">
                  750+ Tier
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E5BE85]/20 flex flex-wrap items-center justify-between text-xs font-mono text-[#8E9AB0] gap-2">
          <span>
            <strong className="text-[#E5BE85]">Recommended Cadence:</strong> {hoursPerWeek} hrs/week (Studio Cohort + Adaptive Lab)
          </span>
          <span className="text-[#E2E8F0]">
            Track: <span className="text-[#E5BE85] font-semibold">{trajectoryLabel}</span>
          </span>
        </div>
      </div>

      {/* Diagnostic Focus Priorities */}
      {!compact && (
        <div className="mb-8">
          <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-wider mb-3">
            Surgical Focus Areas for {baselineScore} → {targetScore}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priorityTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#E5BE85]/20 bg-[#101144]/60 text-xs"
              >
                <div className="font-mono text-[10px] text-[#E5BE85] font-bold uppercase mb-1">
                  {item.emphasis}
                </div>
                <div className="font-serif font-bold text-sm text-[#FAF5E8] mb-2">{item.name}</div>
                <div className="font-sans text-[#E2E8F0] leading-relaxed">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Terminal Action Conversion */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E5BE85]/20">
        <div className="text-xs font-mono text-[#8E9AB0] text-center sm:text-left">
          {lockedIn ? (
            <span className="text-emerald-400 font-bold">
              ✓ Plan saved to clipboard state! Scroll down to confirm cohort placement.
            </span>
          ) : (
            <span>
              Mentored directly by Jyothi Kosur • South Windsor Cohorts strictly limited to 4–8 students.
            </span>
          )}
        </div>
        <button
          onClick={handleLockIn}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E5BE85] text-[#0B0B33] font-sans font-bold text-sm hover:bg-[#F5DFC0] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#E5BE85]/20 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Lock In Your Prep Plan</span>
          <span className="font-mono">→</span>
        </button>
      </div>
    </div>
  );
}
