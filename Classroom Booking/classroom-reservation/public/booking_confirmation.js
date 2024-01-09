document.addEventListener('DOMContentLoaded', function () {
    const confirmationMessageElement = document.getElementById('confirmationMessage');
    const bookedClassroomsListElement = document.getElementById('bookedClassroomsList');
    const selectClassroomsListElement = document.getElementById('selectClassroomsList');

    // Retrieve booked classrooms from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookedClassroomIds = urlParams.getAll('classroom');

    // This is a simplified example; in a real-world scenario, you'd fetch classroom data from the server or database
    const classrooms = [
        { id: 1, name: 'Room A' },
        { id: 2, name: 'Room B' },
        { id: 3, name: 'Room C' },
    ];

    const bookedClassrooms = classrooms.filter(classroom => bookedClassroomIds.includes(classroom.id.toString()));

    // Display confirmation message
    confirmationMessageElement.textContent = `Booking successful for ${bookedClassrooms.length} classroom(s).`;

    // Display details of booked classrooms
    bookedClassrooms.forEach(classroom => {
        const listItem = document.createElement('li');
        listItem.textContent = classroom.name;
        bookedClassroomsListElement.appendChild(listItem);
    });

    // Display list of available classrooms for additional selection
    const availableClassrooms = classrooms.filter(classroom => !bookedClassroomIds.includes(classroom.id.toString()));

    availableClassrooms.forEach(classroom => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox" id="selectClassroom${classroom.id}" name="selectClassrooms" value="${classroom.id}">
                              <label for="selectClassroom${classroom.id}">${classroom.name}</label>`;
        selectClassroomsListElement.appendChild(listItem);
    });
});

function confirmAdditionalBooking() {
    const selectedClassrooms = document.querySelectorAll('input[name="selectClassrooms"]:checked');

    if (selectedClassrooms.length === 0) {
        alert('Please select at least one additional classroom.');
    } else {
        const selectedClassroomIds = Array.from(selectedClassrooms).map(checkbox => checkbox.value);
        const queryParams = new URLSearchParams();
        selectedClassroomIds.forEach(id => queryParams.append('classroom', id));

        // Redirect to booking confirmation page with the additional booked classroom information
        window.location.href = `booking_confirmation.html?${queryParams.toString()}`;
    }
}
