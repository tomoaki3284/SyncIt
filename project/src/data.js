var raw_projects = [
  {
    name: "Course Helper  |  iOS & Android App",
    imagePaths: [
      "project/asset/sc_coursehelper_coursegrid.png",
      "project/asset/sc_coursehelper_courselist.png",
      "project/asset/sc_coursehelper_coursedetail.png",
      "project/asset/sc_coursehelper_schedulefocus.png",
      "project/asset/sc_coursehelper_features.png",
      "project/asset/sc_coursehelper_scheduler.png",
      "project/asset/sc_coursehelper_consideration.png",
      "project/asset/sc_coursehelper_options.png",
      "project/asset/sc_coursehelper_visualizer.png",
      "project/asset/sc_coursehelper_visualizer2.png",
      "project/asset/sc_coursehelper_schedules.png",
    ],
    about: "This project is for students at Westfield State University selecting the courses for future semesters with less work by utilizing various features, such as schedule visualization, filter course by various categories, etc.",
    keypoints: [
      "Developed webscraper in Java & Python to scrape +10k of class information in <20 seconds from the university website",
      "Leveraged AWS Lambda to host web scraper program, Evenbridge to schedule the invocation of the scraper program, and CloudWatch to monitor the process, to automate class data upload to S3",
      "Used Firebase Realtime Database to manage user accounts and professor ratings",
      "Implemented features including schedule visualization, professor rating, data filtering and weighting, and  auto-scheduler which reduced the scheduling workload by 90%",
    ],
    languages: "Java, Python, AWS, Firebase",
    githubLink: "https://github.com/tomoaki3284/flutter_wsu_course_helper",
    liveLink: "https://github.com/tomoaki3284/flutter_wsu_course_helper",
  },

  {
    name: "Course Helper  |  Android App",
    imagePaths: [
      "project/asset/courseHelper_homepage.png",
      "project/asset/courseHelper_viewer.png",
      "project/asset/courseHelper_schedule.png",
      "project/asset/courseHelper_automaViewer.png",
      "project/asset/courseHelper_automaBottomSheet.png",
      "project/asset/courseHelper_comboOption.png",
      "project/asset/courseHelper_automaSchedule.png",
      "project/asset/courseHelper_rateMyProfessor.png",
    ],
    about: "This project is for students at Westfield State University selecting the courses for future semesters with less work by utilizing various features, such as schedule visualization, filter course by various categories, etc.",
    keypoints: [
      "Using <strong>MySQL</strong> and <strong>AWS RDS</strong> to create the backend of a university class scheduler Android app build in Java",
      "Utilized <strong>AWS S3</strong> to store massive courses of web scraped information from the university’s website",
      "Implemented Auto-Scheduler that generates the combinations of perfect schedule from users’ input, filters out overlapped class-time, and binds the correct lab classes",
    ],
    languages: "Java, MySQL, AWS",
    githubLink: "https://github.com/tomoaki3284/WSUCourseHelperApp",
    liveLink: "https://play.google.com/store/apps/details?id=com.tomoaki.coursehelper",
  },

  {
    name: "Dinning App  |  Android App",
    imagePaths: [
      "project/asset/dinningApp_events.png",
      "project/asset/dinningApp_listOfHall.png",
      "project/asset/dinningApp_menu.png",
      "project/asset/dinningApp_locationInfo.png",
    ],
    about: "This projects is for students/visitors at Westfield State University viewing the current/future dinning menus without having them open in Web browser(not compatible screen sizes). This helps the user to easily view/order menus in different dinning places.",
    keypoints: [
      "Developed an app build in Java, which displays menus, locations, special events, etc correspond to each of the university dining places",
      "Utilized <strong>AWS Lambda</strong> to automate web scraping and JSON file upload to <strong>AWS S3</strong>",
      "Implemented email feedback and online food ordering features by using <strong>Firebase</strong> realtime database",
      "Developed app through Scrum Agile methodology/Git source control to collaborate with team’s developers"
    ],
    languages: "Java, MySQL, AWS",
    githubLink: "https://gitlab.com/brian.neveu/diningapp",
    liveLink: "https://gitlab.com/brian.neveu/diningapp",
  },

  {
    name: "AI FaceBrain Model  |  Fullstack Web",
    imagePaths: [
      "project/asset/ai_homepage.png",
      "project/asset/ai_detect.png",
    ],
    about: "AI FaceRecognition Full Stack Website, user can pick random picture's URL to display square around the faces.",
    keypoints: [
      "Used Node.js and Express.js to create the backend server, and crafted RESTful API, which communicates with the PostgreSQL-based server, to be easily and securely used by clients",
      "Utilized ClarifAI API to generate datasets, and calculated the dataset to display square around the face in a given picture by users",
    ],
    languages: "HTML/CSS, JavaScript, React.js, Node.js, Express.js, PostgreSQL, ClarifAI",
    githubLink: "https://github.com/tomoaki3284/WebrainFaceRecognition",
    liveLink: "https://github.com/tomoaki3284/WebrainFaceRecognition",
  },
];