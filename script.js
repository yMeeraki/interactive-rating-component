let rateSelect = document.getElementsByClassName("rate-select");

function selectedRating(item) {

    for (let i = 0; i < rateSelect.length; i++) {
        rateSelect[i].style.backgroundColor = ''; // Reset the background color
    }

    item.style.backgroundColor = 'hsl(25, 97%, 53%)';
}

// Attach click event listener to each rate item
for (let i = 0; i < rateSelect.length; i++) {
    rateSelect[i].addEventListener('click', function() {
        selectedRating(this); // Pass the clicked element to the function
    });
}
