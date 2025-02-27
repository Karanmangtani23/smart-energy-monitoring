import React, { useEffect, useState } from 'react';
import { getAllEnergyData } from '../services/energyService';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const EnergyChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchEnergyData();
    }, []);

    const fetchEnergyData = async () => {
        const data = await getAllEnergyData();
        const labels = data.map(entry => new Date(entry.timestamp).toLocaleTimeString());
        const values = data.map(entry => entry.powerUsage);

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Energy Consumption (kWh)",
                    data: values,
                    borderColor: "blue",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    fill: true,
                }
            ]
        });
    };

    return (
        <div className="container mt-4">
            <h2>Energy Consumption Trend</h2>
            {chartData && <Line data={chartData} />}
        </div>
    );
};

export default EnergyChart;
