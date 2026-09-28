(function renderSiteChrome() {
  const currentPage = document.body.dataset.page || "home";
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <nav class="site-nav" aria-label="Primary navigation">
        <div class="site-container nav-inner">
          <a class="site-brand" href="index.html" aria-label="${globalData.name}, home">
            <span class="brand-mark" aria-hidden="true">T</span>
            <span>${globalData.shortName}</span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-links">
            <span class="sr-only">Toggle navigation</span>
            <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
          </button>
          <div class="nav-menu" id="primary-links">
            <ul class="nav-links">
              ${navbarLinks
                .map(
                  (link) => `
                    <li>
                      <a href="${link.href}" ${
                        link.key === currentPage ? 'aria-current="page"' : ""
                      }>${link.label}</a>
                    </li>`
                )
                .join("")}
            </ul>
            <a class="nav-cv" href="${globalData.resume}" target="_blank" rel="noopener">Download CV</a>
          </div>
        </div>
      </nav>`;

    const toggle = header.querySelector(".nav-toggle");
    const menu = header.querySelector(".nav-menu");
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("is-open", !expanded);
    });
  }

  if (footer) {
    footer.innerHTML = `
      <div class="site-container footer-inner">
        <div>
          <p class="footer-name">${globalData.name}</p>
          <p>${globalData.jobTitle}</p>
        </div>
        <div class="footer-links">
          <a href="mailto:${globalData.email}">Email</a>
          <a href="${globalData.github}" target="_blank" rel="noopener">GitHub</a>
          <a href="${globalData.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        </div>
        <p class="footer-meta">© ${new Date().getFullYear()} · Hanoi, Vietnam</p>
      </div>`;
  }
})();
