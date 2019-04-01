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
        '<i class="fa fa-code fa-2x"></i> A front-end web developer at <a href="https://www.synaptikdigital.com/" target="_blank">Synaptik Digital</a>, a world-wide medical communications company, where I am responsible for the creation, development, and implementation of internal and external websites as well as web solutions for mobile devices with a specific focus on large scale JavaScript projects.',
        '<i class="fa fa-graduation-cap fa-2x"></i> I\'ve completed training to become a full-stack web developer through Rutgers Coding Bootcamp, a rigorous yet exciting program where I learned in-depth web development including Angular, APIs, NodeJS, MySQL, Express, and so much more.',
        '<i class="fa fa-trophy fa-2x" aria-hidden="true"></i> Winner of the <a class="link" href="http://njtechweekly.com/art/3006-rutgers-coding-bootcamp-students-shine-at-red-bank-based-v12-group-hackathon/" target="_blank">V12 Group Hackathon</a>. In seven hours my team and I built a web application that allowed new and existing businesses to analyze the demographics of a geographical region to best parlay their next business decision.',
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
          github: 'https://github.com/darrylmendonez/scientificpathways'
        },
        {
          animationDelay: '.4s',
          url: 'http://www.chrysalismedical.com/',
          imgPath: 'img/projects/chrysalis-medical.png',
          title: 'Chrysalis Medical',
          description: 'Created this website for Chrysalis Medical, a full-service agency that is dedicated to partnering with clients to provide high-quality scientific and strategic medical communications support',
          tools: [
            'Built with AngularJS',
            'Angular Animate is used for fade-in page transitions',
            'Animate.css is used to animate elements on each page load',
            'Wow.js is used to control the timing of each animation',
            'AngularJS Form Validation is used on the Contact Us form to prevent invalidated data from being submitted. It is also used to provide appropriate border colors for each form input - blue is active, green is valid input, and red is invalid input. The Submit button will also fire success or error messages that zoom in and out as they enter or exit. Submit button will also shake when invalid information is trying to be submitted.'
          ],
          github: 'https://github.com/darrylmendonez/chrysalis-medical'
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
          title: 'MaterializeCSS'
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
        {
          class: 'devicon-amazonwebservices-original',
          animationDelay: '1.6s',
          title: 'AWS'
        },
      ]
    }
  }, // /data
  methods: {}, // /methods
});
