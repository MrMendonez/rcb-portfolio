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
        `<i class="fa fa-smile fa-2x"></i> Hello! My passions include web development, photography, traveling, and hiking. When I\'m not in the office, you can probably find me coding at random cafes, exploring all kinds of ethnic restaurants, or taking <a href="https://unsplash.com/@darrylbrian" target="_blank">photographs</a> of the beauty that is nature.`,
        `<i class="fa fa-code fa-2x"></i> I am a Senior Applications Engineer on the Data Science Platform team at Medidata Solutions. I am a Front-End Tech Lead working on SaaS products that deliver insight on clinical trial data to more than one million registered users including Moderna's COVID-19 vaccine trials.`,
        `<i class="fa fa-graduation-cap fa-2x"></i> I'm a graduate from the New Jersey Institute of Technology with a Bachelor's in Computer Engineering, Rutgers University with a Master's in Education, and Rutgers University's Full-Stack Web Development bootcamp program. Overall, as a life-long learner, I continue to learn more in everything I do as I strive to become the best version of myself.`,
      ]
    },
    projectsSection: {
      title: 'Projects',
      backgroundPath: 'img/projects/macandipad.jpg',
      projects: [
        {
          id: 1,
          url: 'https://darrylmendonez.github.io/find-inspiration/',
          imgPath: 'img/projects/find-inspiration.png',
          title: 'Find Inspiration',
          description: `This image gallery application allows users to find inspiration by searching through about 2 million high quality images shared by close to 200,000 photographers around the world. The images are provided by the Unsplash API.`,
          tools: [
            '<em>React</em> is the javascript framework used to develop as a single-page application',
            'The <em>Unsplash API</em> is where the photographs come from',
            '<em>Axios</em> fetches the data',
            '<em>CSS Flexbox and Grid Layout</em> is used to give the image gallery a mosaic style while also stacking the images for smaller browser widths or mobile devices',
            '<em>Bootstrap</em> is the css framework used to for the modal, navbar, and search form',
            `<em>Cypress</em> is used for <em>unit and e2e testing</em>`,
            `<a href="https://darrylmendonez.medium.com/unsplash-api-with-react-part-1-4919c69f7edc?source=friends_link&sk=4dcc2d62e2aeed4730c3824c4edf905f" target="_blank">Unsplash API with React Part 1</a> - A tutorial I wrote up based on this app was selected by Medium's editorial curation staff to be featured on their homepage, app, topic page, and emails to readers interested in Javascript`
          ],
          github: 'https://github.com/darrylmendonez/find-inspiration',
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
      ]
    },
    toolsSection: {
      title: 'Tools',
      backgroundPath: 'img/tools/macdesktop.jpg',
      tools: [
        {
          class: 'devicon-javascript-plain',
          animationDelay: '.8s',
          title: 'JavaScript',
          url: `https://darrylmendonez.medium.com/javascript-execution-order-e1bebc3976ca?source=friends_link&sk=1f010a999ef44cc098d30fd5769f43e4`,
        },
        {
          class: 'devicon-react-original',
          animationDelay: '.6s',
          title: 'React',
          url: 'https://darrylmendonez.github.io/find-inspiration/',
        },
        {
          class: 'devicon-redux-original',
          animationDelay: '.8s',
          title: 'Redux',
          url: `https://pensive-spence-9a2907.netlify.app/`,
        },
        {
          class: 'devicon-bootstrap-plain',
          animationDelay: '.4s',
          title: 'Bootstrap',
          url: '',
        },
        {
          class: 'devicon-jest-plain',
          animationDelay: '.6s',
          title: 'Jest',
          url: '',
        },
        {
          class: 'fas fa-clipboard-check',
          animationDelay: '.2s',
          title: 'Cypress',
        },
        {
          class: 'devicon-git-plain',
          animationDelay: '.4s',
          title: 'Git',
        },
        {
          class: 'devicon-github-plain',
          animationDelay: '.8s',
          title: 'GitHub',
          url: 'https://github.com/darrylmendonez',
        },
        {
          class: 'devicon-sass-original',
          animationDelay: '.6s',
          title: 'Sass',
        },
        {
          class: 'fas fa-chart-line',
          animationDelay: '.2s',
          title: 'Analytics',
          url: '',
        },
        {
          class: 'devicon-angularjs-plain',
          animationDelay: '.4s',
          title: 'Angular',
          url: '',
        },
        {
          class: 'devicon-vuejs-plain',
          animationDelay: '.8s',
          title: 'Vue.js',
          url: 'https://github.com/darrylmendonez/darrylmendonez.github.io/blob/master/index.html'
        },
        {
          class: 'devicon-typescript-plain',
          animationDelay: '.6s',
          title: 'TypeScript',
        },
        {
          class: 'devicon-html5-plain',
          animationDelay: '.2s',
          title: 'HTML5',
        },
        {
          class: 'devicon-css3-plain',
          animationDelay: '.4s',
          title: 'CSS3',
        },
        {
          class: 'devicon-jquery-plain',
          animationDelay: '.2s',
          title: 'jQuery',
          url: 'http://darrylmendonez.github.io/rocks-paper-scissors/',
          github: 'https://github.com/darrylmendonez/rocks-paper-scissors'
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
          descriptions: [
            `I write to share my knowledge with the web development community as well as an exercise in reaffirming my knowledge. By writing a blog, it allows me to think deeply about an aspect, question and reassess what I think I know about it, and ultimately finish with a deeper level of understanding.`,
            `My posts on the <a href="https://darrylmendonez.medium.com/javascript-execution-order-e1bebc3976ca?source=friends_link&sk=1f010a999ef44cc098d30fd5769f43e4" target="_blank">JavaScript Execution Order</a> and <a href="https://darrylmendonez.medium.com/unsplash-api-with-react-part-1-4919c69f7edc?source=friends_link&sk=4dcc2d62e2aeed4730c3824c4edf905f" target="_blank">Unsplash API with React Part 1</a> were selected by Medium’s curators based on its quality to be recommended to readers interested in JavaScript across their homepage, app, topic page, and emails.`,
          ],
          btnText: 'View Blog Posts',
          url: 'https://darrylmendonez.medium.com/'
        },
        {
          title: 'Teaching Assistant at Rutgers Coding Bootcamp',
          imgPath: 'img/community-service/rcb-class.jpg',
          descriptions: [
            'After graduating from RCB in April 2016, I became a teaching assistant for a new cohort where I worked closely with students during class, during office hours, and online through chat or video conferencing. I would do code reviews, peer-to-peer coding sessions, and answered any questions they had while they worked on their projects. Students expressed genuine appreciation for the support I was able to provide.',
          ]
        },
        {
          title: 'Guest Speaker at Impact 2018 by Trilogy Education Services',
          imgPath: 'img/community-service/graduate-panel.jpg',
          descriptions: [
            'One of three graduates selected to participate in the Student Panel during Trilogy Education Services annual partner summit in Phoenix, Arizona. Partnering universities across the nation were able to hear first hand from graduates about what it was like being a student, how the program has helped our career path, and what are lives have been like since graduating. There were also plenty of opportunities for university representatives to speak to us personally and ask specific questions or just hear our stories.',
          ],
          btnText: 'View Video',
          url: 'https://trilogyed.wistia.com/medias/sn5qazljtr'
        },
        {
          title: 'Consultant for Freehold Regional High School District\'s Web Development Program',
          imgPath: 'img/community-service/freehold-student.jpg',
          descriptions: [
            'Trained 8 web dev high school teachers across the Freehold School District on creating dynamic and interactive webpages using industry standard tools. Skills taught include HTML, CSS, JavaScript, Bootstrap, Animations, Vue.js, Terminal, Git, Github, & Github Pages. Worked directly with the Administrative Supervisor and teachers on writing a three-year curriculum for their Web Dev program.',
          ],
          btnText: 'View article',
          url: `https://www.app.com/story/money/business/career/2018/04/19/nj-jobs-freehold-hs-computer-class-facebook-model-phil-murphy/506372002/`
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
          url: 'https://darrylmendonez.medium.com/',
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
