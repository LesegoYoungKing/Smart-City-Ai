// trafficFunctions.js
const { trafficData } = require('./data');

// Function to predict traffic congestion for a given road and hours ahead
function predictTrafficCongestion(roadId, hoursAhead) {
    const roadData = trafficData.find(data => data.roadId === roadId);
    if (roadData) {
        // Simple prediction model: increase congestion by 10% per hour ahead
        const predictedCongestion = roadData.vehicleCount * Math.pow(1.10, hoursAhead);
        return predictedCongestion.toFixed(2);
    }
    return 'No data available for the specified road ID.';
}

// Function to optimize route between two locations (dummy example)
function optimizeRouting(startLocation, endLocation) {
    // Dummy routing data for example purposes
    return {
        startLocation,
        endLocation,
        optimizedRoute: ['Main St', '2nd Ave', 'Pine Rd'],
        estimatedTime: '15 mins'
    };
}

module.exports = { predictTrafficCongestion, optimizeRouting };
