import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Helper.css'; // Import CSS file for styling

function Helper() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="guide-container">
      <div className="title-container">
        <h1>Solar System Sizing Calculator</h1>
        <hr />
        <h4>User Guide</h4>
        <hr />
        <p>
          Welcome to the Solar System Sizing Calculator. This guide will walk you
          through how to use this application to calculate the optimal solar energy
          system for your needs. Let{"'"}s get started:
        </p>
      </div>
      <div className="step-container">
        <h4>Step 1: Enter Load Details</h4>
        <p>
          Enter details about your electrical appliances in the first table. For
          each appliance, you need to provide:
        </p>
        <ul>
          <li>
            <strong>Equipment/Electronic Type:</strong> This could be any electrical
            device you use, such as a refrigerator, fan, or light.
          </li>
          <li>
            <strong>Quantity:</strong> The number of such appliances.
          </li>
          <li>
            <strong>Runtime {"(Hrs/day)"}:</strong> The average number of hours per day
            the appliance is used.
          </li>
        </ul>
        <p>
          You can add more equipment/electronics by clicking the "Add Equipment"
          button if you have more than one type of appliance.
        </p>
      </div>
      <div className="step-container">
        <h4>Step 2: Review Auto-calculated Values</h4>
        <p>
          As you enter the values, the application automatically calculates the{" "}
          <strong>Total Wattage (W)</strong> and <strong>Watt-Hours (Wh)</strong>{" "}
          for each appliance. These fields are not editable.
        </p>
      </div>
      <div className="step-container">
        <h4>Step 3: Calculate</h4>
        <p>
          Once you have entered all the necessary data, click the "Calculate"
          button.
        </p>
      </div>
      <div className="step-container">
        <h4>Step 4: Review Results</h4>
        <p>The application calculates and displays the following:</p>
        <div className="bold-box">
          <ul>
            <li>
              <strong>Total Wattage (W)</strong> and{" "}
              <strong>Total Watt-Hour (Wh)</strong>: The sum of all the wattages and
              watt-hours of your electrical loads.
            </li>
            <li>
              <strong>Battery Bank Power (Wh)</strong>: The total power that your
              battery bank should be able to store.
            </li>
            <li>
              <strong>Inverter Capacity (kW)</strong>: The capacity of the inverter
              required for your needs.
            </li>
            <li>
              <strong>Number of Solar Panels</strong>: The number of solar panels you
              will need to generate the required power.
            </li>
            <li>
              <strong>Backup Time (Hrs)</strong>: The duration for which your system
              can provide power with the current setup.
            </li>
            <li>
              <strong>Number of Lead Acid Batteries</strong>: The number of lead-acid
              batteries required for the desired backup time.
            </li>
            <li>
              <strong>Number of Lithium-Ion Batteries</strong>: The number of
              lithium-ion batteries required for the desired backup time. Lithium-Ion
              batteries are more efficient, and you generally need fewer of them
              compared to lead-acid batteries.
            </li>
          </ul>
        </div>

      </div>
      <p>
        Please note that the results are automatically updated whenever you change
        any value in the table.
      </p>
      <p>
        Remember, these are only estimates, and the actual requirements may vary
        based on various factors including local weather conditions, actual power
        usage, battery and inverter efficiency, and others. Always consult with our
        solar installation professionals before making any purchasing decisions.
      </p>
      <p>
        We hope this tool helps you in estimating your solar energy requirements.
        Enjoy your journey towards sustainable and renewable energy!
      </p>
      <hr />

      <Link to="/calculate" className="calculate-button">Calculate</Link>
    </div>
  )
}

export default Helper;
