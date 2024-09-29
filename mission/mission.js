// Select the theme selector dropdown element
const themeSelector = document.querySelector('#theme-selector');

// Define the function to change the theme
function changeTheme() {
  // Get the selected value
  const selectedTheme = themeSelector.value;

  // Get the body element
  const body = document.body;

  // Change the theme based on the selected value
  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    // Change the logo to the white version
    document.querySelector('#logo').src = 'byui-logo_white.png';
  } else {
    body.classList.remove('dark');
    // Change the logo to the blue version
    document.querySelector('#logo').src = 'byui-logo_blue.webp';
  }
}

// Add an event listener to the theme selector to listen for changes
themeSelector.addEventListener('change', changeTheme);
