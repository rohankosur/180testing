import React from 'react';

export interface BreadcrumbItem {
    name: string;
    url: string;
}

export const masterEntityGraph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "EducationalOrganization",
            "@id": "https://180math.com/#organization",
            "name": "180 Math",
            "alternateName": "180 Math Mentorship",
            "url": "https://180math.com",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://180math.com/#logo",
                "url": "https://180math.com/logo.png",
                "contentUrl": "https://180math.com/logo.png",
                "caption": "180 Math Logo",
                "width": "512",
                "height": "346"
            },
            "image": "https://180math.com/opengraph-image.png",
            "description": "Premier first-principles mathematics mentorship, diagnostic evaluation engines, and competitive curriculum prep (AP Calculus, AMC, and Digital SAT Math) in South Windsor, CT.",
            "priceRange": "$$",
            "founder": {
                "@id": "https://180math.com/#jyothi-kosur"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "South Windsor Studio",
                "addressLocality": "South Windsor",
                "addressRegion": "CT",
                "postalCode": "06074",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8239,
                "longitude": -72.5804
            },
            "areaServed": [
                {
                    "@type": "City",
                    "name": "South Windsor",
                    "sameAs": "https://en.wikipedia.org/wiki/South_Windsor,_Connecticut"
                },
                {
                    "@type": "City",
                    "name": "Manchester",
                    "sameAs": "https://en.wikipedia.org/wiki/Manchester,_Connecticut"
                },
                {
                    "@type": "City",
                    "name": "East Windsor",
                    "sameAs": "https://en.wikipedia.org/wiki/East_Windsor,_Connecticut"
                },
                {
                    "@type": "City",
                    "name": "Vernon",
                    "sameAs": "https://en.wikipedia.org/wiki/Vernon,_Connecticut"
                },
                {
                    "@type": "GeoShape",
                    "postalCode": ["06074", "06040", "06042", "06016", "06066"],
                    "addressCountry": "US"
                }
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "180 Math Curricula & Programs",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@id": "https://180math.com/#course-grade-school-foundations"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@id": "https://180math.com/#course-tems-middle-school"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@id": "https://180math.com/#course-swhs-honors-ap"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@id": "https://180math.com/#course-digital-sat-math"
                        }
                    }
                ]
            }
        },
        {
            "@type": "Person",
            "@id": "https://180math.com/#jyothi-kosur",
            "name": "Jyothi Kosur",
            "jobTitle": "Lead Instructor & Founder",
            "worksFor": {
                "@id": "https://180math.com/#organization"
            },
            "knowsAbout": [
                "Elementary Mathematics",
                "Pre-Algebra",
                "Algebra I & II",
                "Geometry",
                "Pre-Calculus",
                "AP Calculus AB/BC",
                "Digital SAT Math"
            ],
            "description": "Lead instructor and founder of 180 Math with over a decade of mathematics mentorship in South Windsor, CT, specializing in first-principles conceptual mastery and diagnostic root-cause resolution.",
            "homeLocation": {
                "@type": "Place",
                "name": "South Windsor, CT"
            }
        },
        {
            "@type": "Course",
            "@id": "https://180math.com/#course-grade-school-foundations",
            "name": "Grade School Foundations (Grades 3-5)",
            "description": "Rigorous foundational mathematics developing arithmetic fluency, fractions, proportional reasoning, and multi-step word problem solving for elementary students.",
            "provider": {
                "@id": "https://180math.com/#organization"
            },
            "educationalLevel": "Elementary School (Grades 3-5)",
            "courseCode": "180-GSF",
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "In-Person Small Cohort / Hybrid",
                "location": "South Windsor, CT"
            }
        },
        {
            "@type": "Course",
            "@id": "https://180math.com/#course-tems-middle-school",
            "name": "Middle School Accelerated Math (TEMS curriculum prep, Grades 6-8)",
            "description": "Targeted preparation for Timothy Edwards Middle School (TEMS) accelerated pathways, 8th Grade Algebra placement, and AMC 8 competitive math.",
            "provider": {
                "@id": "https://180math.com/#organization"
            },
            "educationalLevel": "Middle School (Grades 6-8)",
            "courseCode": "180-TEMS",
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "In-Person Small Cohort / 1-on-1 Mentorship",
                "location": "South Windsor, CT"
            }
        },
        {
            "@type": "Course",
            "@id": "https://180math.com/#course-swhs-honors-ap",
            "name": "High School Honors & AP Track (SWHS Algebra, Geometry, Pre-Calc, AP Calc)",
            "description": "Curriculum-aligned mastery for South Windsor High School (SWHS) Honors Algebra I & II, Honors Geometry, Pre-Calculus, and AP Calculus AB/BC.",
            "provider": {
                "@id": "https://180math.com/#organization"
            },
            "educationalLevel": "High School (Grades 9-12)",
            "courseCode": "180-SWHS",
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "In-Person Mentorship / Small Cohort",
                "location": "South Windsor, CT"
            }
        },
        {
            "@type": "Course",
            "@id": "https://180math.com/#course-digital-sat-math",
            "name": "Digital SAT Math Intensive Bootcamp",
            "description": "Adaptive Module 2 targeted strategies, Desmos calculator speed techniques, and diagnostic error analysis engineered for 750+ Digital SAT Math scores.",
            "provider": {
                "@id": "https://180math.com/#organization"
            },
            "educationalLevel": "High School (Grades 11-12)",
            "courseCode": "180-DSAT",
            "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "Bootcamp Cohort & Diagnostic Evaluation Lab",
                "location": "South Windsor, CT"
            }
        },
        {
            "@type": "WebSite",
            "@id": "https://180math.com/#website",
            "url": "https://180math.com",
            "name": "180 Math",
            "description": "Master math, one degree at a time. First-principles mathematics mentorship & diagnostic test engines.",
            "publisher": {
                "@id": "https://180math.com/#organization"
            }
        }
    ]
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

interface JsonLdGraphProps {
    breadcrumbs?: BreadcrumbItem[];
}

export default function JsonLdGraph({ breadcrumbs }: JsonLdGraphProps) {
    const graphData = { ...masterEntityGraph };
    
    if (breadcrumbs && breadcrumbs.length > 0) {
        const breadcrumbNode = buildBreadcrumbSchema(breadcrumbs);
        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbNode) }}
                />
            </>
        );
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graphData) }}
        />
    );
}
