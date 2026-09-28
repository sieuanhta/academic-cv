const enHomePageData = {
  eyebrow: "Researcher · Computer Science · Hanoi",
  intro: [
    "I am a computer science undergraduate at VNU University of Engineering and Technology, interested in mathematical and computational approaches to decision-making under uncertainty.",
    "My current work spans mechanism design, statistical learning, scientific machine learning, and quantitative finance. I am especially interested in problems where learning, incentives, and limited information interact.",
  ],
  interests: [
    "Mechanism Design",
    "Statistical Learning",
    "Information Economics",
    "Scientific Machine Learning",
    "Quantitative Finance",
    "Multi-Agent Systems",
  ],
  education: {
    institution:
      "Vietnam National University, Hanoi — University of Engineering and Technology (VNU-UET)",
    degree: "Bachelor of Science in Computer Science",
    dates: "2023–2027",
    location: "Hanoi, Vietnam",
    details: [
      "GPA: 3.60/4.00",
      "Dissertation: “The Price of Learning Quality in Finite-Inventory Information Procurement”",
      "Advisor: Dr. Duyen Thi Ngo",
    ],
  },
  highlights: [
    {
      value: "2",
      label: "peer-reviewed conference papers",
    },
    {
      value: "7th",
      label: "worldwide in IMC Prosperity 4",
    },
    {
      value: "2",
      label: "active research appointments",
    },
  ],
  awards: [
    {
      name: "Bronze Award, Student Scientific Research Competition",
      organization: "VNU-UET",
      year: "2026",
    },
    {
      name: "Silver Award, Student Scientific Research Competition",
      organization: "VNU-UET",
      year: "2025",
    },
    {
      name: "7th worldwide of 18,803 teams; 1st in Asia",
      organization: "IMC Prosperity 4 Algorithmic Trading Competition",
      year: "2026",
    },
    {
      name: "Robotics Challenge Fellowship",
      organization: "Japan",
      year: "2024",
    },
    {
      name: "Bronze Medal",
      organization: "Vietnam National Mathematics Olympiad",
      year: "2023",
    },
    {
      name: "Silver Medal",
      organization: "VNU University of Science Mathematics Competition",
      year: "2023",
    },
    {
      name: "Bronze Medal (Mathematics)",
      organization:
        "Vietnam Coastal and Northern Delta Science and Humanities Competition",
      year: "2023",
    },
    {
      name: "Silver Medal",
      organization: "Vietnam National University Chess Tournament",
      year: "2025",
    },
  ],
  scholarships: [
    {
      name: "Academic Encouragement Scholarship",
      organization: "VNU University of Engineering and Technology",
      year: "2026",
    },
    {
      name: "Gifted Student Scholarship",
      organization: "",
      year: "2020–2023",
    },
  ],
  skills: [
    {
      title: "Programming & scientific computing",
      items: ["Python", "C++", "Java", "Rust", "Mathematica", "LaTeX"],
    },
    {
      title: "Machine learning & data",
      items: [
        "PyTorch",
        "DeepXDE",
        "NumPy",
        "pandas",
        "scikit-learn",
        "Deep learning",
        "Automatic differentiation",
      ],
    },
    {
      title: "Mathematical & quantitative methods",
      items: [
        "Probability",
        "Statistics",
        "Optimization",
        "Game theory",
        "Mechanism design",
        "Time-series analysis",
        "Numerical methods",
      ],
    },
    {
      title: "Research & development",
      items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Conda"],
    },
  ],
  languages: [
    { name: "Vietnamese", level: "Native" },
    {
      name: "English",
      level: "Professional proficiency · IELTS Academic 7.5 (June 2026)",
    },
  ],
};

