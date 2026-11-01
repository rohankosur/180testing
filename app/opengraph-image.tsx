import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = '180 Math — Premier Mathematics Mentorship & Diagnostic Engine';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0B0B33 0%, #070724 60%, #12134D 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          border: '12px solid #1A1B5E',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '26px',
                background: '#E5BE85',
                color: '#0B0B33',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 700,
              }}
            >
              π
            </div>
            <div
              style={{
                fontSize: '34px',
                fontWeight: 800,
                color: '#FAF5E8',
                letterSpacing: '2px',
                display: 'flex',
              }}
            >
              180 MATH
            </div>
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#E5BE85',
              letterSpacing: '1px',
              border: '1px solid rgba(229, 190, 133, 0.4)',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(229, 190, 133, 0.1)',
              display: 'flex',
            }}
          >
            SOUTH WINDSOR, CT • 06074
          </div>
        </div>

        {/* Central Hero Block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '60px',
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#FAF5E8',
              letterSpacing: '-1px',
              display: 'flex',
            }}
          >
            Master Math, One Degree at a Time.
          </div>
          <div
            style={{
              fontSize: '28px',
              lineHeight: 1.35,
              color: '#E5BE85',
              fontWeight: 400,
              display: 'flex',
            }}
          >
            First-Principles Mathematics Mentorship & Diagnostic Engine
          </div>
        </div>

        {/* Footer Authority Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(229, 190, 133, 0.25)',
            paddingTop: '26px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ color: '#E2E8F0', fontSize: '20px', display: 'flex' }}>
              <span style={{ color: '#E5BE85', fontWeight: 600, marginRight: '6px' }}>Founder:</span> Jyothi Kosur
            </div>
            <div style={{ color: 'rgba(229, 190, 133, 0.5)', fontSize: '20px', display: 'flex' }}>•</div>
            <div style={{ color: '#E2E8F0', fontSize: '20px', display: 'flex' }}>
              TEMS & SWHS Pathways
            </div>
            <div style={{ color: 'rgba(229, 190, 133, 0.5)', fontSize: '20px', display: 'flex' }}>•</div>
            <div style={{ color: '#E2E8F0', fontSize: '20px', display: 'flex' }}>
              Digital SAT Math (750+)
            </div>
          </div>
          <div
            style={{
              color: '#FAF5E8',
              fontSize: '22px',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            180math.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
