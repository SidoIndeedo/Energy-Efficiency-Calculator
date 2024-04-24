// get the HTML elements
const loadSelect = document.getElementById("loadSelect");
const quantity = document.getElementById("quantity");
const wattage = document.getElementById("wattage");
const totalWattage = document.getElementById("totalWattage");
const runtime = document.getElementById("runtime");
const wattHour = document.getElementById("wattHour");
const addItemBtn = document.getElementById("addItemBtn");
const calculateBtn = document.getElementById("calculateBtn");
const loadTable = document.getElementById("loadTable");
const result = document.getElementById("result");
const totalWattage2 = document.getElementById("total-wattage-2");
const totalWattageHour2 = document.getElementById("total-wattage-hour-2");
const levelOfTolerance = document.getElementById("level-of-tolerance");
const totalPower2 = document.getElementById("total-power-2");

// add event listener for load select
loadSelect.addEventListener("change", function () {
  // get the wattage for the selected load
  switch (loadSelect.value) {
    case "TV":
      wattage.value = "65";
      break;
    case "Lighting Points":
      wattage.value = "18";
      break;
    case "Water Dispenser":
      wattage.value = "150";
      break;
    case "Coffee Maker":
      wattage.value = "750";
      break;
    case "Microwave":
      wattage.value = "1000";
      break;
    case "Desktop computer":
      wattage.value = "250";
      break;
    case "Sandwich Maker":
      wattage.value = "550";
      break;
    case "Big Fridge":
      wattage.value = "300";
      break;
    case "Small Fridge":
      wattage.value = "150";
      break;
    case "Toaster":
      wattage.value = "750";
      break;
    case "Ice Maker":
      wattage.value = "150";
      break;
    case "Blender":
      wattage.value = "300";
      break;
    case "Printer":
      wattage.value = "600";
      break;
    case "Deep Freezer":
      wattage.value = "200";
      break;
    case "Electric Kettle":
      wattage.value = "1800";
      break;
    case "CCTV":
      wattage.value = "50";
      break;
    case "Fan":
      wattage.value = "60";
      break;
    case "Projector":
      wattage.value = "220";
      break;
    case "3Hp Air Condition":
      wattage.value = "3000";
      break;
    case "2Hp Air Condition":
      wattage.value = "1400";
      break;
    case "1.5Hp Air Condition":
      wattage.value = "1850";
      break;
    case "1Hp Air Condition":
      wattage.value = "900";
      break;
    default:
      wattage.value = "0";
      break;
  }
  // calculate total wattage and watt-hour
  totalWattage.value = quantity.value * wattage.value;
  wattHour.value = totalWattage.value * runtime.value;
});

// add event listener for quantity
quantity.addEventListener("input", function () {
  // calculate total wattage and watt-hour
  totalWattage.value = quantity.value * wattage.value;
  wattHour.value = totalWattage.value * runtime.value;
});

// add event listener for runtime
runtime.addEventListener("input", function () {
  // calculate watt-hour
  wattHour.value = totalWattage.value * runtime.value;
});

