import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const LikelihoodRadarChart = ({ data }) => {
    const chartData = data.filter(d => d.likelihood && d.relevance).slice(0, 7);

    return (
        <div className="chart-container">
            <h3>Likelihood vs. Relevance</h3>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="topic" />
                    <PolarRadiusAxis />
                    <Legend />
                    <Radar name="Likelihood" dataKey="likelihood" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Relevance" dataKey="relevance" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LikelihoodRadarChart;