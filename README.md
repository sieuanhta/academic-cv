# Trinh Hai Tien — Academic CV

Personal academic website for Trinh Hai Tien, featuring research interests, publications, experience, honors, skills, and a downloadable CV.

**Live site:** [sieuanhta.github.io/academic-cv](https://sieuanhta.github.io/academic-cv/)

## Update the site

Most content lives in two files:

- `data/global.js` — contact details, profile links, navigation, and the CV path
- `lang/en.js` — biography, education, publications, research, experience, awards, and skills

The source CV is available at `files/cv.pdf`. Replace that file with a newer PDF to update the downloadable copy without changing any links.

## Preview locally

From this repository's directory, run:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Credits

Adapted from [simamojtahedi/Academic-cv](https://github.com/simamojtahedi/Academic-cv), an MIT-licensed GitHub Pages template. The site has been redesigned and made project-page-safe for deployment below `/academic-cv/`.
