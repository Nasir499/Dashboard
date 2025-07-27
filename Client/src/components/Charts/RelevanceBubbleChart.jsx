import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RelevanceBubbleChart = ({ data }) => {
    const chartData = data.filter(d => d.intensity && d.relevance && d.likelihood);

    return (
        <div className="chart-container">
            <h3>Relevance vs. Intensity (Bubble Size by Likelihood)</h3>
            <ResponsiveContainer width="100%" height={400}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="intensity" name="Intensity" />
                    <YAxis type="number" dataKey="relevance" name="Relevance" />
                    <ZAxis type="number" dataKey="likelihood" range={[10, 500]} name="Likelihood" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="Insights" data={chartData} fill="#8884d8" shape="circle" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RelevanceBubbleChart;