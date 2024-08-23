// server.js
const express = require('express');
const cors = require('cors');

// Import dummy data
const { energyData, trafficData, wasteData } = require('./data');

// Import functions for each core focus area
const { predictEnergyUsage, getBuildingEfficiency } = require('./energyFunctions');
const { predictTrafficCongestion, optimizeRouting } = require('./trafficFunctions');
const { predictWasteGeneration, optimizeWasteCollection } = require('./wasteFunctions.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Energy Management Endpoints
app.get('/energy/predict/:buildingId/:hoursAhead', (req, res) => {
    const { buildingId, hoursAhead } = req.params;
    const prediction = predictEnergyUsage(parseInt(buildingId), parseInt(hoursAhead));
    res.json({ buildingId, hoursAhead, prediction });
});

app.get('/energy/efficiency/:buildingId', (req, res) => {
    const { buildingId } = req.params;
    const efficiency = getBuildingEfficiency(parseInt(buildingId));
    res.json({ buildingId, efficiency });
});

// Transportation Optimization Endpoints
app.get('/traffic/predict/:roadId/:hoursAhead', (req, res) => {
    const { roadId, hoursAhead } = req.params;
    const prediction = predictTrafficCongestion(parseInt(roadId), parseInt(hoursAhead));
    res.json({ roadId, hoursAhead, prediction });
});

app.get('/traffic/route', (req, res) => {
    const { startLocation, endLocation } = req.query;
    const route = optimizeRouting(startLocation, endLocation);
    res.json(route);
});

// Waste Management Endpoints
app.get('/waste/predict/:binId/:daysAhead', (req, res) => {
    const { binId, daysAhead } = req.params;
    const prediction = predictWasteGeneration(parseInt(binId), parseInt(daysAhead));
    res.json({ binId, daysAhead, prediction });
});

app.get('/waste/optimize', (req, res) => {
    const optimizedRoute = optimizeWasteCollection();
    res.json(optimizedRoute);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
