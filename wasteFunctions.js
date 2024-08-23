// wasteFunctions.js
const { wasteData } = require('./data');

// Function to predict waste generation for a given bin and days ahead
function predictWasteGeneration(binId, daysAhead) {
    const binData = wasteData.find(data => data.binId === binId);
    if (binData) {
        // Simple prediction model: increase waste by 7% per day ahead
        const predictedWaste = binData.wasteAmount * Math.pow(1.07, daysAhead);
        return predictedWaste.toFixed(2);
    }
    return 'No data available for the specified bin ID.';
}

// Function to optimize waste collection (dummy example)
function optimizeWasteCollection() {
    // Dummy optimization data for example purposes
    return wasteData.map(bin => ({
        binId: bin.binId,
        wasteAmount: bin.wasteAmount + 10, // Dummy data to simulate optimization
    }));
}

module.exports = { predictWasteGeneration, optimizeWasteCollection };
