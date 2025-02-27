import React, { useState } from 'react';
import EnergyTable from '../components/EnergyTable';
import EnergyChart from '../components/EnergyChart';
import { addEnergyData } from '../services/energyService';

const Dashboard = () => {
    const [deviceName, setDeviceName] = useState('');
    const [powerUsage, setPowerUsage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (deviceName && powerUsage) {
            await addEnergyData(deviceName, parseFloat(powerUsage));
            window.location.reload();
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Smart Energy Monitoring System</h1>

            {/* Add Energy Data */}
            <form className="mb-4" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Device Name"
                            value={deviceName}
                            onChange={(e) => setDeviceName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Power Usage (kWh)"
                            value={powerUsage}
                            onChange={(e) => setPowerUsage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary w-100">Add Data</button>
                    </div>
                </div>
            </form>

            {/* Components */}
            <EnergyChart />
            <EnergyTable />
        </div>
    );
};

export default Dashboard;
