// script.js

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
