// Track the current participant count
let participantCount = 1;

// Function to generate new participant HTML section
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <div class="item">
                <label for="name${count}">Participant ${count} Name:</label>
                <input type="text" id="name${count}" name="name${count}" required>
            </div>
            <div class="item">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" required />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" required />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date<span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" required />
            </div>
        </section>
    `;
}

// Function to add a new participant section
function addParticipant() {
    participantCount++;
    const participantsDiv = document.getElementById('participants');
    participantsDiv.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
}

// Event listener for "Add Participant" button
document.getElementById('add-participant').addEventListener('click', addParticipant);

// Function to calculate total fees
function totalFees() {
    const feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((sum, feeInput) => sum + parseFloat(feeInput.value || 0), 0);
}

// Function to generate success message template
function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees} in Fees.`;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const total = totalFees();
    const name = document.getElementById("hname").value; // Get the name from household field
    const participants = participantCount;

    // Hide the form and show the success message
    document.getElementById("camp-form").style.display = "none";
    document.getElementById("summary").innerHTML = successTemplate({ name, participants, totalFees: total });
    document.getElementById("summary").style.display = "block";
}

// Event listener for form submission
document.getElementById('camp-form').addEventListener('submit', submitForm);
