document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Hide the feedback form
    document.getElementById("feedback-form").classList.add("hidden");
  
    // Show the thank-you message
    document.getElementById("thank-you-message").classList.remove("hidden");
  });
  