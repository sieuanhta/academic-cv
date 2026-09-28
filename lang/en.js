// ---------- Navbar titles
const enNavbarData = {
  title: "Trinh Hai Tien",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "Experience",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "Trinh Hai Tien",
  jobTitle: "Computer Science Undergraduate & Researcher",
  home_title: "About me",
  home_content: `
    <div>
      <p>
        I am a computer science undergraduate at VNU University of Engineering and Technology,
        interested in mathematical and computational approaches to decision-making under uncertainty.
        My current research spans mechanism design, statistical learning, scientific machine learning,
        and quantitative finance.
      </p>

      <h2 class="title">Education</h2>
      <div class="home-block">
        <div class="home-meta-row">
          <strong>Vietnam National University, Hanoi — University of Engineering and Technology (VNU-UET)</strong>
          <span>2023–2027</span>
        </div>
        <em>Bachelor of Science in Computer Science</em>
        <ul>
          <li>GPA: 3.60/4.00</li>
          <li>Dissertation: “The Price of Learning Quality in Finite-Inventory Information Procurement”</li>
          <li>Advisor: Dr. Duyen Thi Ngo</li>
        </ul>
      </div>

      <h2 class="title">Research interests</h2>
      <ul class="home-columns">
        <li>Mechanism design and information economics</li>
        <li>Statistical learning and decision-making under uncertainty</li>
        <li>Scientific machine learning and neural surrogates</li>
        <li>Multi-agent systems and online algorithms</li>
        <li>Affective computing and representation learning</li>
        <li>Quantitative finance and market microstructure</li>
      </ul>

      <h2 class="title">Honors & awards</h2>
      <ul class="home-awards">
        <li><strong>2026</strong> — Bronze Award, Student Scientific Research Competition, VNU-UET</li>
        <li><strong>2026</strong> — 7th worldwide of 18,803 teams and 1st in Asia, IMC Prosperity 4</li>
        <li><strong>2025</strong> — Silver Award, Student Scientific Research Competition, VNU-UET</li>
        <li><strong>2025</strong> — Silver Medal, Vietnam National University Chess Tournament</li>
        <li><strong>2024</strong> — Robotics Challenge Fellowship, Japan</li>
        <li><strong>2023</strong> — Bronze Medal, Vietnam National Mathematics Olympiad</li>
        <li><strong>2023</strong> — Silver Medal, VNU University of Science Mathematics Competition</li>
        <li><strong>2023</strong> — Bronze Medal (Mathematics), Vietnam Coastal and Northern Delta Science and Humanities Competition</li>
      </ul>

      <h2 class="title">Scholarships</h2>
      <ul>
        <li>Academic Encouragement Scholarship, VNU University of Engineering and Technology, 2026</li>
        <li>Gifted Student Scholarship, 2020–2023</li>
      </ul>

      <h2 class="title">Technical skills</h2>
      <div class="home-skills">
        <p><strong>Programming & scientific computing:</strong> Python, C++, Java, Rust, Mathematica, LaTeX</p>
        <p><strong>Machine learning & data:</strong> PyTorch, DeepXDE, NumPy, pandas, scikit-learn, deep learning, automatic differentiation, numerical optimization</p>
        <p><strong>Mathematical & quantitative methods:</strong> Probability, statistics, optimization, game theory, mechanism design, time-series analysis, numerical methods</p>
        <p><strong>Research & development:</strong> Git, GitHub, Jupyter Notebook, VS Code, Conda</p>
      </div>

      <h2 class="title">Languages</h2>
      <p><strong>Vietnamese:</strong> Native<br /><strong>English:</strong> Professional proficiency; IELTS Academic 7.5 (June 2026)</p>
    </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Peer-Reviewed Conference Proceedings",
  type_one_items: [
    {
      title: "Disentangling identity and motion information in micro-expression videos for micro-expression recognition.",
      abstract: "Proceedings of the Conference on Information Technology and its Applications (CITA 2026).",
      date: "2026",
      link: "",
      github: "",
      writers: ["Trinh, H. T.", "Nguyen, B. D.", "Nguyen, L. T.", "Le, T. H.", "Ngo, T. D."],
    },
    {
      title: "Enhancing micro-expression recognition via multi-task learning with demographic-aware auxiliary supervision.",
      abstract: "Proceedings of the International Conference on Knowledge and Systems Engineering (KSE 2025).",
      date: "2025",
      link: "",
      github: "",
      writers: ["Trinh, H. T.", "Man, T. B. P.", "Khuong, V. T. A.", "Nguyen, L. T.", "Le, T. H.", "Ngo, T. D."],
    },
  ],

  type_two_title: "Manuscripts Under Review",
  type_two_items: [
    {
      title: "Learning and Incentives in Finite-Inventory Data Procurement.",
      abstract: "Fields: Mechanism Design, Statistical Learning, Information Economics.",
      date: "",
      link: "",
      github: "",
      writers: ["Trinh, H. T."],
    },
    {
      title: "Maintaining Stable Coalitions under Sequential Agent Arrivals.",
      abstract: "Fields: Multi-Agent Systems, Hedonic Games, Online Algorithms.",
      date: "",
      link: "",
      github: "",
      writers: ["Trinh, H. T."],
    },
  ],

  type_three_title: "Manuscript in Preparation",
  type_three_items: [
    {
      title: "Derivative-Faithful Neural Networks.",
      abstract: "Fields: Scientific Machine Learning, Surrogate Modeling, Derivative Approximation.",
      date: "",
      link: "",
      github: "",
      writers: ["Trinh, H. T."],
    },
  ],

  type_four_title: "Conference Presentations",
  type_four_items: [
    {
      title: "Disentangling Identity and Motion Information in Micro-Expression Videos for Micro-Expression Recognition.",
      abstract: "Paper presented at the Conference on Information Technology and its Applications (CITA 2026).",
      date: "2026",
      link: "",
      github: "",
      writers: ["Trinh, H. T."],
    },
    {
      title: "Enhancing Micro-Expression Recognition via Multi-Task Learning with Demographic-Aware Auxiliary Supervision.",
      abstract: "Paper presented at the International Conference on Knowledge and Systems Engineering (KSE 2025).",
      date: "2025",
      link: "",
      github: "",
      writers: ["Trinh, H. T."],
    },
  ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class="research_content">
      <p>
        My research examines mathematical and computational approaches to decision-making under uncertainty,
        with an emphasis on reliable learning when information, incentives, or observations are limited.
      </p>

      <h2>Information Procurement & Mechanism Design</h2>
      <p>
        I study finite-inventory information procurement under strategic behavior and unknown data quality.
        This work develops truthful procurement mechanisms, randomized auditing schemes, and theoretical
        guarantees on the cost of learning quality.
      </p>

      <h2>Scientific Machine Learning</h2>
      <p>
        I investigate population-informed neural surrogate models for recovering first- and second-order
        differential information from sparse value-only observations, with particular attention to
        differential identifiability and derivative accuracy.
      </p>

      <h2>Affective Computing</h2>
      <p>
        My earlier research in subject-independent micro-expression recognition explored demographic-aware
        multi-task learning and identity–motion representations. This work resulted in peer-reviewed papers
        at KSE 2025 and CITA 2026.
      </p>

      <h2>Quantitative Finance</h2>
      <p>
        I research medium-frequency quantitative trading strategies using historical financial-market data.
        Areas of interest include signal construction, statistical validation, portfolio construction,
        execution, alpha generation, statistical arbitrage, market microstructure, and multi-agent systems.
      </p>
    </div>
  `,
};

