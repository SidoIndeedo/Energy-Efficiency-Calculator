import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Calculate.css';
import question_mark from './icons/question_mark.png'
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
  const [energyOutput, setEnergyOutput] = useState('');
  const handleQuestionClick = () => {
    // Navigate to the '/services' page when the question mark is clicked
    window.location.href = '/services'; // Redirect to the '/services' page
  };


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
    if (wattage !== '' && runtime !== '' && quantity !== '' && energyOutput !== '' &&
      wattage >= 0 && runtime >= 0 && quantity >= 0 && energyOutput >= 0) {
      const newAppliance = {
        name: selectedAppliance,
        wattage: parseInt(wattage),
        runtime: parseInt(runtime),
        quantity: parseInt(quantity),
        energyOutput: parseInt(energyOutput),
      };
      setAppliances([...appliances, newAppliance]);
    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  const calculateTotalWattHour = () => {
    return appliances.reduce((sum, appliance) => {
      return sum + (appliance.wattage * appliance.runtime * appliance.quantity);
    }, 0);
  };

  const calculateEnergyOutput = () => {
    return appliances.reduce((sum, appliance) => {
      return sum + appliance.energyOutput;
    }, 0);
  }

  const totalWattHour = calculateTotalWattHour();
  const totalEnergyOutput = calculateEnergyOutput();
  // Calculate Energy Efficiency Percentage
  const totalEnergyInput = totalWattHour;
  const usefulEnergyOutput = totalEnergyOutput;
  const energyEfficiencyPercentage = (usefulEnergyOutput / totalEnergyInput) * 100;

  const handleApplianceChange = (event) => {
    setSelectedAppliance(event.target.value);
  };

  let placehold;
  return (

    <div className="App" style={{ marginTop: '3%' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Energy Efficiency Calculator</h1>

      <form onSubmit={addAppliance}>
        <label htmlFor="appliance">Appliance:</label>
        <select id="appliance" name="appliance" value={selectedAppliance} onChange={handleApplianceChange}>
          {Object.keys(APPLIANCE_OPTIONS).map((option) => (
            <option key={option} value={option} placehold={option.wattage}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="wattage">Wattage (W):</label>
        <input type="number" id="wattage" name="wattage" value={wattage} onChange={(e) => setWattage(e.target.value)} required />

        <label htmlFor="runtime">Run Time (hrs):</label>
        <input type="number" id="runtime" name="runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)} required />

        <label htmlFor="quantity">Number of Appliances:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <div className='question-container'>
          <label htmlFor="energyOutput">Energy Output:</label>
          <div className="input-container">

            <input type="number" id="energyOutput" name="energyOutput" value={energyOutput} onChange={(e) => setEnergyOutput(e.target.value)} required />
            <Link to='/services' className='question-mark' onClick={handleQuestionClick}>
              <img src={question_mark} className='question-img'></img>
            </Link>
          </div>
        </div>

        <div className='btn-container'>


          <button type="submit" className='cal-btn'>Add Appliance</button>

          <Link to='/guide' className='link-btn'> Guide</Link>
          {/*  */}
        </div>

      </form>


      <br />
      <table className="calculation-table">
        <thead className='header-container'>
          <tr>
            <th>Load Description</th>
            <th>Quantity</th>
            <th>Wattage (W)</th>
            <th>Run-time (hrs)</th>
            <th>Number of Appliances</th>
            <th>Energy Output (Wh)</th>
          </tr>
        </thead>
        <tbody className='info-container'>
          {appliances.map((appliance, index) => (
            <tr key={index}>
              <td>{appliance.name}</td>
              <td>{appliance.quantity}</td>
              <td>{appliance.wattage}</td>
              <td>{appliance.runtime}</td>
              <td>{appliance.quantity}</td>
              <td>{appliance.energyOutput}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="calculation-table">
        <thead className='header-container'>
          <tr>
            <th>Variables</th>
            <th>Calculation</th>
            <th>Recomendation</th>
          </tr>
        </thead>
        <tbody className='info-container'>
          <tr>
            <td>Total Energy Consumption (kWh):</td>
            <td>{(totalWattHour / 1000).toFixed(2)}</td>
            <td>You can use solar panels to save at least this amount of energy</td>
          </tr>
          <tr>
            <td>Total Cost of Energy:</td>
            <td>${(totalWattHour / 1000 * 0.12).toFixed(2)}</td>
            <td>After installing solar panels, you will save this amount of money</td>
          </tr>
          <tr>
            <td>Carbon Emissions (kg CO2):</td>
            <td>{(totalWattHour / 1000 * 0.5).toFixed(2)}</td>
            <td>Reduce energy consumption to minimize carbon footprint.</td>
          </tr>
          <tr>
            <td>Energy Efficiency Percentage (%):</td>
            <td>{energyEfficiencyPercentage.toFixed(2)}</td>
            <td>Upgrade insulation and seal air leaks to improve efficiency.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Kal;
