function toggleContent(button) {
    const content = button.previousElementSibling; // Get the .boxContent directly before the button
    content.classList.toggle("hiddenContent"); // Toggle the hidden state
    button.textContent = content.classList.contains("hiddenContent") ? "Show More" : "Show Less";
  }
  