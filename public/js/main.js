const driverName = document.querySelector('.driverName');
const driverConstructor = document.querySelector('.driverConstructor');
const driverPoints = document.querySelector('.driverPoints');
const driverBtn = document.querySelector('button');

const getDriver = async () => {
  const driverInput = document.querySelector('input').value;

  try {
    const response = await fetch(`/driver/${driverInput}`);
    const driverData = await response.json();

    driverName.innerText = `Name: ${driverData.name}`;
    driverConstructor.innerText = `Constructor: ${driverData.constructor}`;
    driverPoints.innerText = `Points: ${driverData.points}`;
  } catch (e) {
    console.log(e);
  }
};

driverBtn.addEventListener('click', getDriver);