// add event listener for add item button
addItemBtn.addEventListener("click", function () {
  // create a new row
  const newRow = loadTable.insertRow(-1);
  // Create new cells and add data-label attributes
  const loadCell = newRow.insertCell(0);
  loadCell.setAttribute('data-label', 'Load');
  const quantityCell = newRow.insertCell(1);
  quantityCell.setAttribute('data-label', 'Quantity');
  const wattageCell = newRow.insertCell(2);
  wattageCell.setAttribute('data-label', 'Wattage (W)');
  const totalWattageCell = newRow.insertCell(3);
  totalWattageCell.setAttribute('data-label', 'Total Wattage (W)');
  const runtimeCell = newRow.insertCell(4);
  runtimeCell.setAttribute('data-label', 'Run-time (hrs)');
  const wattHourCell = newRow.insertCell(5);
  wattHourCell.setAttribute('data-label', 'Watt-Hour (Wh)');

  // Add innerHTML to the new cells
  newRow.cells[0].innerHTML = '<td data-label="Load"><select class="loadSelect" data-label="Load"> <option value="TV">TV</option> <option value="Lighting Points">Lighting Points</option> <option value="Water Dispenser">Water Dispenser</option> <option value="Coffee Maker">Coffee Maker</option> <option value="Microwave">Microwave</option> <option value="Desktop computer">Desktop computer</option> <option value="Sandwich Maker">Sandwich Maker</option> <option value="Big Fridge">Big Fridge</option> <option value="Small Fridge">Small Fridge</option> <option value="Toaster">Toaster</option> <option value="Ice Maker">Ice Maker</option> <option value="Blender">Blender</option> <option value="Printer">Printer</option> <option value="Deep Freezer">Deep Freezer</option> <option value="Electric Kettle">Electric Kettle</option> <option value="CCTV">CCTV</option> <option value="Fan">Fan</option> <option value="Projector">Projector</option> <option value="3Hp Air Condition">3Hp Air Condition</option> <option value="2Hp Air Condition">2Hp Air Condition</option> <option value="1.5Hp Air Condition">1.5Hp Air Condition</option> <option value="1Hp Air Condition">1Hp Air Condition</option> </select></td>';
  newRow.cells[1].innerHTML = '<td data-label="Quantity"><input type="number" class="quantity" value="1" min="1"></td>';
  newRow.cells[2].innerHTML = '<td data-label="Wattage (W)"><input type="number" class="wattage non-editable-input" value="65" readonly></td>';
  newRow.cells[3].innerHTML = '<td data-label="Total Wattage (W)"><input type="number" class="totalWattage non-editable-input" value="65" readonly></td>';
  newRow.cells[4].innerHTML = '<td data-label="Run-time (hrs)"><input type="number" class="runtime" value="1" min="0"></td>';
  newRow.cells[5].innerHTML = '<td data-label="Watt-Hour (Wh)"><input type="number" class="wattHour non-editable-input" value="65" readonly></td>';

  // add event listener for load select in the new row
  const loadSelectNew = newRow.querySelector(".loadSelect");
  const quantityNew = newRow.querySelector(".quantity");
  const wattageNew = newRow.querySelector(".wattage");
  const totalWattageNew = newRow.querySelector(".totalWattage");
  const runtimeNew = newRow.querySelector(".runtime");
  const wattHourNew = newRow.querySelector(".wattHour");

  // Add a new cell for the "Remove" button
  const actionCell = newRow.insertCell(6);
  actionCell.innerHTML = '<button class="removeItemBtn">Remove</button>';

  // Add event listener to the remove button in the new row
  const removeItemBtnNew = newRow.querySelector(".removeItemBtn");
  removeItemBtnNew.addEventListener("click", function () {
    newRow.remove();
  });


  loadSelectNew.addEventListener("change", function () {
    switch (loadSelectNew.value) {
      case "TV":
        wattageNew.value = "65";
        break;
      case "Lighting Points":
        wattageNew.value = "18";
        break;
      case "Water Dispenser":
        wattageNew.value = "150";
        break;
      case "Coffee Maker":
        wattageNew.value = "750";
        break;
      case "Microwave":
        wattageNew.value = "1000";
        break;
      case "Desktop computer":
        wattageNew.value = "250";
        break;
      case "Sandwich Maker":
        wattageNew.value = "550";
        break;
      case "Big Fridge":
        wattageNew.value = "300";
        break;
      case "Small Fridge":
        wattageNew.value = "150";
        break;
      case "Toaster":
        wattageNew.value = "750";
        break;
      case "Ice Maker":
        wattageNew.value = "150";
        break;
      case "Blender":
        wattageNew.value = "300";
        break;
      case "Printer":
        wattageNew.value = "600";
        break;
      case "Deep Freezer":
        wattageNew.value = "200";
        break;
      case "Electric Kettle":
        wattageNew.value = "1800";
        break;
      case "CCTV":
        wattageNew.value = "50";
        break;
      case "Fan":
        wattageNew.value = "60";
        break;
      case "Projector":
        wattageNew.value = "220";
        break;
      case "3Hp Air Condition":
        wattageNew.value = "1850";
        break;
      case "2Hp Air Condition":
        wattageNew.value = "1400";
        break;
      case "1.5Hp Air Condition":
        wattageNew.value = "1850";
        break;
      case "1Hp Air Condition":
        wattageNew.value = "900";
        break;
      default:
        wattageNew.value = "0";
        break;
    }

    // calculate total wattage and watt-hour for the new row
    totalWattageNew.value = quantityNew.value * wattageNew.value;
    wattHourNew.value = totalWattageNew.value * runtimeNew.value;
  });

  // add event listener for quantity in the new row
  quantityNew.addEventListener("input", function () {
    // calculate total wattage and watt-hour for the new row
    totalWattageNew.value = quantityNew.value * wattageNew.value;
    wattHourNew.value = totalWattageNew.value * runtimeNew.value;
  });

  // Get the first row elements
  const loadSelect = document.getElementById("loadSelect");
  const quantityInput = document.getElementById("quantity");
  const runtimeInput = document.getElementById("runtime");
  const calculateBtn = document.getElementById("calculate");

  // Update total wattage and watt-hour for the first row when quantity or runtime changes
  function updateFirstRow() {
    const wattage = parseInt(document.getElementById("wattage").value);
    const quantity = parseInt(quantityInput.value);
    const runtime = parseInt(runtimeInput.value);
    document.getElementById("totalWattage").value = wattage * quantity;
    document.getElementById("wattHour").value = wattage * quantity * runtime;
  }


  // add event listener for runtime in the new row
  runtimeNew.addEventListener("input", function () {
    // calculate watt-hour for the new row
    wattHourNew.value = totalWattageNew.value * runtimeNew.value;
  });
});

// Function to calculate the total power to be generated
function calculateTotalPower(totalWattHours, levelOfTolerance, batteryBankPower) {
  return (totalWattHours * levelOfTolerance) / 100 + totalWattHours + batteryBankPower;
}

