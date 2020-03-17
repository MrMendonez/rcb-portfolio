new Vue({
  el: '#vue-app',
  data: {
    // styles
    primaryColor: '#0f93ce',
    secondaryColor: '#503291',
    linebreak: '<br>',
    doubleLinebreak: '<br><br>',
    // data
    title: 'Darryl Mendonez',
    brandLogo: {
      link: '#home',
      delay: '.2s',
      
    },
    navItems: [
      {
        title: 'Bio',
        link: '#bio',
        delay: '1.2s'
      },
      {
        title: 'Projects',
        link: '#projects',
        delay: '1s'
      },
      {
        title: 'Tools',
        link: '#tools',
        delay: '.8s'
      },
      {
        title: 'Community',
        link: '#community-service',
        delay: '.6s'
      },
      {
        title: 'Awards',
        link: '#awards',
        delay: '.4s'
      },
      {
        title: 'Social',
        link: '#social',
        delay: '.2s'
      },
    ],
    titleDelay: '2s',
    subtitle: {
      title: 'Front-End Web Dev',
      delay: '2.8s'
    },
    homeBackgroundPath: 'img/home/macbookair.jpg',
    bioSection: {
      title: 'Front-End Web Developer',
      descriptions: [
        '<i class="fa fa-smile fa-2x"></i> Welcome and thank you for taking the time to get to know me! My passions include web development, photography, traveling, and hiking. When I\'m not in the office, you can probably find me coding at random cafes, exploring all kinds of ethnic restaurants, or taking <a href="https://unsplash.com/@darrylbrian" target="_blank">photographs</a> of the beauty that is nature.',
        '<i class="fa fa-code fa-2x"></i> Currently, I am a front-end web developer at <a href="https://www.synaptikdigital.com/" target="_blank">Synaptik Digital</a>, a world-wide medical communications company. My responsibilities include the creation, development, and implementation of responsive websites, angular applications for touchscreen kiosks, and web solutions for mobile and desktop devices. Medical clients I\'ve developed web apps for include Novartis, Celgene, Merck, Bristol-Myers Squibb, Abbvie, Boehringer Ingelheim, Gilead, Novo Nordisk, Amgen, GSK, Seattle Genetics, Pfizer, and more.',
        '<i class="fa fa-graduation-cap fa-2x"></i> In April 2016, I completed training to become a full-stack web developer through <a href="https://bootcamp.rutgers.edu/" target="_blank">Rutgers Coding Bootcamp</a>, a rigorous yet exciting program where I gained in-depth web development skills in AngularJS, APIs, NodeJS, MySQL, Express, and so much more.',
      ]
    },
    projectsSection: {
      title: 'Projects',
      backgroundPath: 'img/projects/macandipad.jpg',
      projects: [
        {
          id: 1,
          url: 'https://darrylmendonez.github.io/ctf-white-label-kiosk-demo/',
          imgPath: 'img/projects/ctf-white-label.png',
          title: 'Clinical Pipeline',
          description: 'This is an example of many touchscreen kiosks I\'ve developed for some of the world\'s most profitable pharmaceutical companies. Congresses where my Angular kiosks have been displayed include <a href="https://www.hematology.org" target="_blank">2017 & 2018 American Society of Hematology</a>, <a href="https://meetings.asco.org" target="_blank">2017 & 2018 American Society of Clinical Oncology</a>, and <a href="https://www.aad.org/" target="_blank">2018 American Academy of Dermatology</a>. Each of these major congresses have over 18,000 attendees including over 10,000 medical personnel. All medical and business data have been removed for demo purposes.',
          tools: [
            'Built with Angular6+ including components, nested components, data-binding, routing, & route parameters to bind the appropriate data',
            'Angular Animations are used for page transitions',
            'Bootstrap is the CSS framework',
          ],
          github: 'https://github.com/darrylmendonez/ctf-white-label-kiosk-demo',
        },
        {
          id: 2,
          url: 'https://email-generator-db.firebaseapp.com/',
          imgPath: 'img/projects/email-generator.png',
          title: 'Email Generator',
          description: 'This app is designed to make creating an html email simple. The idea is to build a template that would be used and reused by a company for sending emails. Once a design and format has been discussed with and approved by the client, the template can be styled to match the design and the client can simply fill out a form that will collect the contents of the email. Once submitted, the content would be appropriately placed within the template and the client can copy and paste the email directly into their email application.',
          tools: [
            'Built with React and Redux',
            'MaterializeCSS',
            'Firebase is used for its real-time database to collect data submitted via a form and authentication for registration and login',
            'Moment.js is used to add date and time of when email template is created and for notifications'
          ],
          github: 'https://github.com/darrylmendonez/email-generator',
        },
        {
          id: 3,
          url: 'https://darrylmendonez.github.io/minimallists/',
          imgPath: 'img/projects/minimallists.png',
          title: 'Minimal Lists',
          description: `A simple to-do list application with no frills. Created with React using Context and Hooks. Your data is saved locally on your device which means it's not in a cloud or accessible by the developer and does not get lost when you close or refresh the page making this a useful tool:`,
          tools: [
            'Built with React using Context API and Hooks',
            'MaterializeCSS is the CSS framework',
            'User data is saved on local storage so to-do list items are persistent and remains even if user refreshes the site or closes their web browser',
            'Users can read, add, and delete task items',
            `Roadmap: edit task, edit list title, create multiple lists`
          ],
          github: `https://github.com/darrylmendonez/minimallists`
        },
        {
          id: 4,
          url: 'https://www.imne.com/',
          imgPath: 'img/projects/imne.png',
          title: 'IMNE',
          description: 'Created this single-page website for the Institute for Medical and Nursing Education, a full-service, accredited medical education company devoted to enhancing the knowledge of healthcare professionals',
          tools: [
            'Built with Angular 8',
            'MaterializeCSS is the CSS framework which allows for the parallax effect as a user scrolls up and down. When the user clicks on a navbar item smooth-scrolling is used to gracefully scroll to the appropriate section.',
            'This site was built with all devices in mind. Viewing this responsive site on mobile, tablet, or desktop will adjust the elements for the best viewing experience'
          ],
        },
        {
          id: 5,
          url: 'http://www.chrysalismedical.com/',
          imgPath: 'img/projects/chrysalis-medical.png',
          title: 'Chrysalis Medical',
          description: 'Created this minimalist-style website for Chrysalis Medical, a full-service agency that is dedicated to partnering with clients in the pharmaceutical industry to provide high-quality scientific and strategic medical communications support',
          tools: [
            'Built with AngularJS',
            'Angular Animate is used for fade-in page transitions',
            'Animate.css is used to animate elements on each page load',
            'Wow.js is used to control the timing of each animation',
            'AngularJS Form Validation is used on the Contact Us form to prevent invalidated data from being submitted. It is also used to provide appropriate border colors for each form input - blue is active, green is valid input, and red is invalid input. The Submit button will also fire success or error messages that zoom in and out as they enter or exit. Submit button will also shake when invalid information is trying to be submitted.'
          ],
        },
        {
          id: 6,
          url: 'http://trustingpixels.herokuapp.com/',
          imgPath: 'img/trustingpixels.png',
          title: 'Trusting Pixels',
          description: 'A freelance job I did for a new business that promotes photoshop-free advertisements. The business owner gave me mockups done on photoshop of what he wanted his site to look like. I was able to successfully create the site to his exact specifications. He had a very strong attention to detail and we were able to collaborate successfully.',
          tools: [
            'MaterializeCSS is the CSS framework',
            'AngularJS is used for routing which gives it a snappy transition when going from page to page',
          ],
          github: 'https://github.com/darrylmendonez/tp'
        },
        {
          id: 7,
          url: 'http://tripchats.herokuapp.com/',
          imgPath: 'img/projects/tripchats.png',
          title: 'Trip Chats',
          description: 'A full-stack project that allows users to post itineraries of trips they plan on going to. Other users can post comments to suggest to the original poster so they can get advice of what places to see and activities to do. This gives users access to insight from locals or other travelers to make the best of their trip.',
          tools: [
            'MySQL stores the data',
            'Express is the web framework',
            'AngularJS is the router and controller',
            'Node.js is the engine',
            'Bootstrap is the CSS framework'
          ],
          github: 'https://github.com/paulducsantos/tripchat'
        },
        {
          id: 8,
          url: 'http://dailybriefing.herokuapp.com/',
          imgPath: 'img/projects/dailybriefing.png',
          title: 'Daily Briefing',
          description: 'Your one-stop shop for weather, traffic, news, events, and pictures going on in your current location or city of choice. Daily Briefing is a front-end project utilizing many web tools:',
          tools: [
            'MaterializeCSS is the CSS framework',
            'jQuery is the engine',
            'API\'s:',
            [
              'The Dark Sky Forecast',
              'Google Maps',
              'Bing',
              'EventBrite',
              'Flickr'
            ],
            'Firebase is used for the \'Like\' button counter'
          ],
          github: 'https://github.com/darrylmendonez/tp'
        }
      ]
    },
    toolsSection: {
      title: 'Tools',
      backgroundPath: 'img/tools/macdesktop.jpg',
      tools: [
        {
          class: 'devicons devicons-html5',
          animationDelay: '.2s',
          title: 'HTML5',
        },
        {
          class: 'devicons devicons-css3',
          animationDelay: '.4s',
          title: 'CSS3',
        },
        {
          class: 'devicons devicon-sass-original',
          animationDelay: '.6s',
          title: 'Sass',
        },
        {
          class: 'devicons devicons-javascript_badge',
          animationDelay: '.8s',
          title: 'JavaScript',
        },
        {
          class: 'devicons devicons-jquery',
          animationDelay: '.2s',
          title: 'jQuery',
          url: 'http://miketysonsshootout.herokuapp.com/',
          github: 'https://github.com/darrylmendonez/rocks-paper-scissors'
        },
        {
          class: 'devicons devicons-bootstrap',
          animationDelay: '.4s',
          title: 'Bootstrap',
          url: 'https://www.chrysalismedical.com/',
        },
        {
          class: 'devicons devicons-materializecss',
          animationDelay: '.6s',
          title: 'Materialize',
          url: 'http://www.scientificpathways.com/',
        },
        {
          class: 'devicons devicons-github',
          animationDelay: '.8s',
          title: 'GitHub',
          url: 'https://github.com/darrylmendonez',
        },
        {
          class: 'devicons devicons-atom',
          animationDelay: '.2s',
          title: 'Electron',
        },
        {
          class: 'fas fa-chart-area',
          animationDelay: '.4s',
          title: 'Chart.js',
          url: 'https://darrylmendonez.github.io/charts/',
          github: 'https://github.com/darrylmendonez/charts',
        },
        {
          class: 'fas fa-project-diagram',
          animationDelay: '.6s',
          title: 'GraphQL',
          url: 'https://github.com/darrylmendonez/reading-list'
        },
        {
          class: 'devicon-d3js-plain',
          animationDelay: '.8s',
          title: 'D3',
          url: 'https://darrylmendonez.github.io/budget-planner/'
        },
        {
          class: 'devicons devicons-firebase',
          animationDelay: '.2s',
          title: 'Firebase',
          url: 'https://email-generator-db.firebaseapp.com/',
        },
        {
          class: 'devicons devicons-angular fa-5x',
          animationDelay: '.4s',
          title: 'Angular',
          url: 'https://darrylmendonez.github.io/ctf-white-label-kiosk-demo/',
          github: 'https://github.com/darrylmendonez/ctf-white-label-kiosk-demo',
        },
        {
          class: 'devicons devicons-react',
          animationDelay: '.6s',
          title: 'React',
          url: 'https://email-generator-db.firebaseapp.com/',
          github: 'https://github.com/darrylmendonez/email-generator',
        },
        {
          class: 'devicons devicon-vuejs-plain',
          animationDelay: '.8s',
          title: 'Vue.js',
          url: 'https://clinicalthinking.com/'
        },
      ]
    },
    communityServiceSection: {
      title: 'Community Service',
      backgroundPath: 'img/community-service/background.jpg',
      services: [
        {
          title: 'Teaching Assistant at Rutgers Coding Bootcamp',
          imgPath: 'img/community-service/rcb-class.jpg',
          description: 'After graduating from RCB in April 2016, I became a teaching assistant for a new cohort where I worked closely with students during class, during office hours, and online through chat or video conferencing. I would do code reviews, peer-to-peer coding sessions, and answered any questions they had while they worked on their projects. Students expressed genuine appreciation for the support I was able to provide.',
          btnText: 'View Video'
        },
        {
          title: 'Consultant for Freehold Regional High School District\'s Web Development Program',
          imgPath: 'img/community-service/freehold-student.jpg',
          description: 'Trained five web development teachers on creating dynamic and interactive webpages using industry standard tools such as GitHub and Atom. Skills taught include HTML, CSS, JavaScript, and Bootstrap. I also worked closely with the Director of Curriculum and Instruction as well as the web development teachers on writing a three-year curriculum for their Web Design program',
          btnText: 'View Article',
          url: 'https://www.app.com/story/money/business/career/2018/04/19/nj-jobs-freehold-hs-computer-class-facebook-model-phil-murphy/506372002/'
        },
        {
          title: 'Guest Speaker at Impact 2018 by Trilogy Education Services',
          imgPath: 'img/community-service/graduate-panel.jpg',
          description: 'One of three graduates selected to participate in the Student Panel during Trilogy Education Services annual partner summit in Phoenix, Arizona. Partnering universities across the nation were able to hear first hand from graduates about what it was like being a student, how the program has helped our career path, and what are lives have been like since graduating. There were also plenty of opportunities for university representatives to speak to us personally and ask specific questions or just hear our stories.',
          btnText: 'View Video',
          url: 'https://trilogyed.wistia.com/medias/sn5qazljtr'
        },
      ]
    },
    awardsSection: {
      title: 'Awards',
      backgroundPath: 'img/awards/background.jpg',
      awards: [
        {
          title: 'School Spirit Award',
          presentedBy: 'Trilogy Education Services',
          location: 'Impact 2018',
          imgPath: 'img/awards/hug.jpg',
          description: '"I couldn\'t be prouder to present this next award. When we were launching the company in our first class at Rutgers University I contacted this person for a potential TA opportunity. At the time he was teaching Web Design and Computer Applications at South Brunswick High School in New Jersey. And the conversation quickly turned to his interest in joining as a student. And his motivation to join the program was to gain a web development skill set and bring it back to his school district to create a curriculum that would impact lives at the middle school and high school level. So he came into the program and he quickly flourished and became one of the most dedicated and talented individuals in the classroom. He landed a job as a web developer almost immediately after graduation. And he never lost sight of his core why or his why he joined the program - his core motivation. And fast-forward a year and a half later he\'s now a consultant for Freehold High School in New Jersey. He is building a curriculum that\'ll change hopefully students\' lives at the high school level and he\'s taking their teachers through a mini-bootcamp to make sure they have the skills to be effective as educators. So it is with great pride that I present the School Spirit Award to Mr. Darryl Mendonez."<br><br>-Jedrek Woodarek, VP of Instruction at Trilogy Education Services',
          url: 'https://trilogyed.wistia.com/medias/0jd0brsrbi',
          btnText: 'View Video'
        },
        {
          title: 'V12 Group Hackathon 2016',
          presentedBy: 'V12 Group',
          location: 'V12 Group',
          imgPath: 'img/awards/v12-winners.png',
          description: 'Winner of the V12 Group Hackathon - Developed a web application on a team of seven that allows prospective business owners to search locations and see a map of demographics based on the user’s filtering choices. This allows the user to decide if a location was an optimal area to start their business. I was responsible for setting up the angular ui-routes, structuring the index.html, and helped in the overall design.',
          url: 'http://njtechweekly.com/art/3006-rutgers-coding-bootcamp-students-shine-at-red-bank-based-v12-group-hackathon/',
          btnText: 'View Article'
        }
      ]
    },
    socialSection: {
      title: 'Social',
      backgroundPath: 'img/social/iphone.jpg',
      socialInfo: [
        {
          url: 'https://www.linkedin.com/in/darrylmendonez',
          title: 'LinkedIn<br><br>',
          animationDelay: '.2s',
          class: 'fab fa-linkedin',
        },
        {
          url: 'https://github.com/darrylmendonez',
          title: 'GitHub<br><br>',
          animationDelay: '.4s',
          class: 'fab fa-github',
        },
        {
          url: 'https://stackoverflow.com/users/5458425/darryl-mendonez',
          title: 'Stack Overflow',
          animationDelay: '.6s',
          class: 'fab fa-stack-overflow',
        },
        {
          url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dmendonez@gmail.com',
          title: 'Gmail<br><br>',
          animationDelay: '.8s',
          class: 'far fa-envelope',
        },
      ]
    },
    isScrollPastTitle: false,
  }, // /data
  methods: {
    activateNavbarLogo: function() {
      let scrollDistance = $(window).scrollTop();
      if (scrollDistance >= 166) {
        this.isScrollPastTitle = true;
      }
      else {
        this.isScrollPastTitle = false;
      }
    }
  }, // /methods
  mounted () {
    window.addEventListener('scroll', this.activateNavbarLogo)
  },
  // beforeDestroy () {
  //   window.removeEventListener('scroll', this.activateNavbarLogo)
  // }
});
