export const functionalitiesAlias = {
  navbar: {
    cv: "résumé",
    work: "work",
    playground: "playground"
  },
  arrowBack: {
    title: "back"
  },
}

export const strings = {
  heroPage: {
    introText: {
      firstLine: "Hello, I'm Francis.",
      secondLine: "A multi-skilled Software Developer.",
      thirdLine: "Specialized in ",
      fourthLine: "Great hand-stander and former ",
      lastLine: "professional Chef.",
      endPoint: ".",
      dynamicWords: {
        frontEnd: "Front-end",
        backEnd: "Back-end",
        webDevelopment: "Web Development",
        mobileDevelopment: "Mobile Development",
        decentralizedApps: "Decentralized Applications",
      }
    },
    talk:"let's talk? ",
    mail:"franciscojmguedes",
    mailDomain:"@gmail.com",
    emailLink:"mailto:franciscojmguedes@gmail.com"
  },
  socialMedia: {
    github: "https://github.com/FrancisGuedes",
    linkedin: "https://www.linkedin.com/in/franciscojmguedes/",
    instagram: "https://www.instagram.com/farawei/",
  }, 
  workPage: {
    titleHide: "My Work Page",
    title:"My Work.",
    subTitle: "Finished projects, ongoing projects and personal projects.",
    footerTitle: "Work always in progress.",
    projects: 
    [
      {
        title: "First Steps", 
        href: "https://www.firststeps.pt",
        imagePath: require('../assets/images/work/first-steps-website.jpg'),
      },
      {
        title: "Wave Portal", 
        href: "https://waveportal-baseline-student.daeshawnballard.repl.co/",
        imagePath: require("../assets/images/work/dapp.png"),
      }
    ],
  },
  playgroundPage: {
    titleHide: "My Playground Page",
    title:"My Playground.",
    subTitle: "Welcome, here you can find a little bit of me.",
    category: 
    [
      {
        index: 0,
        title: 'Breaking. Wait. What.',
        subtitle: "Don't try this at home.",
        carousel: 
        [
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          }
        ]
      },
      {
        index: 1,
        title: 'UNDA.',
        subtitle: "Volunteer.",
        carousel: 
        [
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "UNDA", 
            href: "UNDA",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda.jpg'),
          },
        ]
        
      },
      {
        index: 2,
        title: 'Desserts.',
        subtitle: "Once upon a time.",
        carousel: 
        [
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/maxibom.jpg'),
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/maxibom.jpg'),
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/maxibom.jpg'),
          },
        ]
      },
      {
        index: 3,
        title: 'Attempts With Design.',
        subtitle: "Fooling around.",
        carousel: 
        [
          {
            description: "Design", 
            href: "",
            imagePath: require("../assets/images/playground/carousel/design/quote-1.png"),
          },
          {
            description: "Design", 
            href: "",
            imagePath: require("../assets/images/playground/carousel/design/quote-2.png"),
          },
          {
            description: "Design", 
            href: "",
            imagePath: require("../assets/images/playground/carousel/design/logo-f.png"),
          },
          {
            description: "Design", 
            href: "",
            imagePath: require("../assets/images/playground/carousel/design/when.png"),
          },
          {
            description: "Design", 
            href: "",
            imagePath: require("../assets/images/playground/carousel/design/logo-fg.png"),
          },
        ]
      }
    ],
  },
}
