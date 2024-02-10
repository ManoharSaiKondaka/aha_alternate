// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the select elements
    const durationSelect = document.getElementById("subscription-type-duration");
    const currencySelect = document.getElementById("subscription-type-currency");

    // Get all plan cards
    const planCards = document.querySelectorAll(".plan-card");

    // Function to show or hide plan cards based on selected options
    function filterPlans() {
        const selectedDuration = durationSelect.value;
        const selectedCurrency = currencySelect.value;

        planCards.forEach(card => {
            console.log(card.getAttribute('value'))
            
            
            // Check if the card matches the selected options
            const shouldShow = (selectedDuration === "any" || selectedDuration === card.getAttribute('value'))

            // Show or hide the card based on the result
            card.style.display = shouldShow ? "block" : "none";
        });
    }

    // Call the filterPlans function initially to show the default set of cards
    filterPlans();

    // Add event listeners to both select elements to trigger the filter function on change
    durationSelect.addEventListener("change", filterPlans);
    currencySelect.addEventListener("change", filterPlans);
});
