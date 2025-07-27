import React, { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../services/api';
import Filters from './Filters';
import IntensityChart from './Charts/IntensityChart';
import LikelihoodRadarChart from './Charts/LikelihoodRadarChart';
import RelevanceBubbleChart from './Charts/RelevanceBubbleChart';
import YearChart from './Charts/YearChart';
import TopicsPieChart from './Charts/TopicsPieChart';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({});

    const loadData = useCallback(async () => {
        try {
            const response = await fetchData(filters);
            setData(response.data);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }, [filters]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="dashboard-container">
            <Filters onFilterChange={handleFilterChange} />
            <div className="charts-grid">
                <IntensityChart data={data} />
                <LikelihoodRadarChart data={data} />
                <RelevanceBubbleChart data={data} />
                <YearChart data={data} />
                <TopicsPieChart data={data} />
                {/* Add more charts as needed */}
            </div>
        </div>
    );
};

export default Dashboard;