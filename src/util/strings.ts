export const functionalitiesAlias = {
  navbar: {
    intro: "intro",
    cv: "who?",
    work: "work.",
    playground: "playing!"
  },
  arrowBack: {
    title: "back"
  },
}

export const emoji = {
  relieved_face: 0x1F60C,
  fire: 0x1F525,
  joystick: 0x1F579,
  face_with_tears_of_joy: 0x1F923,
  face_with_smiley_eyes: 0x1F601,
  face_with_tongue_and_winking_eye: 0x1F61C,
  face_wiking: 0x1F609,
  face_upside_down: 0x1F643,
  umbrella_raining: 0x2614,
  face_with_cold_sweat: 0x1F605,
  blue_heart: 0x1F499
}

export const strings = {
  heroPage: {
    introText: {
      firstLine: "Hello, I'm Francis.",
      secondLine: "A multi-skilled Software Developer.",
      thirdLine: "Specialized in ",
      fourthLine: "Great hand-stander and former professional Chef!",
      endPoint: ".",
      dynamicWords: {
        frontEnd: "Front-end",
        backEnd: "Back-end",
        webDevelopment: "Web Development",
        mobileDevelopment: "Mobile Development",
        //decentralizedApps: "Decentralized Applications",
      }
    },
    talkMenuMobile: "Get in touch.",
    talk:"Let's talk? ",
    mail:"franciscojmguedes",
    mailDomain:"@gmail.com.",
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
    subTitle: "Finished, ongoing and personal projects.",
    footerTitle: "Work always in progress.",
    projects: 
    [
      {
        title: "First Steps", 
        href: "https://www.firststeps.pt",
        imagePath: require('../assets/images/work/first-steps-website.jpg'),
        alt: "Website of a digital event within the urban culture / hiphop. Six fundamentals in form of workshops and competition in Lisbon. It happened on the 20th of November of 2021."
      },
      /* {
        title: "Wave Portal", 
        href: "https://waveportal-baseline-student.daeshawnballard.repl.co/",
        imagePath: require("../assets/images/work/dapp.png"),
        alt: "A small website where anyone with a crytpo wallet can log in and send a hello in form of a wave emoji."
      } */
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
        title: 'Breaking.',
        subtitle: "Don't try this at home.",
        carousel: 
        [
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/fs-2022-1.jpg'),
            alt: "Cypher jam for Pro dancers on the First Steps 2021 event final in Lisbon."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2019.jpg'),
            alt: "Performance on the Festival Iminente on 2019, Lisbon."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/fs-2022-2.jpg'),
            alt: "Cypher jam for Pro dancers on the First Steps 2021 event final in Lisbon."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/fs-2022-3.jpg'),
            alt: "Cypher jam for Pro dancers on the First Steps 2021 event final in Lisbon."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2020-1.jpg'),
            alt: "Performance on the Festival Iminente on 2020, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2020-2.jpg'),
            alt: "Performance on the Festival Iminente on 2020, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2020-3.jpg'),
            alt: "Performance on the Festival Iminente on 2020, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2021-1.jpg'),
            alt: "Performance on the Festival Iminente on 2021, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2021-2.jpg'),
            alt: "Performance on the Festival Iminente on 2021, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2021-3.jpg'),
            alt: "Performance on the Festival Iminente on 2021, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/iminente-2021-4.jpg'),
            alt: "Performance on the Festival Iminente on 2021, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/madeira-2022.jpg'),
            alt: "An acrobatic freeze on top of the talest mountain in Madeira at 3 kilometers high. 2022."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/park-central-amadora.jpg'),
            alt: "Airflare. One of the most complex fundational moves in breaking. For a moment of time I feel I can fly in a way that my body is fully in the air without any member of my body touching the ground. Lisbon 2021."
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/popup-2021.jpg'),
            alt: "An acrobatic freeze in a Park in Lisbon, 2021.",
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/ribeira-2018-1.jpg'),
            alt: "Street show memoires from Porto, 2018.",
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/ribeira-2018-2.jpg'),
            alt: "Street show memoires from Porto, 2018.",
          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/slazaro-2022-1.jpg'),
            alt: "Performance on the Galerias S.Lázaro 2022, Lisbon."

          },
          {
            description: "Breaking", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/breaking/slazaro-2022-2.jpg'),
            alt: "Performance on the Galerias S.Lázaro 2022, Lisbon."
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
            imagePath: require('../assets/images/playground/carousel/unda/fs-2021-1.jpg'),
            alt: "UNDA. Is the name of the NPO that I helped co-funded and grow through time."

          },
          {
            description: "UNDA", 
            href: "UNDA",
            imagePath: require('../assets/images/playground/carousel/unda/unda-2.jpg'),
            alt: "Part of team UNDA that helped execute and produce the First Steps 2021 event in Lisbon."
          },
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/fs-2021-2.jpg'),
            alt: "The almost full team of UNDA that helped execute and produce the First Steps 2021 event in Lisbon."
          },
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda-4.jpg'),
            alt: "The core behind the UNDA on a team building in Peniche, 2022."
          },
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/unda-1.jpg'),
            alt: "Team building in Peniche, 2022."
          },
          {
            description: "UNDA", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/unda/fs-2021-3.jpg'),
            alt: "The logo of the First Steps event 2021 and the badge of producting team."
          },
        ]
        
      },
      {
        index: 2,
        title: 'Deliciousness.',
        subtitle: "Once upon a time.",
        carousel: 
        [
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/maxibom.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6424.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6431.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6436.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6419.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6420.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6421.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6422.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_4799.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6423.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6416.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6425.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6426.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6427.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6428.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6429.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6430.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6417.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6432.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6433.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6434.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6435.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6418.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
          {
            description: "Desserts", 
            href: "",
            imagePath: require('../assets/images/playground/carousel/desserts/IMG_6437.jpg'),
            alt: "You can drool at ease, this is from the time I was a Chef. Wanna know what it is? Send me a message."
          },
        ]
      },
      /* {
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
      } */
    ],
  },
  notFoundPage: {
    button_name: "Toggle me!",
  },
  gif: {
    text: 'waiting',
    dots: '...'
  },
  whoPage: {
    section_one: {
      title: 'My story',
      composing: {
        first_line: "First things first. How are you? Good? Great, let's start!",
        second_paragraph: "I'm a portuguese tripeiro Full Stack Software Developer based in Lisbon. Currently working for an IT consulting company but always ready for a new challenge after hours.",
      },
      pro_bono: "I do pro bono work, so don't be shy, say hello and tell me your story.",
      dont_care_social: "On my free time you can find me blá blá who cares, check my social if you are into it, if not, let's cary on.",
      engagement: {
        first_word: "Let's",
        second_word: 'create',
        third_word: 'something',
        fourth_word: 'together.'
      },
    },
    section_two: {
      title: "My Skills.",
      sub_title: "It's a mix of words, try to find the right ones.",
      skills: {
        amir: {
          name:'Amir',
          description: "One of my favorite bboys for the creativity - out of the box - thinking. Top three in 2022 " + String.fromCodePoint(emoji.fire).repeat(3)
        },
        java: {
          name: 'Java',
          description: "You gotcha! I use it as a main programming language for Back-end development. Didn't like at the beginning but now I'm really enjoying it " + String.fromCodePoint(emoji.relieved_face)
        },
        react_native: {
          name: 'React Native',
          description: "Yeeeees! Even though I'm not profficient I'm getting used to work with it and learning more every day."
        },
        html: {
          name: 'Html',
          description: "I'm a rocka and rolla expert, I can even hack your phone with it! No I can't, just kidding " + String.fromCodePoint(emoji.face_with_tears_of_joy).repeat(3)
        },
        typescript: {
          name: 'Typescript',
          description: "Felt in love at first sight when I met it while learning Angular. It's my preferred programming language for Front-end development nowadays and I use it as a daily basis too " + String.fromCodePoint(emoji.face_with_smiley_eyes)
        },
        front_office: {
          name: 'Front Office',
          description: "You wish! Once upon a time I did several small jobs where I had to meet the client and talk with him as part of the support function I was providing, but now, thank you but no thank you."
        },
        python: {
          name: 'Python',
          description: "A little rusty, but I still remember the beautiful syntax this baby has when I started to learn it after delving into the giant world that the IT industry has and its technologies. I still do one or two things with it for fun but unfortunatly is not a programming language that I use on my work."
        },
        angular: {
          name: 'Angular',
          description: "Love it and hate it - I'm refering to the versions after the JS. I feel it fails is in its verbosity which makes creating simple components and getting an application running actually kinda tedious. When I'm looking to build something or toy around with in my spare time, I'm looking to just declare a few things, see it rendered out and just play " + String.fromCodePoint(emoji.face_with_smiley_eyes)
        },
        lagaet: {
          name: 'Lagaet',
          description: "Another favorite bboy - one of the best out there actually. All around along with hes own character, personally, I identify with the way he does the movements as well as his conceptualization."
        },
        link: {
          name: 'Link',
          description: "The Legend of Zelda hero - well, I'm a 90's kid. Link is one of gaming's most iconic silent protagonists, who actually bears some resemblance to me for being a very reserved guy."
        },
        sonic: {
          name: 'Sonic',
          description: 'One of my favorite games of all time since I was a kid - the original version on Mega Drive obviously. This is not the skill you are looking for ' + String.fromCodePoint(emoji.face_with_tongue_and_winking_eye)
        },
        airflare: {
          name: 'Airflare',
          description: "Love it and hate it. It's amazing what you can do with your body, for a second I feel like I'm flying. Even though it gives me adrenaline from doing it, the time it took me to master and improve is the most negative aspect of this body art form. Nevertheless a person who can do that must have amazing skills don't you think? Check it to see what I'm talking about " + String.fromCodePoint(emoji.face_wiking)
        },
        spring: {
          name: 'Spring Boot',
          description: "Yes yes yes. You gotcha! I use it as a main framework for Back-end development. I use others too but not as frequent as this one. However, not really a fan for doing views."
        },
        my_sql: {
          name: 'MySql',
          description: "Oh yeah! Relation databases are all I can think of and all I use as FullStack developer - it provides an intuitive way to represent data and allows easy access to related data points! Curious about NoSql but for know I want to invest my time on this baddie " + String.fromCodePoint(emoji.face_with_tears_of_joy)
        },
        scrum: {
          name: 'Scrum',
          description: 'The Agile methodology framework most popular and followed worlwide for project management that emphasizes teamwork, accountability and iterative progress toward a well-defined goal. We use it on a daily basis!'
        },
        css: {
          name: 'Css / Sass',
          description: "Well if you are into Front-end development you gotta know this one. Personally opinion here, it's mandatory to know how to center a div, even though I work with it all the time, sometimes I forget trivial stuff like that. Thank you Stackoverflow " + String.fromCodePoint(emoji.face_with_tears_of_joy).repeat(3)
        },
        squirtle: {
          name: 'Squirtle',
          description: 'Congrats, you just found my favorite Pokémon ' + String.fromCodePoint(emoji.umbrella_raining) + String.fromCodePoint(emoji.face_upside_down)
        },
        flask: {
          name: 'Flask',
          description: "Not the superhero - Flash - but I really enjoy making small projects with it. Small but powerfull python micro-framework! Unfortunatly, as I dont' use python in my work, I don't use it also."
        },
        windmill: {
          name: 'Windmill',
          description: "Once again, amazing thing to do with your body, the iconic movement of breaking. If you know how to do it you must have an amazing skill set, also it's not the one you are looking for."
        },
        tibco: {
          name: 'Tibco',
          description: "Very interesting framework for Software Development in which I had the privilege of having training but I am not interested in working with it."
        },
        back_office: {
          name: 'Back Office',
          description: "Well, I can say that it is part of IT services, but there was a time when I did small jobs in warehouses or in support services and that type of work I don't want anymore " + String.fromCodePoint(emoji.face_with_cold_sweat)
        },
        knuckles: {
          name: 'Knuckles',
          description: 'When I played Sonic in my youth days, sometimes I just wanted to play with this red devil persona over Sonic. Why? He could fly!' + String.fromCodePoint(emoji.joystick)
        },
        git: {
          name: 'Git',
          description: 'Fundamental to have at least the basic knowlege of it! Work with Git on a daily basis and gosh you must hate resolving conflicts as much as I do ' + String.fromCodePoint(emoji.face_with_cold_sweat)
        },
        padawan: {
          name: 'Padawan',
          description: 'The more I learn, the more I understand I know nothing at all.'
        },
        react: {
          name: 'ReactJs',
          description: String.fromCodePoint(emoji.blue_heart).repeat(3) + " much love for this baby right now. It's not perfect (who is?) but I love working with it. Intuitive, declarative, provides reusable components, JS library, components support, SEO friendly, easy data binding implementation adn so on! " + String.fromCodePoint(emoji.blue_heart).repeat(3)
        },
        ci_cd: {
          name: 'CI CD',
          description: 'Always continue integration and continue development. Daily basis baby, is part of the job!'
        }
      }
    }
  }
}

export const http_errors = {
  notFound: {
    code: '404',
    message: "Oh no, the good old not found page."
  },
  internalError: {
    code: '500',
    message: "Well this is embarrasing, our server is down. We'll be back soon."
  },
  otherError: {
    code: 'Error!',
    message: 'Please come back later.'
  }
}
