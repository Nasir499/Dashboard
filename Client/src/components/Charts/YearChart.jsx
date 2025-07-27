import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const YearChart = ({ data }) => {
    // Process data to group by start_year
    const yearData = data.reduce((acc, curr) => {
        if (curr.start_year) {
            if (!acc[curr.start_year]) {
                acc[curr.start_year] = { year: curr.start_year, count: 0 };
            }
            acc[curr.start_year].count++;
        }
        return acc;
    }, {});

    const chartData = Object.values(yearData).sort((a,b) => a.year - b.year);

    return (
        <div className="chart-container">
            <h3>Insights by Start Year</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="count" stroke="#82ca9d" name="Number of Insights" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default YearChart;