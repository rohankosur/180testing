export interface FeederProgram {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  heroHeadline: string;
  heroSubheadline: string;
  schoolTarget: string;
  grades: string;
  curriculumHighlights: {
    heading: string;
    points: string[];
  }[];
  cohortDetails: {
    size: string;
    cadence: string;
    location: string;
  };
}

export const feederPrograms: Record<string, FeederProgram> = {
  'south-windsor-high-math-prep': {
    slug: 'south-windsor-high-math-prep',
    title: 'South Windsor High Math Prep',
    metaTitle: 'South Windsor High Math Prep | Honors, AP & SAT | 180 Math',
    metaDescription: 'Master SWHS Honors Algebra, Geometry & AP Calculus. Small cohort math mentorship, individual pacing & local diagnostics in South Windsor, CT with Jyothi.',
    badge: 'SWHS Feeder Pipeline • Grades 9–12',
    heroHeadline: 'Master South Windsor High Honors & AP Mathematics.',
    heroSubheadline: 'Eliminate conceptual leaks in Honors Algebra, Geometry, Pre-Calc, and AP Calculus with first-principles mentorship in South Windsor, CT.',
    schoolTarget: 'South Windsor High School (SWHS)',
    grades: 'Grades 9–12',
    curriculumHighlights: [
      {
        heading: 'Honors Algebra I & II Conceptual Foundation',
        points: [
          'Deconstruct polynomial behavior, rational exponents, and function transformations from axiomatic roots.',
          'Prevent superficial equation memorization by instilling graphical and analytical intuition.',
          'Prepare for SWHS midterms and final assessments with structured problem decompilation.'
        ]
      },
      {
        heading: 'Honors Geometry & Deductive Rigor',
        points: [
          'Master synthetic and coordinate Euclidean proofs with logical completeness.',
          'Trigonometric foundations and cyclic geometry for advanced contest and STEM tracks.',
          'Visual spatial analysis that prevents common blindspots on standardized exams.'
        ]
      },
      {
        heading: 'AP Calculus AB / BC & Pre-Calculus Mastery',
        points: [
          'Epsilon-delta conceptual clarity, limits, differential optimization, and Riemann integral applications.',
          'Targeting score 5 on AP Calculus with systematic Free-Response Question (FRQ) grading rigor.',
          'Bridge seamlessly into collegiate engineering and higher mathematics coursework.'
        ]
      }
    ],
    cohortDetails: {
      size: 'Strictly 4–8 students per cohort',
      cadence: 'Weekly 90-minute intensive + diagnostic evaluations',
      location: '180 Math Studio, South Windsor, CT (06074)'
    }
  },
  'timothy-edwards-middle-school-math': {
    slug: 'timothy-edwards-middle-school-math',
    title: 'TEMS Accelerated Math Prep',
    metaTitle: 'TEMS Middle School Accelerated Math Prep | 180 Math',
    metaDescription: 'Target TEMS accelerated pathways and Grade 8 Algebra placement. Concept-first math mentorship, individual pacing & local diagnostics in South Windsor, CT.',
    badge: 'TEMS Feeder Pipeline • Grades 6–8',
    heroHeadline: 'Secure Timothy Edwards Accelerated Math Placement.',
    heroSubheadline: 'Bridge elementary arithmetic into abstract algebraic mastery. Tailored for TEMS students aiming for 8th Grade Algebra 1 placement.',
    schoolTarget: 'Timothy Edwards Middle School (TEMS)',
    grades: 'Grades 6–8',
    curriculumHighlights: [
      {
        heading: 'Accelerated Track Diagnostic Evaluation',
        points: [
          'Pinpoint fractional reasoning, negative number intuition, and proportional arithmetic gaps before Grade 7/8.',
          'Replace rote mnemonic rules with visual, first-principles number theory.',
          'Build unwavering test confidence for the South Windsor district placement assessments.'
        ]
      },
      {
        heading: 'Grade 8 Algebra 1 Placement Roadmap',
        points: [
          'Direct alignment with the criteria required for TEMS Grade 8 Algebra 1 honors placement.',
          'Multi-step equation modeling, linear inequalities, and functional notation mastery.',
          'Eliminating the middle-school plateau where high-achieving students suddenly struggle.'
        ]
      },
      {
        heading: 'AMC 8 & Competitive Math Problem Solving',
        points: [
          'Expose motivated middle schoolers to non-routine problem solving and combinatorial thinking.',
          'Cultivate resilience when faced with unfamiliar mathematical patterns and proofs.',
          'Foster genuine intellectual curiosity in a supportive, small-group environment.'
        ]
      }
    ],
    cohortDetails: {
      size: 'Strictly 4–6 students per cohort',
      cadence: 'Weekly 75-minute conceptual workshop + weekly homework lab',
      location: '180 Math Studio, South Windsor, CT (06074)'
    }
  },
  'digital-sat-math-south-windsor': {
    slug: 'digital-sat-math-south-windsor',
    title: 'Digital SAT Math Intensive',
    metaTitle: 'Digital SAT Math South Windsor | 750+ Prep | 180 Math',
    metaDescription: 'Target 750+ on Digital SAT Math modules. Diagnostic mistake-analysis, Desmos calculator speed, individual pacing & local mentorship in South Windsor, CT.',
    badge: 'SAT Prep • Target 750+',
    heroHeadline: 'Target 750+ on Digital SAT Math in South Windsor.',
    heroSubheadline: 'Master adaptive Module 2 traps, advanced Desmos workflows, and surgical mistake analysis with South Windsor’s premier math mentor.',
    schoolTarget: 'South Windsor & Hartford County High Schools',
    grades: 'Grades 10–12',
    curriculumHighlights: [
      {
        heading: 'Adaptive Module 2 Hard-Question Engineering',
        points: [
          'Deconstruct College Board adaptive routing algorithms to reliably unlock the high-difficulty Module 2.',
          'Surgically categorize hard-module question types: nonlinear system intersections, circle constants, and advanced quadratics.',
          'Master zero-margin-for-error pacing routines to reserve 8+ minutes for difficult questions.'
        ]
      },
      {
        heading: 'Desmos Embedded Calculator Mastery',
        points: [
          'Turn the embedded Desmos graphing calculator into a speed weapon for systems, regressions, and root finding.',
          'Execute slider-based parameters and tabular solutions in seconds without manual algebra fatigue.',
          'Know exactly when to use algebraic proof versus graphical analysis for 100% accuracy.'
        ]
      },
      {
        heading: 'Diagnostic Root-Cause Error Audit',
        points: [
          'Analyze every missed problem down to the exact middle-school conceptual fracture that triggered the lapse.',
          'Eliminate careless reading errors and time pressure anxiety through simulated adaptive testing.',
          'Direct mentorship by Jyothi Kosur with individualized homework targeting each student’s weak spots.'
        ]
      }
    ],
    cohortDetails: {
      size: 'Strictly 4–8 students per bootcamp cohort',
      cadence: 'Bi-weekly 2-hour intensive + full-length adaptive practice tests',
      location: '180 Math Studio, South Windsor, CT (06074)'
    }
  }
};
