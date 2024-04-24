import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Calculate.css';

const APPLIANCE_OPTIONS = {
  'TV': {
    wattage: 100,
    runtime: 3,
  },
  'Lighting': {
    wattage: 60,
    runtime: 8,
  },
  'Refrigerator': {
    wattage: 200,
    runtime: 24,
  },
  'Computer': {
    wattage: 250,
    runtime: 8,
  },
  'Washing machine': {
    wattage: 1200,
    runtime: 1,
  },
  'Microwave': {
    wattage: 800,
    runtime: 0.2,
  },
  'Phone charger': {
    wattage: 5,
    runtime: 2,
  },
  'Clothes dryer': {
    wattage: 3000,
    runtime: 1,
  },
  'Gaming console': {
    wattage: 200,
    runtime: 4,
  },
  'Coffee maker': {
    wattage: 1000,
    runtime: 0.1,
  },
  'Toaster': {
    wattage: 1200,
    runtime: 0.1,
  },
  'Vacuum cleaner': {
    wattage: 1500,
    runtime: 0.2,
  },
  'Air conditioner': {
    wattage: 1000,
    runtime: 8,
  },
  'Dehumidifier': {
    wattage: 300,
    runtime: 8,
  },
  'Water heater': {
    wattage: 4500,
    runtime: 4,
  }
};

function Kal() {
  const [appliances, setAppliances] = useState([]);
  const [selectedAppliance, setSelectedAppliance] = useState(Object.keys(APPLIANCE_OPTIONS)[0]);
  const [wattage, setWattage] = useState('');
  const [runtime, setRuntime] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    const savedAppliances = JSON.parse(localStorage.getItem('appliances'));
    if (savedAppliances) {
      setAppliances(savedAppliances);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appliances', JSON.stringify(appliances));
  }, [appliances]);

  const addAppliance = (e) => {
    e.preventDefault();
    if (wattage !== '' && runtime !== '' && quantity !== '' && wattage >= 0 && runtime >= 0 && quantity >= 0) {
      const newAppliance = {
        name: selectedAppliance,
        wattage: parseInt(wattage),
        runtime: parseInt(runtime),
        quantity: parseInt(quantity),
      };
      setAppliances([...appliances, newAppliance]);
    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  const calculateWattHour = (appliance) => {
    return appliance.wattage * appliance.runtime * appliance.quantity;
  };

  const totalWattage = appliances.reduce((sum, appliance) => sum + (appliance.wattage * appliance.quantity), 0);
  const totalWattHour = appliances.reduce((sum, appliance) => sum + calculateWattHour(appliance), 0);

  // Calculate Total Energy Consumption for all Appliances (in kWh)
  const totalEnergyConsumption = totalWattHour / 1000;

  // Assume electricity rate in $ per kWh
  const electricityRate = 0.12;

  // Calculate total cost of energy (in $)
  const totalCost = totalEnergyConsumption * electricityRate;

  // Assume CO2 emissions factor in kg per kWh
  const co2EmissionsFactor = 0.5;

  // Calculate Carbon Emissions (in kg CO2)
  const carbonEmissions = totalEnergyConsumption * co2EmissionsFactor;

  // Calculate Energy Efficiency Percentage
  // Let's assume the useful energy output is equal to the total energy consumption
  const usefulEnergyOutput = totalEnergyConsumption;
  // Then, the total energy input is the same as the total energy consumption
  const totalEnergyInput = totalEnergyConsumption;
  // Calculate Energy Efficiency Percentage
  const energyEfficiencyPercentage = (usefulEnergyOutput / totalEnergyInput) * 100;

  const handleApplianceChange = (event) => {
    setSelectedAppliance(event.target.value);
  };

  return (
    <div className="App" style={{ marginTop: '3%' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Energy Efficiency Calculator</h1>

      <form onSubmit={addAppliance}>
        <label htmlFor="appliance">Appliance:</label>
        <select id="appliance" name="appliance" value={selectedAppliance} onChange={handleApplianceChange}>
          {Object.keys(APPLIANCE_OPTIONS).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="wattage">Wattage {"(W)"}:</label>
        <input type="number" id="wattage" name="wattage" value={wattage} onChange={(e) => setWattage(e.target.value)} required />

        <label htmlFor="runtime">Run Time {"(hrs)"}:</label>
        <input type="number" id="runtime" name="runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)} required />

        <label htmlFor="quantity">Number of Appliances:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <button type="submit">Add Appliance</button>

        <Link to='/guide' style={{ textDecoration: 'none', display: 'inline-block', padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', borderRadius: '5px', cursor: 'pointer', marginLeft: '74%' }}>Guide</Link>

      </form>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Load Description</th>
            <th>Quantity</th>
            <th>Wattage {"(W)"}</th>
            <th>Run-time {"(hrs)"}</th>
            <th>Number of Appliances</th>
            <th>Watt-Hour {"(Wh)"}</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appliances.map((appliance, index) => (
            <tr key={index}>
              <td>{appliance.name}</td>
              <td>{appliance.quantity}</td>
              <td>{appliance.wattage}</td>
              <td>{appliance.runtime}</td>
              <td>{appliance.quantity}</td>
              <td>{calculateWattHour(appliance)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="calculation-table">
        <thead>
          <tr>
            <th>Calculations</th>
            <th>Recomendations</th>
            <th>Enquiry</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Energy Consumption {"(kWh)"}:</td>
            <td>{totalEnergyConsumption}</td>
            <td>Consider replacing old appliances with energy-efficient models.</td>
            <td></td>
          </tr>
          <tr>
            <td>Total Cost of Energy:</td>
            <td>{totalCost}</td>
            <td>Invest in renewable energy sources to reduce long-term costs.</td>
            <td></td>
          </tr>
          <tr>
            <td>Carbon Emissions {"(kg CO2)"}:</td>
            <td>{carbonEmissions}</td>
            <td>Reduce energy consumption to minimize carbon footprint.</td>
            <td></td>
          </tr>
          <tr>
            <td>Energy Efficiency Percentage {"(%)"}:</td>
            <td>{energyEfficiencyPercentage}</td>
            <td>Upgrade insulation and seal air leaks to improve efficiency.</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Kal;
