document.addEventListener('DOMContentLoaded', function () {
    const selectClassroomsForm = document.getElementById('selectClassroomsForm');
    const smallAvailabilitySpan = document.querySelector('#smallAvailability span');
    const middleAvailabilitySpan = document.querySelector('#middleAvailability span');
    const bigAvailabilitySpan = document.querySelector('#bigAvailability span');

    const availableClassrooms = {
        small: 10, // Example: 10 small classrooms available
        middle: 5, // Example: 5 middle-sized classrooms available
        big: 3,   // Example: 3 big classrooms available
    };

    updateAvailability(); // Update availability on page load

    function updateAvailability() {
        smallAvailabilitySpan.textContent = availableClassrooms.small;
        middleAvailabilitySpan.textContent = availableClassrooms.middle;
        bigAvailabilitySpan.textContent = availableClassrooms.big;
    }

    function selectClassrooms(event) {
        event.preventDefault(); // Prevent form submission

        const smallClassroomsInput = document.getElementById('smallClassrooms');
        const middleClassroomsInput = document.getElementById('middleClassrooms');
        const bigClassroomsInput = document.getElementById('bigClassrooms');

        const selectedSmall = parseInt(smallClassroomsInput.value, 10);
        const selectedMiddle = parseInt(middleClassroomsInput.value, 10);
        const selectedBig = parseInt(bigClassroomsInput.value, 10);

        // Check if there are enough available classrooms
        if (
            selectedSmall <= availableClassrooms.small &&
            selectedMiddle <= availableClassrooms.middle &&
            selectedBig <= availableClassrooms.big
        ) {
            // Update available classrooms
            availableClassrooms.small -= selectedSmall;
            availableClassrooms.middle -= selectedMiddle;
            availableClassrooms.big -= selectedBig;

            // Update the display of available classrooms
            updateAvailability();

            alert('Selected classrooms booked successfully.');
            window.location.href = 'booking-confirmation.html'; // Redirect to confirmation page
        } else {
            alert('Not enough available classrooms. Please select a different quantity.');
        }
    }

    // Attach the selectClassrooms function to the form submission
    selectClassroomsForm.addEventListener('submit', selectClassrooms);
});
