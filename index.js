/* hamburguer */

const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', ()=>{
const nav = document.querySelector('.nav-header-content')
nav.classList.toggle('open')
nav.classList.toggle('closed')

})



/* animation hidden */


let allElement = document.querySelectorAll(".hidden");
let myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

allElement.forEach((element) => myObserver.observe(element));

/* questions */

const allQuesstions = document.querySelectorAll(".section-questions-items");

allQuesstions.forEach((e) => {
  e.addEventListener("click", () => {
    allQuesstions.forEach((q) => {
      q.classList.remove("open");
    });
    showQuestion(e);
  });
});

function showQuestion(question) {
  return question.classList.toggle("open");
}

/* started */

const formStarted = document.querySelector(".section-started-form");

formStarted.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const allOption = document.querySelectorAll(".section-started-option");

  allOption.forEach((e) => {
    e.classList.toggle("enable");
    e.classList.toggle("disable");
  });
});

/* ----------------------carrousel */

let countCommit = 1;
let countProject = 1;

document.getElementById("commits1").checked = true;
document.getElementById("projectsitem1").checked = true;

function nextSlideCommit() {
  countCommit++;
  if (countCommit > 3) {
    countCommit = 1;
  }
  document.getElementById(`commits${countCommit}`).checked = true;
}
function nextSlideProject() {
  countProject++;
  if (countProject > 5) {
    countProject = 1;
  }
  document.getElementById(`projectsitem${countProject}`).checked = true;
}

setInterval(() => {
  nextSlideCommit();
}, 5 * 1000);

setInterval(() => {
  nextSlideProject();
}, 3 * 1000);
