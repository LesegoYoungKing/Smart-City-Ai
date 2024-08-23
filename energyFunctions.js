// energyFunctions.js
const { energyData } = require('./data');

// Function to predict energy usage for a given building and hours ahead
function predictEnergyUsage(buildingId, hoursAhead) {
    const buildingData = energyData.find(data => data.buildingId === buildingId);
    if (buildingData) {
        // Simple prediction model: increase usage by 5% per hour ahead
        const predictedUsage = buildingData.energyUsage * Math.pow(1.05, hoursAhead);
        return predictedUsage.toFixed(2);
    }
    return 'No data available for the specified building ID.';
}

// Function to assess building efficiency based on past data
function getBuildingEfficiency(buildingId) {
    const buildingData = energyData.find(data => data.buildingId === buildingId);
    if (buildingData) {
        // Simple efficiency model: usage < 400 considered efficient
        return buildingData.energyUsage < 400 ? 'Efficient' : 'Inefficient';
    }
    return 'No data available for the specified building ID.';
}

module.exports = { predictEnergyUsage, getBuildingEfficiency };
