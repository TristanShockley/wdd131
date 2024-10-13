// Toggle menu visibility on small screens
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-links");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Handle window resize to ensure the menu shows on large screens
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
handleResize();  

// Create a viewer template for the modal
function viewerTemplate(pic, alt) {
  return `
    <div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
}

// Function to handle the image click event
function viewHandler(event) {
  if (event.target.tagName === 'IMG') {
    const clickedImage = event.target;
    const imgSrc = clickedImage.src.split("-")[0];  
    const fullImageSrc = imgSrc + "-full.jpeg"; 

    // Insert the modal template into the DOM
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, clickedImage.alt));

    // Add event listener to close the modal
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
  }
}

// Function to close the modal
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove(); 
  }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);

console.log("CoolPics JavaScript loaded");
