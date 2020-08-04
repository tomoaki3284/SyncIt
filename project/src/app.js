var navbar = document.querySelector('.navbar');
var headerView = document.querySelector('#header');
var projectsDiv = document.querySelector('#projects');
var projectNavigatorText = document.querySelector('.projectTextWrapper');
var aboutMeNavigatorText = document.querySelector('.aboutMeTextWrapper');
var expadableFlipCard = document.querySelector('.flip-card');

var animated = false;
var animatedAboutMe = false;

var projects = [
  {
    name: "Course Helper App",
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
    languages: "Java, SQL",
    githubLink: "https://github.com/tomoaki3284/WSUCourseHelperApp",
    liveLink: "https://play.google.com/store/apps/details?id=com.tomoaki.coursehelper",
  },

  {
    name: "Dinning App",
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
    languages: "Java, SQL",
    githubLink: "https://gitlab.com/brian.neveu/diningapp",
    liveLink: "https://gitlab.com/brian.neveu/diningapp",
  },

  {
    name: "AI FaceBrain Model",
    imagePaths: [
      "project/asset/ai_homepage.png",
      "project/asset/ai_detect.png",
    ],
    about: "AI FaceRecognition Full Stack Website, user can pick random picture's URL to display square around the faces.",
    keypoints: [
      "Used Node.js and Express.js to create the backend server, and crafted RESTful API, which communicates with the PostgreSQL-based server, to be easily and securely used by clients",
      "Utilized ClarifAI API to generate datasets, and calculated the dataset to display square around the face in a given picture by users",
    ],
    languages: "HTML/CSS/JavaScript, React.js, Node.js, Express.js, SQL",
    githubLink: "https://github.com/tomoaki3284/WebrainFaceRecognition",
    liveLink: "https://github.com/tomoaki3284/WebrainFaceRecognition",
  },
];

main();

function main() {
  loadObject();
  projectNavigatorText.onmouseover = function() {
    projectDivAnimation();
  };
  aboutMeNavigatorText.onmouseover = function() {
    aboutMeDivAnimation();
  };
  expadableFlipCard.onmouseover = function() {
    expadableFlipCard.classList.add("expandHeight");
  }
  expadableFlipCard.onmouseout = function() {
    expadableFlipCard.classList.remove("expandHeight");
  }
}

function loadObject() {
  let i = 0;
  for (i = 0; i < projects.length; i++) {
    var project = projects[i];
    createProjectCard(project, i);
  }
}

function createProjectCard(project, i) {
  var bigContainerDiv = document.createElement("div");
  bigContainerDiv.classList.add("row");
  bigContainerDiv.classList.add("w-75");
  bigContainerDiv.classList.add("align-items-center");
  bigContainerDiv.classList.add("justify-content-center");
  bigContainerDiv.classList.add("m-auto");
  addSlider(project, bigContainerDiv, i);
  addProjectDescription(project, bigContainerDiv);
}

function addProjectDescription (project, bigContainerDiv) {
  var containerDiv = document.createElement("div");
  containerDiv.classList.add("col-lg-6");
  containerDiv.classList.add("descriptionBox");
  containerDiv.classList.add("mb-5");

  var title = document.createElement("h3");
  title.classList.add("project_title");
  title.classList.add("mb-3");
  title.innerHTML = project.name;
  containerDiv.appendChild(title);

  var article = document.createElement("article");
  article.innerHTML = "<span><strong>About</strong></span><br>"+
      "<span>" + project.about + "</span><hr><span><strong>Key Points</strong></span><br>"+
      "<ul>";
  for (let i=0; i<project.keypoints.length; i++) {
    let li = "<li>" + project.keypoints[i] + "</li>";
    article.innerHTML+= li;
  }
  article.innerHTML += "</ul><hr>" +
      "<div class=\"row align-items-center\">" +
        "<div class=\"col-3 mr-auto used_lang\"><span><strong>Languages</strong></span><br>" + 
          "<span>" + project.languages + "</span>" + 
        "</div>" +
        "<div class=\"col-3 ml-auto projectIcons\">"+
          "<a href=\"" + project.liveLink + "\" target=\"_blank\"><i class=\"fas fa-play-circle mr-2\"></i></a>"+
          "<a href=\"" + project.githubLink + "\" target=\"_blank\"><i class=\"fas fa-code\"></i></a>"+
        "</div>" +
      "</div>" + 
      "</article>";

  containerDiv.appendChild(article);

  bigContainerDiv.appendChild(containerDiv);
}