// add event listener for calculate button
calculateBtn.addEventListener("click", function () {
  // Add the utility function here
  function toFloat(value) {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  }

  let totalWattage = parseFloat(document.getElementById("totalWattage").value);
  let totalWattHour = parseFloat(document.getElementById("wattHour").value);

  const totalWattages = document.querySelectorAll("input.totalWattage");
  const wattHours = document.querySelectorAll("input.wattHour");

  totalWattages.forEach((wattageElement) => {
    totalWattage += toFloat(wattageElement.value);
  });

  wattHours.forEach((wattHourElement) => {
    totalWattHour += toFloat(wattHourElement.value);
  });


  result.textContent = `Total Wattage: ${totalWattage}, Total Watt-Hour: ${totalWattHour}`;

  // Set the calculated values in table 2, column 2
  document.getElementById("table2-wattage").innerText = totalWattage;
  document.getElementById("table2-wattHour").innerText = totalWattHour;

  // Call the calculateBatteryBankPower() function to update Battery Bank Power
  calculateBatteryBankPower();

  // Call the Update table 3 Load value function
  updateLoadValue(totalWattage);

  // Calculate and display total power generated
  const levelOfTolerance = parseInt(document.querySelector('#table2 > tbody > tr:nth-child(4) > td:nth-child(2)').innerText);
  const batteryBankPower = parseInt(document.getElementById("batteryBankPower").innerText);
  const totalPowerGenerated = calculateTotalPower(totalWattHour, levelOfTolerance, batteryBankPower);
  document.getElementById("totalPowerGenerated").innerText = totalPowerGenerated;

  // Calculate and display backup time
  const backupTime = calculateBackupTime(
    parseInt(document.getElementById("battery-voltage-vdc").innerText),
    parseInt(document.getElementById("ampere-hour").innerText),
    parseFloat(document.getElementById("power-factor-3").innerText),
    parseInt(document.getElementById("numBatteries").innerText),
    totalWattage
  );
  document.getElementById("backupTime").innerText = backupTime.toFixed(1);

  // Call the calculateInverterCapacity() function and update the value
  const inverterCapacity = calculateInverterCapacity(totalWattage);
  document.getElementById("inverterCapacity").innerText = inverterCapacity.toFixed(1);

  // Call the calculateNumSolarPanels() function and update the value
  const peakSunshine = parseFloat(document.querySelector('#table2 > tbody > tr:nth-child(3) > td:nth-child(2)').innerText);
  const panelSize = parseFloat(document.querySelector('#table2 > tbody > tr:nth-child(5) > td:nth-child(2)').innerText);
  const numSolarPanels = calculateNumSolarPanels(totalPowerGenerated, peakSunshine, panelSize);
  document.getElementById("numSolarPanels").innerText = Math.floor(numSolarPanels);

  // Call the calculateLeadAcid() function and update the value
  const desiredBackupTime = parseFloat(document.getElementById("desired-backup-time").innerText);
  const proposedLABattery = parseFloat(document.getElementById("proposed-la-battery").innerText);
  const batteryVoltage = parseFloat(document.getElementById("battery-voltage").innerText);
  const powerFactor2 = parseFloat(document.getElementById("power-factor-2").innerText);
  const leadAcidValue = calculateLeadAcid(desiredBackupTime, totalWattage, proposedLABattery, batteryVoltage, powerFactor2);
  document.getElementById("leadAcid").innerText = Math.floor(leadAcidValue);

  // Calculate and display the value for the lithium-ion batteries
  const lithiumIonValue = leadAcidValue / 4;
  document.getElementById("lithiumIon").innerText = Math.ceil(lithiumIonValue);


});

// Function to calculate the Battery Bank Power
function calculateBatteryBankPower() {
  const batteryVoltage = parseFloat(document.getElementById("battery-voltage-vdc").innerText);
  const ampereHour = parseFloat(document.getElementById("ampere-hour").innerText);
  const powerFactor3 = parseFloat(document.getElementById("power-factor-3").innerText);
  const numberOfBatteries = parseFloat(document.getElementById("numBatteries").innerText);

  document.getElementById("batteryBankPower").innerText = Math.round(batteryVoltage * powerFactor3 * ampereHour * numberOfBatteries);
}

// Function to display the Load 
function updateLoadValue(totalWattage) {
  let loadValue = document.getElementById("loadW");
  loadValue.innerText = totalWattage;
}

// Function to calculate the backup time
function calculateBackupTime(batteryVoltage, ampereHour, powerFactor, numberOfBatteries, loadW) {
  return (batteryVoltage * ampereHour * numberOfBatteries * powerFactor) / loadW;
}

//Function to caluculate value for Inverter Capacity
function calculateInverterCapacity(totalWattage) {
  return totalWattage / 0.8 / 1000;
}

// Function to calculate the value for Number of Solar Panels
function calculateNumSolarPanels(totalPowerGenerated, peakSunshine, panelSize) {
  return totalPowerGenerated / peakSunshine / panelSize;
}

//Function to calculate the quantity of Lead Acid Batteries
function calculateLeadAcid(desiredBackupTime, totalWattage, proposedLABattery, batteryVoltage, powerFactor) {
  return (desiredBackupTime * totalWattage) / (proposedLABattery * batteryVoltage * powerFactor);
}