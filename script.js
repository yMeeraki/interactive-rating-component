let selectedRating = null;

function selectRating(element) {
  // Remove background from all previously selected elements
  let rateSelect = document.getElementsByClassName("rate-select");
  for (let i = 0; i < rateSelect.length; i++) {
    rateSelect[i].style.backgroundColor = ''; // Reset background color
  }

  // Set background for the currently selected element
  element.style.backgroundColor = 'hsl(25, 97%, 53%)';
  
  // Store the selected rating value
  selectedRating = element.getAttribute("value");
}

function submitRating() {
  if (selectedRating) {
    // Show the "Thank you" state
    document.getElementById("rating-state").style.display = 'none';
    document.getElementById("thank-you-state").style.display = 'block';

    // Display the selected rating in the thank-you message
    document.getElementById("selected-rating").textContent = selectedRating;
  } else {
    alert("Please select a rating before submitting!");
  }
}
