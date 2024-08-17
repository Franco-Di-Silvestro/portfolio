// MENU

const hamburgerMenuButton = document.querySelector("#hamburgerMenuButton")
const menu = document.querySelector("#menu")
const hamburgerMenuLines = document.querySelectorAll('.hamburgerMenuLine')

hamburgerMenuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburgerMenuLines.forEach((el) => el.classList.toggle('bg-black'))
  hamburgerMenuLines.forEach((el) => el.classList.toggle('bg-white'))
})

// THEME

const body = document.querySelector("#body")
const themeButton = document.querySelector('#themeButton')


themeButton.addEventListener("click", () => {
  body.classList.toggle("dark")
  if (themeButton.src.includes('moon')) {
    themeButton.setAttribute('src', './img/sun.png')
  } else {
    themeButton.setAttribute('src', './img/moon.png')
  }
})
// LINKS

const homeButtons = document.querySelectorAll(".homeButton")
const aboutMeButtons = document.querySelectorAll('.aboutMeButton')
const projectsButtons = document.querySelectorAll('.projectsButton')
const home = document.querySelector("#home")
const aboutMe = document.querySelector("#aboutMe")
const projects = document.querySelector("#projects")

homeButtons.forEach((b) => {
  b.addEventListener('click', () =>
    window.scrollTo({
      top: home.offsetTop,
      behavior: 'smooth',
    })
  )
})

aboutMeButtons.forEach((b) => {
  b.addEventListener('click', () =>
    window.scrollTo({
      top: aboutMe.offsetTop,
      behavior: 'smooth',
    })
  )
})

projectsButtons.forEach((b) => {
  b.addEventListener('click', () =>
    window.scrollTo({
      top: projects.offsetTop,
      behavior: 'smooth',
    })
  )
})