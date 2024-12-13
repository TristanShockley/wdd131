const mockData = [
    { overall: 8, communication: 9, satisfaction: "Yes", recommend: "Yes" },
    { overall: 7, communication: 8, satisfaction: "No", recommend: "No" },
    { overall: 10, communication: 10, satisfaction: "Yes", recommend: "Yes" },
];

const calculateAverage = (data, key) =>
    (data.reduce((sum, item) => sum + item[key], 0) / data.length).toFixed(1);

const calculateRate = (data, key, value) =>
    ((data.filter((item) => item[key] === value).length / data.length) * 100).toFixed(1) + "%";

const updateSummary = () => {
    document.getElementById("overall-average").textContent = calculateAverage(mockData, "overall");
    document.getElementById("communication-average").textContent = calculateAverage(mockData, "communication");
    document.getElementById("satisfaction-rate").textContent = calculateRate(mockData, "satisfaction", "Yes");
    document.getElementById("recommendation-rate").textContent = calculateRate(mockData, "recommend", "Yes");
};

// Initial calculation
updateSummary();

// Handle form submission
document.getElementById("feedback-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form reload

    // Get form values
    const overall = parseInt(document.getElementById("overall").value, 10);
    const communication = parseInt(document.getElementById("communication").value, 10);
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const recommend = document.querySelector('input[name="recommend"]:checked').value;

    // Add new data to mockData
    mockData.push({ overall, communication, satisfaction, recommend });

    // Recalculate and update the summary
    updateSummary();

    // Show the thank-you message
    document.getElementById("thank-you-message").classList.remove("hidden");

    // Optionally reset the form
    event.target.reset();
});