const enPublicationsPageData = {
  intro:
    "Peer-reviewed work and current manuscripts across affective computing, mechanism design, multi-agent systems, and scientific machine learning.",
  groups: [
    {
      title: "Peer-Reviewed Conference Proceedings",
      items: [
        {
          title:
            "Disentangling identity and motion information in micro-expression videos for micro-expression recognition",
          authors:
            "Trinh, H. T., Nguyen, B. D., Nguyen, L. T., Le, T. H., & Ngo, T. D.",
          venue:
            "Proceedings of the Conference on Information Technology and its Applications (CITA 2026)",
          year: "2026",
          status: "Conference paper",
        },
        {
          title:
            "Enhancing micro-expression recognition via multi-task learning with demographic-aware auxiliary supervision",
          authors:
            "Trinh, H. T., Man, T. B. P., Khuong, V. T. A., Nguyen, L. T., Le, T. H., & Ngo, T. D.",
          venue:
            "Proceedings of the International Conference on Knowledge and Systems Engineering (KSE 2025)",
          year: "2025",
          status: "Conference paper",
        },
      ],
    },
    {
      title: "Manuscripts Under Review",
      items: [
        {
          title: "Learning and Incentives in Finite-Inventory Data Procurement",
          authors: "Trinh, H. T.",
          venue:
            "Mechanism Design · Statistical Learning · Information Economics",
          year: "",
          status: "Under review",
        },
        {
          title: "Maintaining Stable Coalitions under Sequential Agent Arrivals",
          authors: "Trinh, H. T.",
          venue: "Multi-Agent Systems · Hedonic Games · Online Algorithms",
          year: "",
          status: "Under review",
        },
      ],
    },
    {
      title: "Manuscript in Preparation",
      items: [
        {
          title: "Derivative-Faithful Neural Networks",
          authors: "Trinh, H. T.",
          venue:
            "Scientific Machine Learning · Surrogate Modeling · Derivative Approximation",
          year: "",
          status: "In preparation",
        },
      ],
    },
    {
      title: "Conference Presentations",
      items: [
        {
          title:
            "Disentangling Identity and Motion Information in Micro-Expression Videos for Micro-Expression Recognition",
          authors: "Trinh, H. T.",
          venue:
            "Conference on Information Technology and its Applications (CITA 2026)",
          year: "2026",
          status: "Presentation",
        },
        {
          title:
            "Enhancing Micro-Expression Recognition via Multi-Task Learning with Demographic-Aware Auxiliary Supervision",
          authors: "Trinh, H. T.",
          venue:
            "International Conference on Knowledge and Systems Engineering (KSE 2025)",
          year: "2025",
          status: "Presentation",
        },
      ],
    },
  ],
};

const enResearchPageData = {
  intro:
    "I study mathematical and computational approaches to decision-making under uncertainty, with an emphasis on reliable learning when information, incentives, or observations are limited.",
  areas: [
    {
      number: "01",
      title: "Information Procurement & Mechanism Design",
      summary:
        "Finite-inventory data procurement under strategic behavior and unknown information quality.",
      details:
        "This work develops truthful procurement mechanisms and randomized auditing schemes, together with theoretical guarantees on the cost of learning quality when the buyer has limited inventory.",
      methods: [
        "Mechanism design",
        "Statistical learning",
        "Information economics",
        "Randomized auditing",
      ],
    },
    {
      number: "02",
      title: "Scientific Machine Learning",
      summary:
        "Population-informed neural surrogates for recovering derivatives from sparse, value-only observations.",
      details:
        "I investigate when first- and second-order differential information is identifiable and how neural surrogate design affects derivative accuracy, not only value prediction.",
      methods: [
        "Neural surrogates",
        "Automatic differentiation",
        "Differential identifiability",
        "Numerical optimization",
      ],
    },
    {
      number: "03",
      title: "Affective Computing",
      summary:
        "Subject-independent micro-expression recognition under identity and demographic variation.",
      details:
        "Earlier work explored demographic-aware multi-task learning and identity–motion representations, resulting in peer-reviewed papers at KSE 2025 and CITA 2026.",
      methods: [
        "Computer vision",
        "Multi-task learning",
        "Representation learning",
        "Micro-expression recognition",
      ],
    },
    {
      number: "04",
      title: "Quantitative Finance",
      summary:
        "Statistically validated medium-frequency strategies and multi-agent approaches to trading-system design.",
      details:
        "My applied research covers signal construction, backtesting, portfolio construction, execution, alpha generation, statistical arbitrage, and market microstructure.",
      methods: [
        "Time-series analysis",
        "Backtesting",
        "Portfolio construction",
        "Market microstructure",
      ],
    },
  ],
};

const enJobsPageData = {
  intro:
    "Research appointments spanning theoretical machine learning, mechanism design, affective computing, and quantitative trading.",
  items: [
    {
      title: "Researcher",
      company: "Beetrade",
      dates: "2026–Present",
      location: "",
      summary:
        "Quantitative research using historical financial-market data, with an emphasis on statistical validation and market microstructure.",
      achievements: [
        "Develop and evaluate medium-frequency strategies across signal construction, backtesting, portfolio construction, and execution.",
        "Investigate alpha generation, statistical arbitrage, execution optimization, and multi-agent trading-system design.",
      ],
    },
    {
      title: "Research Assistant",
      company:
        "Human–Machine Interaction Laboratory · VNU University of Engineering and Technology",
      dates: "2024–Present",
      location: "Hanoi, Vietnam",
      summary:
        "Research across machine learning, mechanism design, statistical inference, and computational decision-making under the supervision of Dr. Ngo Thi Duyen.",
      achievements: [
        "Study finite-inventory information procurement under strategic behavior and unknown data quality, developing truthful mechanisms, randomized auditing schemes, and theoretical guarantees.",
        "Investigate population-informed neural surrogate models for recovering first- and second-order differential information from sparse value-only observations.",
        "Developed demographic-aware and identity–motion methods for subject-independent micro-expression recognition, leading to papers at KSE 2025 and CITA 2026.",
      ],
    },
  ],
};
