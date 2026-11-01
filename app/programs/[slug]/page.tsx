import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { feederPrograms } from '@/data/programs';
import JsonLdGraph, { BreadcrumbItem } from '@/components/seo/JsonLdGraph';
import SatScoreEstimator from '@/components/tools/SatScoreEstimator';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(feederPrograms).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = feederPrograms[slug];

  if (!program) {
    return {
      title: 'Program Not Found | 180 Math',
    };
  }

  const pageUrl = `https://180math.com/programs/${program.slug}`;

  return {
    title: program.metaTitle,
    description: program.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: program.metaTitle,
      description: program.metaDescription,
      url: pageUrl,
      siteName: '180 Math',
      images: [
        {
          url: 'https://180math.com/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: `${program.title} - 180 Math South Windsor, CT`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: program.metaTitle,
      description: program.metaDescription,
      images: ['https://180math.com/opengraph-image.png'],
    },
  };
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = feederPrograms[slug];

  if (!program) {
    notFound();
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: 'https://180math.com' },
    { name: 'Pricing & Programs', url: 'https://180math.com/pricing' },
    { name: program.title, url: `https://180math.com/programs/${program.slug}` },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B33] text-[#FAF5E8] relative overflow-hidden">
      <JsonLdGraph breadcrumbs={breadcrumbs} />

      {/* Background Architectural Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(229, 190, 133, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 190, 133, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Navigation */}
      <header className="relative z-10 border-b border-[#E5BE85]/20 backdrop-blur-md bg-[#0B0B33]/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-[#E5BE85] text-[#0B0B33] flex items-center justify-center font-mono font-bold text-xl transition-transform group-hover:scale-105">
              π
            </div>
            <div className="text-xl font-bold tracking-wider font-sans text-[#FAF5E8]">
              180 <span className="text-[#E5BE85]">MATH</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-mono text-[#E2E8F0]">
            <Link href="/" className="hover:text-[#E5BE85] transition-colors">
              ← Main Studio
            </Link>
            <Link href="/pricing" className="hover:text-[#E5BE85] transition-colors">
              Tuition & Pricing
            </Link>
            <Link href="/contact" className="hover:text-[#E5BE85] transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="#schedule"
            className="px-5 py-2.5 rounded-full border border-[#E5BE85] text-[#0B0B33] bg-[#E5BE85] font-sans font-semibold text-sm hover:bg-[#F5DFC0] transition-colors shadow-lg shadow-[#E5BE85]/20"
          >
            Schedule Diagnostic
          </Link>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="relative z-10 max-w-5xl mx-auto px-6 pt-8">
        <ol className="flex items-center space-x-2 font-mono text-xs text-[#8E9AB0]">
          <li>
            <Link href="/" className="hover:text-[#E5BE85] transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/pricing" className="hover:text-[#E5BE85] transition-colors">
              Programs
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#E5BE85] font-semibold">{program.title}</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#E5BE85]/30 bg-[#E5BE85]/10 text-[#E5BE85] font-mono text-xs uppercase tracking-wider mb-6">
          <span>{program.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FAF5E8] leading-tight tracking-tight mb-6">
          {program.heroHeadline}
        </h1>
        <p className="text-lg sm:text-xl text-[#E2E8F0] font-sans leading-relaxed mb-8 max-w-3xl">
          {program.heroSubheadline}
        </p>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl border border-[#E5BE85]/20 bg-[#101144]/50 font-mono text-xs text-[#FAF5E8]">
          <div>
            <div className="text-[#8E9AB0] mb-1">Target School</div>
            <div className="font-semibold text-[#E5BE85]">{program.schoolTarget}</div>
          </div>
          <div>
            <div className="text-[#8E9AB0] mb-1">Cohort Capacity</div>
            <div className="font-semibold text-[#E5BE85]">{program.cohortDetails.size}</div>
          </div>
          <div>
            <div className="text-[#8E9AB0] mb-1">Cadence & Studio</div>
            <div className="font-semibold text-[#E5BE85]">{program.cohortDetails.location}</div>
          </div>
        </div>

        {/* Interactive Utility: SAT Score Estimator (Digital SAT Route) */}
        {program.slug === 'digital-sat-math-south-windsor' && (
          <div className="mt-12">
            <SatScoreEstimator />
          </div>
        )}
      </section>

      {/* Curriculum Breakdown */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="border-t border-[#E5BE85]/20 pt-12 mb-12">
          <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-widest mb-2">
            Curriculum Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF5E8]">
            What Your Child Will Master
          </h2>
        </div>

        <div className="space-y-8">
          {program.curriculumHighlights.map((block, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-[#E5BE85]/20 bg-[#101144]/40 hover:border-[#E5BE85]/50 transition-all"
            >
              <h3 className="text-xl font-serif font-bold text-[#FAF5E8] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#E5BE85]/20 text-[#E5BE85] font-mono text-sm flex items-center justify-center">
                  0{idx + 1}
                </span>
                {block.heading}
              </h3>
              <ul className="space-y-3 font-sans text-sm text-[#E2E8F0] leading-relaxed">
                {block.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="text-[#E5BE85] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About Mentor Callout */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <div className="p-8 rounded-2xl border border-[#E5BE85]/30 bg-[#0B0B33] flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-full bg-[#E5BE85] text-[#0B0B33] flex items-center justify-center font-serif text-3xl font-bold flex-shrink-0">
            JK
          </div>
          <div>
            <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-wider mb-1">
              Lead Instructor & Founder
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#FAF5E8] mb-2">
              Mentorship Directed by Jyothi Kosur
            </h3>
            <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed">
              With over a decade of dedicated mathematics mentorship in South Windsor, CT, Jyothi works directly with each student cohort. Her first-principles diagnostic system pinpoints the exact foundational gap preventing student acceleration.
            </p>
          </div>
        </div>
      </section>

      {/* High-Visibility Terminal Conversion Card Anchored to #schedule */}
      <section id="schedule" className="relative z-10 max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E5BE85] bg-[#101144] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-widest mb-3">
                Reserve Cohort Spot
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF5E8] mb-4">
                Schedule {program.title} Diagnostic
              </h2>
              <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed mb-6">
                Cohort sizes are strictly capped at 4–8 students to maintain personalized instruction. Each placement starts with a comprehensive 60-minute diagnostic session.
              </p>
              <div className="space-y-2 text-xs font-mono text-[#E5BE85]">
                <div>✓ South Windsor Studio (06074)</div>
                <div>✓ Feeder Zones: Manchester, Vernon, East Windsor</div>
                <div>✓ 1-on-1 Diagnostic Feedback & Study Plan</div>
              </div>
            </div>

            <div className="bg-[#0B0B33] p-6 rounded-2xl border border-[#E5BE85]/30">
              <form action="mailto:contact@180math.com" method="POST" encType="text/plain" className="space-y-4">
                <input type="hidden" name="program" value={program.title} />
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Parent Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Williams"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Student Current Grade</label>
                  <input
                    type="text"
                    required
                    defaultValue={program.grades}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Contact Email / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="email@example.com or (860) 555-0199"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#E5BE85] text-[#0B0B33] font-sans font-bold text-sm hover:bg-[#F5DFC0] transition-colors shadow-lg shadow-[#E5BE85]/20"
                >
                  Schedule Diagnostic Evaluation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#E5BE85]/20 py-12 text-center text-xs font-mono text-[#8E9AB0]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} 180 Math. Founded by Jyothi Kosur. South Windsor, CT 06074.</div>
          <div className="flex items-center space-x-6 text-[#E2E8F0]">
            <Link href="/" className="hover:text-[#E5BE85]">Main Studio</Link>
            <Link href="/programs/south-windsor-high-math-prep" className="hover:text-[#E5BE85]">SWHS Prep</Link>
            <Link href="/programs/timothy-edwards-middle-school-math" className="hover:text-[#E5BE85]">TEMS Prep</Link>
            <Link href="/programs/digital-sat-math-south-windsor" className="hover:text-[#E5BE85]">Digital SAT</Link>
            <Link href="/pricing" className="hover:text-[#E5BE85]">Tuition</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
