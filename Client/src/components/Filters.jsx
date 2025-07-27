import React, { useState, useEffect } from 'react';
import { fetchFieldOptions } from '../services/api';

const filterFields = ['end_year', 'topic', 'sector', 'region', 'pestle', 'source', 'swot', 'country', 'city'];

const Filters = ({ onFilterChange }) => {
    const [filterOptions, setFilterOptions] = useState({});
    const [currentFilters, setCurrentFilters] = useState({});

    useEffect(() => {
        const loadOptions = async () => {
            const options = {};
            for (const field of filterFields) {
                try {
                    const response = await fetchFieldOptions(field);
                    options[field] = response.data;
                } catch (error) {
                    console.error(`Error fetching options for ${field}:`, error);
                    options[field] = [];
                }
            }
            setFilterOptions(options);
        };
        loadOptions();
    }, []);

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...currentFilters, [name]: value };
        setCurrentFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="filters-container">
            {filterFields.map(field => (
                <div key={field} className="filter-item">
                    <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                    <select name={field} id={field} onChange={handleSelectChange}>
                        <option value="">All</option>
                        {filterOptions[field]?.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};

export default Filters;