$(document).ready(function () {
  const page = document.body.dataset.page || "home";

  const homeData = {
    image: globalData.image,
    links: [
      { name: `mailto:${globalData.email}`, active: Boolean(globalData.email), img: "./assets/images/icons/mail.png", label: "Email" },
      { name: globalData.whatsapp, active: Boolean(globalData.whatsapp), img: "./assets/images/icons/whatsapp.png", label: "WhatsApp" },
      { name: globalData.twitter, active: Boolean(globalData.twitter), img: "./assets/images/icons/twitter.png", label: "Twitter" },
      { name: globalData.linkedin, active: Boolean(globalData.linkedin), img: "./assets/images/icons/linkedin.png", label: "LinkedIn" },
      { name: globalData.github, active: Boolean(globalData.github), img: "./assets/images/icons/github.png", label: "GitHub" },
      { name: globalData.resume, active: Boolean(globalData.resume), img: "./assets/images/icons/resume.png", label: "Curriculum vitae" },
    ],
  };

  function renderHome() {
    document.getElementById("home_image").src = homeData.image || "";
    document.getElementById("home_image").alt = enHomePageData.name;
    document.getElementById("home_name").textContent = enHomePageData.name;
    document.getElementById("home_job_title").textContent = enHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = homeData.links
      .filter((item) => item.active)
      .map(
        (link) => `
          <li>
            <a href="${link.name}" target="_blank" rel="noopener" aria-label="${link.label}" title="${link.label}">
              <img src="${link.img}" alt="" />
            </a>
          </li>`
      )
      .join("");
    document.getElementById("home_title").textContent = enHomePageData.home_title;
    document.getElementById("home_content").innerHTML = enHomePageData.home_content;
  }

  function setPublicationData(id, data) {
    document.getElementById(id).innerHTML = data
      .map(
        (publication) => `
          <div class="publications_item">
            <div class="publications_header">
              ${
                publication.writers.length
                  ? publication.writers
                      .map(
                        (writer) =>
                          writer === "Trinh, H. T."
                            ? `<strong class="publication_self">${writer}</strong>`
                            : `<span>${writer}</span>`
                      )
                      .join(", ")
                  : ""
              }
              ${publication.date ? `<span>(${publication.date}).</span>` : ""}
              <h2>${publication.title}</h2>
            </div>
            <p>${publication.abstract}</p>
            <ul class="publications_footer">
              ${publication.link ? `<li><a href="${publication.link}" target="_blank" rel="noopener">View</a></li>` : ""}
              ${publication.github ? `<li><a href="${publication.github}" target="_blank" rel="noopener">GitHub</a></li>` : ""}
            </ul>
          </div>`
      )
      .join("");
  }

  function renderPublications() {
    const data = enPublicationsPageData;
    const groups = ["one", "two", "three", "four"];
    groups.forEach((group) => {
      document.getElementById(`publications_type_${group}_title`).textContent = data[`type_${group}_title`];
      setPublicationData(`publications_type_${group}_data`, data[`type_${group}_items`]);
    });
  }

  function renderResearch() {
    document.getElementById("research_title").textContent = enResearchPageData.title;
    document.getElementById("research_data").innerHTML = enResearchPageData.content;
  }

  function renderJobs() {
    document.getElementById("jobs_title").textContent = enJobsPageData.title;
    document.getElementById("jobs_data").innerHTML = enJobsPageData.items
      .map(
        (job) => `
          <div class="job_item">
            <div class="job_header">
              <div>
                <h1>${job.title},</h1>
                <h2>${job.company}</h2>
              </div>
              <div>
                <span>${job.startData} - ${job.endDate || "Present"}</span>
                ${job.location ? `<span class="job_location">${job.location}</span>` : ""}
              </div>
            </div>
            <p>${job.abstract}</p>
            ${
              job.achievements.length
                ? `<div class="job_achievements"><ul>${job.achievements
                    .map((achievement) => `<li>${achievement}</li>`)
                    .join("")}</ul></div>`
                : ""
            }
          </div>`
      )
      .join("");
  }

  function renderContact() {
    const contactItems = [
      { img: "./assets/images/icons/location.png", title: globalData.enAddress, active: Boolean(globalData.enAddress) },
      { img: "./assets/images/icons/phone.png", url: `tel:${globalData.phone.replace(/\s/g, "")}`, name: globalData.phone, active: Boolean(globalData.phone) },
      { img: "./assets/images/icons/mail.png", url: `mailto:${globalData.email}`, name: globalData.email, active: Boolean(globalData.email) },
      { img: "./assets/images/icons/cv.png", url: globalData.recommendationRequest, name: globalData.recommendationRequestTitle, active: Boolean(globalData.recommendationRequest) },
      { img: "./assets/images/icons/twitter.png", url: globalData.twitter, name: globalData.twitterTitle, active: Boolean(globalData.twitter) },
      { img: "./assets/images/icons/whatsapp.png", url: globalData.whatsapp, name: globalData.whatsappTitle, active: Boolean(globalData.whatsapp) },
      { img: "./assets/images/icons/google-scholar.png", url: globalData.googleScholar, name: globalData.googleScholarTitle, active: Boolean(globalData.googleScholar) },
      { img: "./assets/images/icons/orcid.png", url: globalData.orcid, name: globalData.orcidTitle, active: Boolean(globalData.orcid) },
      { img: "./assets/images/icons/github.png", url: globalData.github, name: globalData.githubTitle, active: Boolean(globalData.github) },
      { img: "./assets/images/icons/linkedin.png", url: globalData.linkedin, name: globalData.linkedinTitle, active: Boolean(globalData.linkedin) },
      { img: "./assets/images/icons/resume.png", url: globalData.resume, name: "Download CV", active: Boolean(globalData.resume) },
    ];

    document.getElementById("contact_title").textContent = "Contact";
    document.getElementById("contact_data").innerHTML = contactItems
      .filter((item) => item.active)
      .map(
        (item) => `
          <li>
            <img src="${item.img}" alt="" />
            ${
              item.url
                ? `<a href="${item.url}"${item.url.startsWith("http") || item.url.endsWith(".pdf") ? ' target="_blank" rel="noopener"' : ""}>${item.name || item.url}</a>`
                : `<p>${item.title}</p>`
            }
          </li>`
      )
      .join("");
  }

  if (page === "home") renderHome();
  if (page === "publications") renderPublications();
  if (page === "research") renderResearch();
  if (page === "jobs") renderJobs();
  if (page === "contact") renderContact();
});
