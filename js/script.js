document.addEventListener('DOMContentLoaded', function() {
  var styleSwitcherButton = document.getElementById('style-switcher');
  var themeStylesheet = document.getElementById('theme-stylesheet');

  styleSwitcherButton.addEventListener('click', function() {
    // Assuming you have an alternative stylesheet called "new-style.css"
    if (themeStylesheet.getAttribute('href') == "css/style.css") {
      themeStylesheet.href = "css/throwback-style.css"; // Change to the new style
      this.textContent = 'Modern'; // Change the button text to "Modern"
    } else {
      themeStylesheet.href = "css/style.css"; // Switch back to the original style
      this.textContent = 'Throwback'; // Change the button text to "Throwback"
    }
  });
});
