const swtich = document.getElementById("input");
const sun = document.getElementById("sun");

function darkMode(isDark) {
  document.documentElement.setAttribute("dark-theme", "dark");
  // document.body.style.backgroundColor = "#000000"
  // document.body.childNodes[1].style.backgroundColor =" #ffffff"
  document.body.childNodes[1].childNodes[3].childNodes[1].style.visibility =
    "visible";
  document.body.childNodes[1].childNodes[3].childNodes[5].style.visibility =
    "hidden";
  console.log(document.body.childNodes[1].childNodes[3].childNodes[5]);
  isDark = swtich.checked;
  console.log(isDark);
  console.log(swtich.checked);
}

function isLight(isLight) {
  console.log(document.documentElement.removeAttribute("dark-theme"));
  // document.body.style.backgroundColor = "#ffff"
  // document.body.childNodes[1].style.backgroundColor =" #bb86fc"
  document.body.childNodes[1].childNodes[3].childNodes[5].style.visibility =
    "visible";
  document.body.childNodes[1].childNodes[3].childNodes[1].style.visibility =
    "hidden";
}

function Swtich(e) {
  if (swtich.checked) {
    localStorage.setItem("theme", "dark");
    darkMode(true);
  } else if (!swtich.checked) {
    localStorage.setItem("theme", "light");
    isLight(true);
  }
}

swtich.addEventListener("change", Swtich);
