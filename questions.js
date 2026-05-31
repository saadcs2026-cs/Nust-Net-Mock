// Bank holding all your 2000+ MCQs divided by exact NUST syllabus sections
const QUESTION_BANK = {
    math: [
        { id: "m1", q: "What is the general term of a binomial expansion?", a: ["T_r", "T_{r+1}", "T_{n}", "T_{r-1}"], c: 1 },
        { id: "m2", q: "If A is a symmetric matrix, then A^T is equal to:", a: ["-A", "A", "I", "0"], c: 1 }
        // Add all your Math questions here up to hundreds
    ],
    physics: [
        { id: "p1", q: "The efficiency of a Carnot engine depends upon:", a: ["Sink temperature", "Source temperature", "Both source and sink temperatures", "Working substance"], c: 2 },
        { id: "p2", q: "Which lens is used to correct hyperopia?", a: ["Concave", "Convex", "Cylindrical", "Bifocal"], c: 1 }
        // Add all your Physics questions here
    ],
    chemistry: [
        { id: "c1", q: "The state of hybridization of carbon in diamond is:", a: ["sp", "sp2", "sp3", "dsp2"], c: 2 }
        // Add Chemistry questions here
    ],
    english: [
        { id: "e1", q: "Choose the synonym of 'ANOMALOUS':", a: ["Normal", "Abnormal", "Aggressive", "Capacious"], c: 1 }
        // Add English questions here
    ],
    iq: [
        { id: "i1", q: "Complete the sequence: 2, 6, 12, 20, 30, ?", a: ["36", "40", "42", "46"], c: 2 }
        // Add IQ questions here
    ]
};
