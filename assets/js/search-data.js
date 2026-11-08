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
        },{id: "nav-tutorial",
          title: "Tutorial",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-agentic-ai-alignment-principles-methods-evaluation-and-responsible-deployment",
        
          title: "Agentic AI Alignment:Principles, Methods, Evaluation, and Responsible Deployment",
        
        description: "The 14th IEEE International Conference on Big Data (BigData), Phoenix, United States",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/BigDataAgentic/";
          
        },
      },{id: "post-fairness-in-large-language-models-a-tutorial",
        
          title: "Fairness in Large Language Models:A Tutorial",
        
        description: "2025 IEEE International Conference on Data Mining (ICDM), Washington, D.C., United States",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ICDMFairness/";
          
        },
      },{id: "post-uncertain-boundaries-a-tutorial-on-copyright-challenges-and-cross-disciplinary-solutions-for-generative-ai",
        
          title: "Uncertain Boundaries:A Tutorial on Copyright Challenges and Cross-Disciplinary Solutions for Generative AI",
        
        description: "The ACM International Conference on Information and Knowledge Management (CIKM), Seoul, Korea",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/CIKMCopyright/";
          
        },
      },{id: "post-fairness-in-large-language-models-a-tutorial",
        
          title: "Fairness in Large Language Models:A Tutorial",
        
        description: "The ACM International Conference on Information and Knowledge Management (CIKM), Seoul, Korea",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/CIKMFairness/";
          
        },
      },{id: "post-fairness-in-large-language-models-a-tutorial",
        
          title: "Fairness in Large Language Models:A Tutorial",
        
        description: "34th International Joint Conference on Artificial Intelligence (IJCAI), Montreal, Canada",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/IJCAIFairness/";
          
        },
      },{id: "post-uncertain-boundaries-a-tutorial-on-copyright-challenges-and-cross-disciplinary-solutions-for-generative-ai",
        
          title: "Uncertain Boundaries:A Tutorial on Copyright Challenges and Cross-Disciplinary Solutions for Generative AI",
        
        description: "2024 IEEE International Conference on Data Mining (ICDM), Abu Dhabi, UAE",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ICDMCopyright/";
          
        },
      },{id: "news-four-papers-have-been-accepted-by-ijcai-2026",
          title: 'Four papers have been accepted by IJCAI 2026!',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-plos-digital-health",
          title: 'One paper has been accepted by PLOS Digital Health!',
          description: "",
          section: "News",},{id: "news-our-tutorial-has-been-accepted-by-bigdata-2026",
          title: 'Our tutorial has been accepted by BigData 2026!',
          description: "",
          section: "News",},{id: "news-one-paper-has-been-accepted-by-neurips-2026",
          title: 'One paper has been accepted by NeurIPS 2026!',
          description: "",
          section: "News",},{id: "teachings-cap5602-introduce-to-artificial-intelligence",
          title: 'CAP5602 Introduce to Artificial Intelligence',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CAP5602-2025/";
            },},{id: "teachings-cen3721-intro-human-comp-interaction",
          title: 'CEN3721 Intro Human-Comp Interaction',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN3721/";
            },},{id: "teachings-cen4072-fundamental-software-testing",
          title: 'CEN4072 Fundamental Software Testing',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN4072-2024/";
            },},{id: "teachings-cen4072-fundamental-software-testing",
          title: 'CEN4072 Fundamental Software Testing',
          description: "Teaching Assistant",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CEN4072-S/";
            },},{
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