// ---------- Experience page data
const enJobsPageData = {
  title: "Research Experience",
  items: [
    {
      title: "Researcher",
      company: "Beetrade",
      startData: "2026",
      endDate: "",
      location: "",
      abstract: "Conduct quantitative research using historical financial-market data, with emphasis on statistical validation and market microstructure.",
      achievements: [
        "Develop and evaluate medium-frequency strategies involving signal construction, backtesting, portfolio construction, and execution.",
        "Investigate alpha generation, statistical arbitrage, execution optimization, and multi-agent approaches to trading-system design.",
      ],
    },
    {
      title: "Research Assistant",
      company: "Human–Machine Interaction Laboratory, VNU-UET",
      startData: "2024",
      endDate: "",
      location: "Hanoi",
      abstract: "Conduct research across machine learning, mechanism design, statistical inference, and computational decision-making under the supervision of Dr. Ngo Thi Duyen.",
      achievements: [
        "Study finite-inventory information procurement under strategic behavior and unknown data quality, developing truthful procurement mechanisms, randomized auditing schemes, and theoretical guarantees.",
        "Investigate population-informed neural surrogate models for recovering first- and second-order differential information from sparse value-only observations.",
        "Developed demographic-aware and identity–motion methods for subject-independent micro-expression recognition, leading to papers at KSE 2025 and CITA 2026.",
      ],
    },
  ],
};
