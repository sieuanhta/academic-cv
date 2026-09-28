const iconLink = (href, icon, label, external = true) => `
  <a class="icon-link" href="${href}" ${
    external ? 'target="_blank" rel="noopener"' : ""
  } aria-label="${label}" title="${label}">
    <img src="assets/images/icons/${icon}" alt="" aria-hidden="true" />
  </a>`;

function pageIntro(kicker, title, intro) {
  return `
    <header class="page-intro reveal">
      <p class="eyebrow">${kicker}</p>
      <h1>${title}</h1>
      <p class="page-lede">${intro}</p>
    </header>`;
}

function renderHome() {
  const data = enHomePageData;
  return `
    <section class="hero reveal">
      <div class="hero-profile">
        <div class="portrait-wrap">
          <img class="portrait" src="${globalData.image}" alt="Initials portrait for ${globalData.name}" />
          <span class="availability-dot" title="Based in Hanoi, Vietnam"></span>
        </div>
        <div class="hero-identity">
          <p class="eyebrow">${data.eyebrow}</p>
          <h1>${globalData.name}</h1>
          <p class="hero-title">${globalData.jobTitle}</p>
          <div class="social-links" aria-label="Profile links">
            ${iconLink(`mailto:${globalData.email}`, "mail.png", "Email", false)}
            ${iconLink(globalData.github, "github.png", "GitHub")}
            ${iconLink(globalData.linkedin, "linkedin.png", "LinkedIn")}
            ${iconLink(globalData.resume, "resume.png", "CV")}
          </div>
        </div>
      </div>
      <div class="hero-copy">
        <p class="section-label">About me</p>
        ${data.intro.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <div class="hero-actions">
          <a class="button button-primary" href="research.html">Explore my research <span aria-hidden="true">→</span></a>
          <a class="button button-secondary" href="${globalData.resume}" target="_blank" rel="noopener">View full CV</a>
        </div>
      </div>
    </section>

    <section class="stats-grid reveal" aria-label="Selected highlights">
      ${data.highlights
        .map(
          (item) => `
            <div class="stat-item">
              <span class="stat-value">${item.value}</span>
              <span class="stat-label">${item.label}</span>
            </div>`
        )
        .join("")}
    </section>

    <section class="content-section two-column reveal">
      <div>
        <p class="section-label">Research interests</p>
        <h2>Learning, incentives, and decisions</h2>
        <p class="muted">I work across theory and applications, connecting rigorous models with computational experiments.</p>
      </div>
      <div class="tag-cloud">
        ${data.interests.map((interest) => `<span>${interest}</span>`).join("")}
      </div>
    </section>

    <section class="content-section reveal">
      <div class="section-heading">
        <div>
          <p class="section-label">Education</p>
          <h2>Academic background</h2>
        </div>
        <span class="section-date">${data.education.dates}</span>
      </div>
      <article class="education-card">
        <div>
          <h3>${data.education.institution}</h3>
          <p class="education-degree">${data.education.degree}</p>
          <p class="muted">${data.education.location}</p>
        </div>
        <ul>
          ${data.education.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </article>
    </section>

    <section class="content-section reveal">
      <div class="section-heading">
        <div>
          <p class="section-label">Recognition</p>
          <h2>Selected honors & awards</h2>
        </div>
      </div>
      <div class="award-list">
        ${data.awards
          .map(
            (award) => `
              <article class="award-item">
                <span class="award-year">${award.year}</span>
                <div><h3>${award.name}</h3><p>${award.organization}</p></div>
              </article>`
          )
          .join("")}
      </div>
      <div class="subsection-heading"><h3>Scholarships</h3></div>
      <div class="award-list compact">
        ${data.scholarships
          .map(
            (award) => `
              <article class="award-item">
                <span class="award-year">${award.year}</span>
                <div><h3>${award.name}</h3>${
                  award.organization ? `<p>${award.organization}</p>` : ""
                }</div>
              </article>`
          )
          .join("")}
      </div>
    </section>

    <section class="content-section reveal">
      <div class="section-heading">
        <div>
          <p class="section-label">Toolkit</p>
          <h2>Skills & methods</h2>
        </div>
      </div>
      <div class="skills-grid">
        ${data.skills
          .map(
            (group) => `
              <article class="skill-card">
                <h3>${group.title}</h3>
                <div>${group.items.map((item) => `<span>${item}</span>`).join("")}</div>
              </article>`
          )
          .join("")}
      </div>
      <div class="language-row">
        ${data.languages
          .map(
            (language) => `
              <div><strong>${language.name}</strong><span>${language.level}</span></div>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderPublications() {
  const data = enPublicationsPageData;
  let itemNumber = data.groups.reduce((total, group) => total + group.items.length, 0);

  return `
    ${pageIntro("Selected work", "Publications & presentations", data.intro)}
    <div class="publication-groups">
      ${data.groups
        .map((group) => {
          const groupHtml = `
            <section class="publication-group reveal">
              <div class="group-heading">
                <h2>${group.title}</h2>
                <span>${String(group.items.length).padStart(2, "0")}</span>
              </div>
              <div class="publication-list">
                ${group.items
                  .map((publication) => {
                    const currentNumber = itemNumber--;
                    return `
                      <article class="publication-item">
                        <span class="publication-number">${String(currentNumber).padStart(2, "0")}</span>
                        <div>
                          <div class="publication-meta">
                            <span>${publication.status}</span>
                            ${publication.year ? `<span>${publication.year}</span>` : ""}
                          </div>
                          <h3>${publication.title}</h3>
                          <p class="publication-authors">${publication.authors}</p>
                          <p class="publication-venue">${publication.venue}</p>
                        </div>
                      </article>`;
                  })
                  .join("")}
              </div>
            </section>`;
          return groupHtml;
        })
        .join("")}
    </div>`;
}

function renderResearch() {
  const data = enResearchPageData;
  return `
    ${pageIntro("Research agenda", "Rigorous learning under uncertainty", data.intro)}
    <section class="research-grid">
      ${data.areas
        .map(
          (area) => `
            <article class="research-card reveal">
              <span class="research-number">${area.number}</span>
              <div>
                <h2>${area.title}</h2>
                <p class="research-summary">${area.summary}</p>
                <p>${area.details}</p>
                <div class="method-list">
                  ${area.methods.map((method) => `<span>${method}</span>`).join("")}
                </div>
              </div>
            </article>`
        )
        .join("")}
    </section>
    <aside class="research-note reveal">
      <p class="section-label">Open to collaboration</p>
      <h2>Interested in related questions?</h2>
      <p>I welcome conversations about research at the intersection of learning, incentives, and decision-making.</p>
      <a href="mailto:${globalData.email}">Start a conversation <span aria-hidden="true">→</span></a>
    </aside>`;
}

function renderExperience() {
  const data = enJobsPageData;
  return `
    ${pageIntro("Research experience", "From theory to real-world systems", data.intro)}
    <section class="timeline reveal">
      ${data.items
        .map(
          (item) => `
            <article class="timeline-item">
              <div class="timeline-marker" aria-hidden="true"></div>
              <div class="timeline-meta">
                <span>${item.dates}</span>
                ${item.location ? `<span>${item.location}</span>` : ""}
              </div>
              <div class="timeline-content">
                <h2>${item.title}</h2>
                <p class="timeline-company">${item.company}</p>
                <p>${item.summary}</p>
                <ul>${item.achievements
                  .map((achievement) => `<li>${achievement}</li>`)
                  .join("")}</ul>
              </div>
            </article>`
        )
        .join("")}
    </section>`;
}

function renderContact() {
  const contactItems = [
    {
      icon: "mail.png",
      label: "Email",
      value: globalData.email,
      href: `mailto:${globalData.email}`,
    },
    {
      icon: "github.png",
      label: "GitHub",
      value: globalData.githubTitle,
      href: globalData.github,
    },
    {
      icon: "linkedin.png",
      label: "LinkedIn",
      value: globalData.linkedinTitle,
      href: globalData.linkedin,
    },
    {
      icon: "phone.png",
      label: "Phone",
      value: globalData.phone,
      href: globalData.phoneHref,
    },
    {
      icon: "location.png",
      label: "Location",
      value: globalData.address,
      href: "",
    },
    {
      icon: "resume.png",
      label: "Curriculum vitae",
      value: "View PDF",
      href: globalData.resume,
    },
  ];

  return `
    ${pageIntro(
      "Get in touch",
      "Let’s discuss ideas",
      "For research conversations, collaborations, or other professional inquiries, email is the best way to reach me."
    )}
    <section class="contact-layout reveal">
      <div class="contact-card">
        ${contactItems
          .map(
            (item) => `
              <div class="contact-item">
                <img src="assets/images/icons/${item.icon}" alt="" aria-hidden="true" />
                <div>
                  <span>${item.label}</span>
                  ${
                    item.href
                      ? `<a href="${item.href}" ${
                          item.href.startsWith("http") || item.href.endsWith(".pdf")
                            ? 'target="_blank" rel="noopener"'
                            : ""
                        }>${item.value}</a>`
                      : `<p>${item.value}</p>`
                  }
                </div>
              </div>`
          )
          .join("")}
      </div>
      <div class="contact-aside">
        <p class="section-label">Current focus</p>
        <h2>Learning and decision-making under uncertainty</h2>
        <p>Based in Hanoi and currently working across mechanism design, scientific machine learning, and quantitative finance.</p>
        <a class="button button-primary" href="mailto:${globalData.email}">Send an email <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

const pageRenderers = {
  home: renderHome,
  publications: renderPublications,
  research: renderResearch,
  experience: renderExperience,
  contact: renderContact,
};

const pageContent = document.getElementById("page-content");
const pageName = document.body.dataset.page || "home";

if (pageContent && pageRenderers[pageName]) {
  pageContent.innerHTML = pageRenderers[pageName]();
}
