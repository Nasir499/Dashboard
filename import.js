import mongoose from 'mongoose';
import fs from 'fs';
import dotenv from 'dotenv';

// Define the schema here, making sure it matches the one in server/models/Insight.js
const insightSchema = new mongoose.Schema({
    end_year: { type: String, default: '' },
    intensity: { type: Number, index: true },
    sector: { type: String, index: true },
    topic: { type: String, index: true },
    insight: String,
    url: String,
    region: { type: String, index: true },
    start_year: { type: String, default: '' },
    impact: { type: String, default: '' },
    added: String,
    published: String,
    country: { type: String, index: true },
    relevance: { type: Number, index: true },
    pestle: { type: String, index: true },
    source: { type: String, index: true },
    title: String,
    likelihood: { type: Number, index: true },
    swot: { type: String, index: true },
    city: { type: String, index: true }
});

const Insight = mongoose.model('Insight', insightSchema);

dotenv.config();

const importData = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/DashboardDB");
        console.log('MongoDB connected for import');

        // Clear existing data
        await Insight.deleteMany({});
        console.log('Existing data cleared');

        // Read JSON file
        const data = JSON.parse(fs.readFileSync('jsondata.json', 'utf-8'));
        console.log(`${data.length} records read from JSON file`);

        // Insert data
        await Insight.insertMany(data);
        console.log('Data imported successfully!');

    } catch (error) {
        console.error('Error during data import:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    }
};

importData();