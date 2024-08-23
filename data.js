// data.js
const energyData = [
    { buildingId: 1, energyUsage: 350, timestamp: new Date('2024-08-23T08:00:00Z') },
    { buildingId: 2, energyUsage: 450, timestamp: new Date('2024-08-23T08:00:00Z') },
    // Additional dummy data
];

const trafficData = [
    { roadId: 101, vehicleCount: 120, timestamp: new Date('2024-08-23T08:00:00Z') },
    { roadId: 102, vehicleCount: 200, timestamp: new Date('2024-08-23T08:00:00Z') },
    // Additional dummy data
];

const wasteData = [
    { binId: 1, wasteAmount: 50, timestamp: new Date('2024-08-23T08:00:00Z') },
    { binId: 2, wasteAmount: 60, timestamp: new Date('2024-08-23T08:00:00Z') },
    // Additional dummy data
];

module.exports = { energyData, trafficData, wasteData };
