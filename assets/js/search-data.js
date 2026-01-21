// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "teachings-cap5602-introduce-to-artificial-intelligence",
          title: 'CAP5602 Introduce to Artificial Intelligence',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CAP5602-2025.html";
            },},{id: "teachings-cen3721-intro-human-comp-interaction",
          title: 'CEN3721 Intro Human-Comp Interaction',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN3721.html";
            },},{id: "teachings-cen4072-fundamental-software-testing",
          title: 'CEN4072 Fundamental Software Testing',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN4072-2024.html";
            },},{id: "teachings-cen4072-fundamental-software-testing",
          title: 'CEN4072 Fundamental Software Testing',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN4072-S.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%69%70.%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1nVpMXgAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zhipengyin", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/stefan0711", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
