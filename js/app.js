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
        id: 1,
        title: 'Bio',
        link: '#bio',
        delay: '1.2s'
      },
      {
        id: 2,
        title: 'Projects',
        link: '#projects',
        delay: '1s'
      },
      {
        id: 3,
        title: 'Tools',
        link: '#tools',
        delay: '.8s'
      },
      {
        id: 4,
        title: 'Community',
        link: '#community-service',
        delay: '.6s'
      },
      {
        id: 5,
        title: 'Awards',
        link: '#awards',
        delay: '.4s'
      },
      {
        id: 6,
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
        '<i class="fa fa-code fa-2x"></i> Currently, I am a front-end web developer at <a href="https://www.nucleus-global.com/" target="_blank">Nucleus Global</a>, a world-wide medical communications company. My responsibilities include the creation, development, and implementation of responsive websites, applications for touchscreen kiosks, and web solutions for mobile and desktop devices. Medical clients I\'ve developed web apps for include Novartis, Celgene, Merck, Bristol-Myers Squibb, Abbvie, Boehringer Ingelheim, Gilead, Novo Nordisk, Amgen, GSK, Seattle Genetics, Pfizer, and more.',
        `<i class="fa fa-graduation-cap fa-2x"></i> I'm a graduate from NJIT with a Bachelor's in Computer Engineering, Rutgers University with a Master's in Education, and <a href="https://bootcamp.rutgers.edu/" target="_blank">Rutgers Coding Bootcamp</a>, where I gained the skills to become a full-stack web developer. Overall, as a life-long learner, I continue to learn more in everything I do as I strive to become the best version of myself.`,
      ]
    },
    projectsSection: {
      title: 'Projects',
      backgroundPath: 'img/projects/macandipad.jpg',
      projects: [
        {
          id: 1,
          url: 'https://email-generator-db.firebaseapp.com/',
          imgPath: 'img/projects/email-generator.png',
          title: 'Email Generator',
          description: 'This app is designed to make creating an html email simple. The idea is to build a template that would be used and reused by a company for sending emails. Once a design and format has been discussed with and approved by the client, the template can be styled to match the design and the client can simply fill out a form that will collect the contents of the email. Once submitted, the content would be appropriately placed within the template and the client can copy and paste the email directly into their email application.',
          tools: [
            'Built with <em>React and Redux</em>',
            '<em>MaterializeCSS</em>',
            '<em>Firebase</em> is used for its <em>real-time database</em> to collect data submitted via a form and <em>authentication for registration and login</em>',
            '<em>Moment.js</em> is used to add date and time of when email template is created and for <em>notifications</em>'
          ],
          github: 'https://github.com/darrylmendonez/email-generator',
        },
        {
          id: 2,
          url: 'https://darrylmendonez.github.io/minimallists/',
          imgPath: 'img/projects/minimallists.png',
          title: 'Minimal Lists',
          description: `A simple to-do list application with no frills. Created with <em>React</em> using <em>Context and Hooks</em>. Your data is saved locally on your device which means it's not in a cloud or accessible by the developer and does not get lost when you close or refresh the page making this a useful tool:`,
          tools: [
            'Built with <em>React 16.8</em> using <em>Context API and Hooks</em>',
            '<em>MaterializeCSS</em> is the CSS framework',
            'User data is saved on <em>local storage</em> so to-do list items are persistent and remains even if user refreshes the site or closes their web browser',
            'Users can read, add, and delete task items',
          ],
          github: `https://github.com/darrylmendonez/minimallists`
        },
        {
          id: 3,
          url: 'https://geo-maps-tracker.web.app/',
          imgPath: 'img/projects/geo-maps-tracker.png',
          title: 'Geo Maps Tracker',
          description: `This social media app tracks your location when given permission and allows you to see other user's locations an profiles. You are able to chat on their profile page along with other users.`,
          tools: [
            '<em>Vue.js</em> is the javascript framework used to develop as a single-page application',
            '<em>Vuex</em> is used for state management',
            '<em>Google Maps api</em> is used for the map component and markers are clickable to link to profile of user',
            '<em>Firebase Database</em> is used for its real-time database which allows for the chat feature',
            '<em>Firebase Authentication</em> is used for user registration and login',
          ],
          github: 'https://github.com/darrylmendonez/geo-maps-tracker',
        },
        {
          id: 4,
          url: 'https://www.imne.com/',
          imgPath: 'img/projects/imne.png',
          title: 'IMNE',
          description: 'Created this single-page website for the Institute for Medical and Nursing Education, a full-service, accredited medical education company devoted to enhancing the knowledge of healthcare professionals',
          tools: [
            'Built with <em>Angular 8</em>',
            '<em>MaterializeCSS</em> is the CSS framework which allows for the <em>parallax</em> effect as a user scrolls up and down. When the user clicks on a navbar item <em>smooth-scrolling</em> is used to gracefully scroll to the appropriate section.',
            'This site was built with all devices in mind. Viewing this <em>responsive site</em> on mobile, tablet, or desktop will adjust the elements for the best viewing experience'
          ],
        },
        {
          id: 5,
          url: 'https://www.scientificpathways.com/',
          imgPath: 'img/projects/scientific-pathways.png',
          title: 'Scientific Pathways',
          description: 'Created this single-page website for Scientific Pathways, a full-service medical communications group with offices around the globe.',
          tools: [
            'Built with <em>AngularJS</em>',
            '<em>MaterializeCSS</em> is the CSS framework which allows for the <em>parallax effect</em> as a user scrolls up and down. When the user clicks on a navbar item <em>smooth-scrolling</em> is used to gracefully scroll to the appropriate section.',
            'This site was built with all devices in mind. Viewing this <em>responsive site</em> on mobile, tablet, or desktop will adjust the elements for the best viewing experience'
          ],
        },
        {
          id: 6,
          url: 'http://www.chrysalismedical.com/',
          imgPath: 'img/projects/chrysalis-medical.png',
          title: 'Chrysalis Medical',
          description: 'Created this minimalist-style website for Chrysalis Medical, a full-service agency that is dedicated to partnering with clients in the pharmaceutical industry to provide high-quality scientific and strategic medical communications support',
          tools: [
            'Built with <em>AngularJS</em> and <em>Bootstrap</em>',
            '<em>Angular Animate</em> is used for <em>fade-in page transitions</em>',
            '<em>Animate.css</em> is used to animate elements on each page load',
            '<em>Wow.js</em> is used to control the timing of each animation',
            '<em>AngularJS Form Validation</em> is used on the Contact Us form to prevent invalidated data from being submitted. It is also used to provide appropriate border colors for each form input - blue is active, green is valid input, and red is invalid input. The Submit button will also fire success or error messages that zoom in and out as they enter or exit. Submit button will also shake when invalid information is trying to be submitted.'
          ],
        },
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
          url: 'http://darrylmendonez.github.io/rocks-paper-scissors/',
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
          url: 'https://www.imne.com/',
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
          url: 'https://darrylmendonez.github.io/minimallists/',
          github: 'https://github.com/darrylmendonez/email-generator',
        },
        {
          class: 'devicons devicon-vuejs-plain',
          animationDelay: '.8s',
          title: 'Vue.js',
          url: 'https://geo-maps-tracker.web.app/'
        },
      ]
    },
    communityServiceSection: {
      title: 'Community Service',
      backgroundPath: 'img/community-service/background.jpg',
      services: [
        {
          title: 'Blogger on Medium',
          imgPath: 'img/community-service/javascript-basics.jpg',
          description: `I write to share my knowledge with the web development community as well as an exercise in reaffirming my knowledge. By writing a blog, it allows me to think deeply about an aspect, question and reassess what I think I know about it, and ultimately finish with a deeper level of understanding.`,
          btnText: 'View Blog Posts',
          url: 'https://medium.com/@dmendonez'
        },
        {
          title: 'Teaching Assistant at Rutgers Coding Bootcamp',
          imgPath: 'img/community-service/rcb-class.jpg',
          description: 'After graduating from RCB in April 2016, I became a teaching assistant for a new cohort where I worked closely with students during class, during office hours, and online through chat or video conferencing. I would do code reviews, peer-to-peer coding sessions, and answered any questions they had while they worked on their projects. Students expressed genuine appreciation for the support I was able to provide.',
        },
        {
          title: 'Guest Speaker at Impact 2018 by Trilogy Education Services',
          imgPath: 'img/community-service/graduate-panel.jpg',
          description: 'One of three graduates selected to participate in the Student Panel during Trilogy Education Services annual partner summit in Phoenix, Arizona. Partnering universities across the nation were able to hear first hand from graduates about what it was like being a student, how the program has helped our career path, and what are lives have been like since graduating. There were also plenty of opportunities for university representatives to speak to us personally and ask specific questions or just hear our stories.',
          btnText: 'View Video',
          url: 'https://trilogyed.wistia.com/medias/sn5qazljtr'
        },
        {
          title: 'Consultant for Freehold Regional High School District\'s Web Development Program',
          imgPath: 'img/community-service/freehold-student.jpg',
          description: 'Trained 8 web dev high school teachers across the Freehold School District on creating dynamic and interactive webpages using industry standard tools. Skills taught include HTML, CSS, JavaScript, Bootstrap, Animations, Vue.js, Terminal, Git, Github, & Github Pages. Worked directly with the Administrative Supervisor and teachers on writing a three-year curriculum for their Web Dev program.',
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
          url: 'https://medium.com/@dmendonez',
          title: 'Medium<br><br>',
          animationDelay: '.8s',
          class: 'fab fa-medium',
        },
        {
          url: 'https://github.com/darrylmendonez',
          title: 'GitHub<br><br>',
          animationDelay: '.4s',
          class: 'fab fa-github',
        },
        {
          url: 'https://stackoverflow.com/users/5458425/darryl-mendonez',
          title: 'Stack<br>Overflow',
          animationDelay: '.8s',
          class: 'fab fa-stack-overflow',
        },
        {
          url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dmendonez@gmail.com',
          title: 'Gmail<br><br>',
          animationDelay: '1.1s',
          class: 'far fa-envelope',
        },
      ]
    },
    isScrollPastTitle: false,
  }, // /data
  methods: {
    activateNavbarLogo: function() {
      let scrollDistance = $(window).scrollTop();
      // console.log('scrollDistance = ', scrollDistance);
      if (scrollDistance >= 102) {
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
