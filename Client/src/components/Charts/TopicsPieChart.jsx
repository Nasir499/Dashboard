import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF1919'];

const TopicsPieChart = ({ data }) => {
    const topicData = data.reduce((acc, curr) => {
        if (curr.topic) {
            if (!acc[curr.topic]) {
                acc[curr.topic] = { name: curr.topic, value: 0 };
            }
            acc[curr.topic].value++;
        }
        return acc;
    }, {});
    
    // Get top 6 topics for clarity
    const chartData = Object.values(topicData).sort((a,b) => b.value - a.value).slice(0, 6);

    return (
        <div className="chart-container">
            <h3>Top Topics Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopicsPieChart;