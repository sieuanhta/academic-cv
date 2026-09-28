function renderNavbar() {
  const page = document.body.dataset.page || "home";
  const navbarData = {
    title: enNavbarData.title,
    navbar_links: [
      { key: "home", active: navbarLinks.home, title: enNavbarData.Home, url: "./index.html" },
      { key: "publications", active: navbarLinks.publications, title: enNavbarData.publications, url: "./publications.html" },
      { key: "research", active: navbarLinks.research, title: enNavbarData.Research, url: "./research.html" },
      { key: "jobs", active: navbarLinks.jobs, title: enNavbarData.Jobs, url: "./jobs.html" },
      { key: "contact", active: navbarLinks.contact, title: enNavbarData.Contact, url: "./contact.html" },
    ],
  };

  const title = document.getElementById("navbar_title");
  const links = document.getElementById("navbar_links");
  if (!title || !links) return;

  title.textContent = navbarData.title;
  title.href = "./index.html";
  links.innerHTML = navbarData.navbar_links
    .filter((item) => item.active)
    .map(
      (link) => `
        <li class="nav-item">
          <a class="nav-link${page === link.key ? " active" : ""}" href="${link.url}"${
            page === link.key ? ' aria-current="page"' : ""
          }>${link.title}</a>
        </li>`
    )
    .join("");
}
