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
    brandLogoDelay: '.2s',
    navItems: [
      {
        title: 'Home',
        link: '#home',
        delay: '.4s'
      },
      {
        title: 'Bio',
        link: '#bio',
        delay: '.6s'
      },
      {
        title: 'Projects',
        link: '#projects',
        delay: '.8s'
      },
      {
        title: 'Tools',
        link: '#tools',
        delay: '1s'
      },
      {
        title: 'Social',
        link: '#social',
        delay: '1.2s'
      },
    ],
    titleDelay: '2.2s',
    subtitle: {
      title: 'Front-End Web Dev',
      delay: '3.2s'
    },
    homeBackgroundPath: 'img/home/macbookair.jpg',
    bioSection: {
      title: 'Front-End Web Developer',
      descriptions: [
        '<i class="fa fa-code fa-2x"></i> A front-end web developer at <a href="https://www.synaptikdigital.com/" target="_blank">Synaptik Digital</a>, a world-wide medical communications company, where I am responsible for the creation, development, and implementation of internal and external websites as well as web solutions for mobile devices with a specific focus on large scale JavaScript projects. Medical and pharmaceutical clients I\'ve developed websites and touchscreen kiosks for include but not limited to - Novartis, Celgene, Merck, Bristol-Myers Squibb, Abbvie, Boehringer Ingelheim, Gilead, Novo Nordisk, Amgen, GSK, Seattle Genetics, and Pfizer',
        '<i class="fa fa-graduation-cap fa-2x"></i> In April 2016 I completed training to become a full-stack web developer through Rutgers Coding Bootcamp, a rigorous yet exciting program where I learned in-depth web development including AngularJS, APIs, NodeJS, MySQL, Express, and so much more.',
        '<i class="fa fa-plane fa-2x"></i> When I\'m not working, I feed my love for traveling. I\'ve snowboarded through the evergreen mountains of Vermont and canoed the Bioluminescent Bay of Puerto Rico. I\'ve backpacked from Costa Rica to Nicaragua and have enjoyed the sushi in Japan. I\'ve seen with my own eyes the Crown of Thorns at Notre Dame in Paris as well as the Holy Grail at the Cathedral of Valencia in Spain. I\'ve swam the beautiful beaches of the Philippines and climbed the Lanikai Pillboxes of Hawaii to catch the Golden Sunrise Sky. I have much more to see...'
      ]
    },
    projectsSection: {
      title: 'Projects',
      backgroundPath: 'img/projects/macandipad.jpg',
      projects: [
        {
          animationDelay: '.4s',
          url: 'http://www.scientificpathways.com/',
          imgPath: 'img/projects/scientific-pathways.png',
          title: 'Scientific Pathways',
          description: 'Created this single-page website for Scientific Pathways, a global full-service medical communcations company that specializes in business planning and strategic consultation, client communications, account management, and overall program oversight with expertise in scientific research, strategic communication planning, scientific direction and content development.',
          tools: [
            'Built with AngularJS',
            'MaterializeCSS is the CSS framework which allows for the parallax effect as a user scrolls up and down. When the user clicks on a navbar item smooth-scrolling is used to gracefully scroll to the appropriate section.',
            'This site was built with all devices in mind. Viewing this responsive site on mobile, tablet, or desktop will adjust the elements for the best viewing experience'
          ],
        },
        {
          animationDelay: '.4s',
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
          animationDelay: '.4s',
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
          animationDelay: '.4s',
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
          animationDelay: '.4s',
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
          class: 'devicons-html5',
          animationDelay: '.4s',
          title: 'HTML5'
        },
        {
          class: 'devicons-css3',
          animationDelay: '.8s',
          title: 'CSS3'
        },
        {
          class: 'devicon-sass-original',
          animationDelay: '1.6s',
          title: 'Sass'
        },
        {
          class: 'devicons-javascript_badge',
          animationDelay: '1.2s',
          title: 'JavaScript'
        },
        {
          class: 'devicons-jquery',
          animationDelay: '1.6s',
          title: 'jQuery'
        },
        {
          class: 'devicons-bootstrap',
          animationDelay: '.4s',
          title: 'Bootstrap'
        },
        {
          class: 'devicons-materializecss',
          animationDelay: '.8s',
          title: 'Materialize'
        },
        {
          class: 'devicons-git',
          animationDelay: '1.2s',
          title: 'Git'
        },
        {
          class: 'devicons-github',
          animationDelay: '1.6s',
          title: 'GitHub'
        },
        {
          class: 'devicons-streamline',
          animationDelay: '.4s',
          title: 'API'
        },
        {
          class: 'devicons-npm',
          animationDelay: '.8s',
          title: 'npm'
        },
        {
          class: 'devicons-firebase',
          animationDelay: '1.2s',
          title: 'Firebase'
        },
        {
          class: 'devicons-mysql',
          animationDelay: '1.6s',
          title: 'MySQL'
        },
        {
          class: 'devicons-angular',
          animationDelay: '.4s',
          title: 'Angular'
        },
        {
          class: 'devicons-react',
          animationDelay: '.8s',
          title: 'React'
        },
        {
          class: 'devicon-vuejs-plain',
          animationDelay: '1.2s',
          title: 'Vue.js'
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
          btnText: 'Read Article',
          url: 'https://www.app.com/story/money/business/career/2018/04/19/nj-jobs-freehold-hs-computer-class-facebook-model-phil-murphy/506372002/'
        },
        {
          title: 'Guest Speaker at Impact 2018 by Trilogy Education Services',
          imgPath: 'img/community-service/graduate-panel.jpg',
          description: 'One of three graduates selected to participate in the Graduate Panel during Trilogy Education Services annual partner summit. Partners from universities across the nation were able to hear first hand from graduates about what it was like being a student, how the program has helped our career path, and what are lives have been like since graduating. There were also plenty of opportunities for university representatives to speak to us personally and ask specific questions or just hear our stories.',
          btnText: 'View Video'
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
          title: 'LinkedIn',
          animationDelay: '.4s',
          class: 'fa-linkedin',
          username: 'darrylmendonez'
        },
        {
          url: 'https://github.com/darrylmendonez',
          title: 'GitHub',
          animationDelay: '.8s',
          class: 'fa-github',
          username: 'darrylmendonez'
        },
        {
          url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=darrylmendonez@gmail.com',
          title: 'Gmail',
          animationDelay: '1.2s',
          class: 'fa-envelope',
          username: 'darrylmendonez'
        },
      ]
    }
  }, // /data
  methods: {}, // /methods
});