function addSlider(project, bigContainerDiv, idx) {
  var divSlider = document.createElement("div");
  divSlider.classList.add("col-lg-3");
  //beacause picture is wide. Later, detect by size, not name
  if(project.name === "AI FaceBrain Model"){
    divSlider.classList.remove("col-lg-3");
    divSlider.classList.add("col-lg-5");
  }

  divSlider.classList.add("mr-5");
  divSlider.classList.add("projectSlider");
  divSlider.classList.add("mb-5");
  divSlider.classList.add("mt-5");

  var divSlide = document.createElement("div");
  divSlide.classList.add("carousel");
  divSlide.classList.add("slide");
  divSlide.setAttribute("data-ride", "carousel");
  divSlide.id = project.name;

  var divInnerSlide = document.createElement("div");
  divInnerSlide.classList.add("carousel-inner");

  let i = 0;
  for (i = 0; i<project.imagePaths.length; i++) {
    console.log("parsing: " + project.imagePaths[i]);
    let divCarouselItem = document.createElement("div");
    divCarouselItem.classList.add("carousel-item");
    if(i == 0){
      divCarouselItem.classList.add("active");
    }
    
    let img = document.createElement("img");
    img.classList.add("d-block");
    img.classList.add("w-100");
    img.src = project.imagePaths[i];

    divCarouselItem.appendChild(img);
    divInnerSlide.appendChild(divCarouselItem);
  }

  //add anchor to make it slidable
  var anchorPrev = document.createElement("a");
  anchorPrev.classList.add("carousel-control-prev");
  anchorPrev.href = "#" + project.name;
  anchorPrev.setAttribute("role", "button");
  anchorPrev.setAttribute("data-slide", "prev");
  var span1 = document.createElement("span");
  span1.classList.add("carousel-control-prev-icon");
  span1.setAttribute("aria-hidden", "true");
  var span2 = document.createElement("span");
  span2.classList.add("sr-only");
  span2.innerHTML = "Previous"
  anchorPrev.appendChild(span1);
  anchorPrev.appendChild(span2);

  var anchorNext = document.createElement("a");
  anchorNext.classList.add("carousel-control-next");
  anchorNext.href = "#" + project.name;
  anchorNext.setAttribute("role", "button");
  anchorNext.setAttribute("data-slide", "next");
  var span11 = document.createElement("span");
  span11.classList.add("carousel-control-next-icon");
  span11.setAttribute("aria-hidden", "true");
  var span22 = document.createElement("span");
  span22.classList.add("sr-only");
  span22.innerHTML = "Next"
  anchorNext.appendChild(span11);
  anchorNext.appendChild(span22);

  divSlide.appendChild(divInnerSlide);
  divSlide.appendChild(anchorPrev);
  divSlide.appendChild(anchorNext);

  divSlider.appendChild(divSlide);

  bigContainerDiv.appendChild(divSlider);

  projectsDiv.appendChild(bigContainerDiv);
  // if(projects.length != idx-1)
  //   projectsDiv.appendChild(document.createElement("hr"));
}

window.onscroll = function() {
  var top = window.scrollY;
  fadeNavbar(top);
  zoomInBackground(top);
  fadeProjectNavigator(top);
  animateAboutMe(top);
}

function animateAboutMe(top) {
  let beginning = aboutMeNavigatorText.getBoundingClientRect().top;
  console.log("Top: " + top);
  console.log("Beg: " + beginning);
  if(beginning <= 612){
    if(!animatedAboutMe){
      animatedAboutMe = true;
      aboutMeDivAnimation();
    }
  } else if (beginning >= 700) {
    animatedAboutMe = false;
  }
}

function fadeProjectNavigator (top) {
  // let height = rect.top;
  let beginning = projectNavigatorText.getBoundingClientRect().top;
  if(beginning <= 800){
    if(!animated){
      animated = true;
      projectDivAnimation();
    }
  } else if (beginning > 600) {
    animated = false;
  }
}

function projectDivAnimation() {
  anime({
    targets: 'div.projectText',
    translateY: [
      {value: -200, duration: 500},
      {value: 0, duration: 800},
    ],
    rotate: anime.stagger([-45, 45]),
    delay: function(el,i,l){return i*100}
  });
}

function aboutMeDivAnimation() {
  anime({
    targets: 'div.aboutMeText',
    translateX: [
      {value: -200, duration: 500},
      {value: 0, duration: 1000},
    ],
    delay: function(el,i,l){return i*100}
  });
}

function fadeNavbar(top) {
  // add fade effect on navbar. Make trasparent when 100 px down
  if (top > 50) {
    navbar.classList.add('navbar-transparent');
    navbar.classList.remove('navbg-color');
  } else {
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('navbg-color');
  }
}

// now it's working like shifting text
function zoomInBackground(top) {
  // add zoom-in effect when scroll down
  let zoomIn = Number(100) + Number(top/5);
  let widthString = "width:" + zoomIn +  "%";
  let heightString = "height:" + zoomIn + "%";
  if (top > 0) {
    headerView.setAttribute("style",widthString);
    // headerView.setAttribute("style",heightString);
  } else {
    headerView.setAttribute("style","width:100%");
    headerView.setAttribute("style","height:100%");
  }
}

