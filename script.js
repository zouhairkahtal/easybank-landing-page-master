const Open = document.getElementById('open');
const Close = document.getElementById('close');
const nav = document.getElementById('nav');

Open.addEventListener("click", () => {
    // Show the navigation and hide the open button
    nav.style.display = "flex";
    Open.style.display = "none";
    Close.style.display = "block";
  });
Close.addEventListener("click", () => {
    // Hide the navigation and show the open button
    nav.style.display = "none";
    Close.style.display = "none";
    Open.style.display = "block";
  });