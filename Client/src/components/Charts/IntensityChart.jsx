import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IntensityChart = ({ data }) => {
    return (
        <div className="chart-container">
            <h3>Intensity by Sector</h3>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data.slice(0, 15)}> {/* Slice for readability */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sector" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="intensity" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default IntensityChart;