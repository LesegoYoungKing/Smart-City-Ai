const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Adjust if your HTML/JS/CSS files are in a 'public' folder

app.post('/ai-solution', (req, res) => {
    const { userType, concern, location } = req.body;
    let solution = '';

    if (userType === 'resident' && concern === 'energy') {
        solution = `Optimize energy consumption in ${location} with smart meters.`;
    } else if (userType === 'business' && concern === 'traffic') {
        solution = `Use real-time traffic data for logistics in ${location}.`;
    } else if (userType === 'government' && concern === 'waste') {
        solution = `AI-driven waste collection schedules in ${location}.`;
    } else {
        solution = 'No suitable solution found.';
    }

    res.json({ solution });
});

app.get('/energy/predict/:buildingId/:hoursAhead', (req, res) => {
    const { buildingId, hoursAhead } = req.params;
    res.json({ prediction: `Estimated usage for Building ${buildingId} in ${hoursAhead} hours.` });
});

app.get('/traffic/predict/:roadId/:hoursAhead', (req, res) => {
    const { roadId, hoursAhead } = req.params;
    res.json({ prediction: `Estimated congestion for Road ${roadId} in ${hoursAhead} hours.` });
});

app.get('/waste/optimize', (req, res) => {
    res.json([
        { binId: 1, wasteAmount: '50%' },
        { binId: 2, wasteAmount: '70%' },
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
