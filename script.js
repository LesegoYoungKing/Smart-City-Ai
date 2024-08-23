document.addEventListener('DOMContentLoaded', function () {
    // Energy Prediction Event Listener
    document.getElementById('energy-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const buildingId = document.getElementById('buildingId').value;
        const hoursAhead = document.getElementById('hoursAhead').value;

        try {
            const response = await fetch(`http://localhost:3000/energy/predict/${buildingId}/${hoursAhead}`);
            const data = await response.json();
            document.getElementById('energy-result').innerHTML = `
                <p>Predicted Energy Usage for Building ${buildingId} in ${hoursAhead} hours: ${data.prediction}</p>
            `;
        } catch (error) {
            console.error('Error fetching energy prediction:', error);
        }
    });

    // Traffic Prediction Event Listener
    document.getElementById('traffic-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const roadId = document.getElementById('roadId').value;
        const hoursAhead = document.getElementById('trafficHoursAhead').value;

        try {
            const response = await fetch(`http://localhost:3000/traffic/predict/${roadId}/${hoursAhead}`);
            const data = await response.json();
            document.getElementById('traffic-result').innerHTML = `
                <p>Predicted Traffic Congestion for Road ${roadId} in ${hoursAhead} hours: ${data.prediction}</p>
            `;
        } catch (error) {
            console.error('Error fetching traffic prediction:', error);
        }
    });

    // Waste Optimization Event Listener
    document.getElementById('optimize-waste').addEventListener('click', async function() {
        try {
            const response = await fetch('http://localhost:3000/waste/optimize');
            const data = await response.json();
            const wasteDetails = data.map(bin => `<li>Bin ID: ${bin.binId}, Waste Amount: ${bin.wasteAmount}</li>`).join('');
            document.getElementById('waste-result').innerHTML = `
                <ul>${wasteDetails}</ul>
            `;
        } catch (error) {
            console.error('Error fetching waste optimization:', error);
        }
    });

    // Quiz Form Event Listener for AI-Tailored Solutions
    document.getElementById('quiz-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const userType = document.getElementById('userType').value;
        const concern = document.getElementById('concern').value;
        const location = document.getElementById('location').value;

        try {
            const response = await fetch('http://localhost:3000/ai-solution', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userType, concern, location })
            });

            const data = await response.json();
            document.getElementById('quiz-result').innerHTML = `
                <p>Thank you for your input! Based on your profile, our AI recommends the following:</p>
            `;
            document.getElementById('ai-solution').innerHTML = `
                <p>${data.solution}</p>
            `;
            
            // Display the AI solutions section
            document.getElementById('ai-solutions-section').style.display = 'block';
        } catch (error) {
            console.error('Error fetching AI solution:', error);
        }
    });
});
