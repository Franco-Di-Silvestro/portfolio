const hamburgerMenuButton = document.querySelector("#hamburgerMenuButton")
const menu = document.querySelector("#menu")
const hamburgerMenuLines = document.querySelectorAll('.hamburgerMenuLine')

hamburgerMenuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden")
  hamburgerMenuLines.forEach((el) => el.classList.toggle('bg-black'))
  hamburgerMenuLines.forEach((el) => el.classList.toggle('bg-white'))
})