import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SatScoreEstimator from '@/components/tools/SatScoreEstimator';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0B33] text-[#FAF5E8] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(229, 190, 133, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 190, 133, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
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
            <Link href="/programs/south-windsor-high-math-prep" className="hover:text-[#E5BE85] transition-colors">
              SWHS Prep
            </Link>
            <Link href="/programs/timothy-edwards-middle-school-math" className="hover:text-[#E5BE85] transition-colors">
              TEMS Accelerated
            </Link>
            <Link href="/programs/digital-sat-math-south-windsor" className="hover:text-[#E5BE85] transition-colors">
              Digital SAT
            </Link>
            <Link href="/pricing" className="hover:text-[#E5BE85] transition-colors">
              Tuition
            </Link>
          </nav>
          <Link
            href="#schedule"
            className="px-5 py-2.5 rounded-full border border-[#E5BE85] text-[#0B0B33] bg-[#E5BE85] font-sans font-semibold text-sm hover:bg-[#F5DFC0] transition-colors shadow-lg shadow-[#E5BE85]/20"
          >
            Diagnostic Evaluation
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#E5BE85]/30 bg-[#E5BE85]/10 text-[#E5BE85] font-mono text-xs uppercase tracking-wider mb-8">
          <span>South Windsor, CT • 06074 Studio Cohorts</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#FAF5E8] leading-tight tracking-tight mb-8">
          Master Math, <br />
          <span className="text-[#E5BE85] italic">One Degree at a Time.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#E2E8F0] font-sans max-w-3xl mx-auto leading-relaxed mb-12">
          First-principles mathematics mentorship engineered by Jyothi Kosur. We diagnose the hidden conceptual fracture beneath rote memorization—from TEMS middle school placement to SWHS AP Calculus and Digital SAT 750+.
        </p>

        {/* CTA Stack */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#schedule"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E5BE85] text-[#0B0B33] font-sans font-semibold text-base hover:bg-[#F5DFC0] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#E5BE85]/20"
          >
            Schedule Diagnostic Evaluation
          </Link>
          <a
            href="/test.html"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#E5BE85]/40 text-[#FAF5E8] font-sans font-semibold text-base hover:bg-[#E5BE85]/10 transition-all"
          >
            Take Interactive Diagnostic
          </a>
        </div>
      </section>

      {/* Local Feeder Authority Hub */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-[#E5BE85]/20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-widest mb-3">
            Programmatic Feeder Pipelines
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF5E8]">
            Curriculum Alignment Engineered for South Windsor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link
            href="/programs/south-windsor-high-math-prep"
            className="group block p-8 rounded-2xl border border-[#E5BE85]/20 bg-[#101144]/60 hover:border-[#E5BE85] transition-all hover:-translate-y-1"
          >
            <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-wider mb-3">
              SWHS Feeder Pipeline
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#FAF5E8] mb-3 group-hover:text-[#E5BE85] transition-colors">
              South Windsor High Math Prep
            </h3>
            <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed mb-6">
              Full alignment with SWHS Honors Algebra I & II, Honors Geometry, Pre-Calculus, and AP Calculus AB/BC.
            </p>
            <span className="font-mono text-xs text-[#E5BE85] inline-flex items-center gap-1 group-hover:underline">
              Explore SWHS Pathway →
            </span>
          </Link>

          {/* Card 2 */}
          <Link
            href="/programs/timothy-edwards-middle-school-math"
            className="group block p-8 rounded-2xl border border-[#E5BE85]/20 bg-[#101144]/60 hover:border-[#E5BE85] transition-all hover:-translate-y-1"
          >
            <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-wider mb-3">
              TEMS Feeder Pipeline
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#FAF5E8] mb-3 group-hover:text-[#E5BE85] transition-colors">
              Timothy Edwards Middle School
            </h3>
            <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed mb-6">
              Targeted preparation for TEMS accelerated pathways, 8th Grade Algebra placement, and AMC 8 math competitions.
            </p>
            <span className="font-mono text-xs text-[#E5BE85] inline-flex items-center gap-1 group-hover:underline">
              Explore TEMS Pathway →
            </span>
          </Link>

          {/* Card 3 */}
          <Link
            href="/programs/digital-sat-math-south-windsor"
            className="group block p-8 rounded-2xl border border-[#E5BE85]/20 bg-[#101144]/60 hover:border-[#E5BE85] transition-all hover:-translate-y-1"
          >
            <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-wider mb-3">
              Score Target: 750+
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#FAF5E8] mb-3 group-hover:text-[#E5BE85] transition-colors">
              Digital SAT Math Intensive
            </h3>
            <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed mb-6">
              Adaptive Module 2 speed tactics, Desmos graphing optimization, and systematic diagnostic error remediation.
            </p>
            <span className="font-mono text-xs text-[#E5BE85] inline-flex items-center gap-1 group-hover:underline">
              Explore SAT Pathway →
            </span>
          </Link>
        </div>

        {/* Compact SAT Estimator Utility Preview */}
        <div className="mt-16">
          <SatScoreEstimator compact={true} />
        </div>
      </section>

      {/* Terminal Conversion Anchor #schedule */}
      <section id="schedule" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="p-8 sm:p-12 rounded-3xl border border-[#E5BE85]/40 bg-[#101144] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="font-mono text-xs text-[#E5BE85] uppercase tracking-widest mb-3">
                South Windsor Studio Cohort
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF5E8] mb-4">
                Secure Your Child&apos;s Diagnostic Evaluation
              </h2>
              <p className="text-sm font-sans text-[#E2E8F0] leading-relaxed mb-6">
                Small cohorts of 4–8 students. Individualized diagnostic roadmap and root-cause math mentorship by Jyothi Kosur.
              </p>
              <div className="space-y-2 text-xs font-mono text-[#E5BE85]">
                <div>✓ 60-Minute Comprehensive Conceptual Audit</div>
                <div>✓ Exact Pinpointing of Prerequisite Gaps</div>
                <div>✓ Customized 90-Day Acceleration Roadmap</div>
              </div>
            </div>

            <div className="bg-[#0B0B33] p-6 rounded-2xl border border-[#E5BE85]/20">
              <form action="mailto:contact@180math.com" method="POST" encType="text/plain" className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Parent Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Miller"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Student Grade & School</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 7th Grade, TEMS / 10th Grade, SWHS"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Current Math Course</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Honors Geometry, Pre-Algebra, AP Calc"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#E2E8F0] mb-1">Contact Email / Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="email@example.com or (860) 555-0123"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#101144] border border-[#E5BE85]/20 text-[#FAF5E8] text-sm focus:outline-none focus:border-[#E5BE85]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#E5BE85] text-[#0B0B33] font-sans font-bold text-sm hover:bg-[#F5DFC0] transition-colors"
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
            <Link href="/programs/south-windsor-high-math-prep" className="hover:text-[#E5BE85]">SWHS Prep</Link>
            <Link href="/programs/timothy-edwards-middle-school-math" className="hover:text-[#E5BE85]">TEMS Prep</Link>
            <Link href="/programs/digital-sat-math-south-windsor" className="hover:text-[#E5BE85]">Digital SAT</Link>
            <Link href="/pricing" className="hover:text-[#E5BE85]">Pricing</Link>
            <Link href="/contact" className="hover:text-[#E5BE85]">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
