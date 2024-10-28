const Open = document.getElementById('open');
const Close = document.getElementById('close');
const nav = document.getElementById('nav');
const body = document.getElementById('body')

Open.addEventListener("click", () => {
    // Show the navigation and hide the open button
    nav.style.display = "flex";
    Open.style.display = "none";
    Close.style.display = "block";
    body.classList.add('body')
  });
Close.addEventListener("click", () => {
    // Hide the navigation and show the open button
    nav.style.display = "none";
    Close.style.display = "none";
    Open.style.display = "block";
    body.classList.remove('body')
  });