const dayIn = document.getElementById('dayInput');
const monthIn = document.getElementById('monthInput');
const yearIn = document.getElementById('yearInput');
const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');
const calculateButton = document.getElementById('calculateButton');
const errorStyle = '0.5px solid var(--light-red)';

calculateButton.addEventListener('click', () => {
    const D = dayIn.value;
    const M = monthIn.value;
    const Y = yearIn.value;
    const birthday = `${Y}-${M}-${D}`;

    if(validateDay() && validateMonth() && validateYear()) {
        console.log("Done");
    } else {
        return;
    }

    let years = new Date().getFullYear() - new Date(birthday).getFullYear();
    let months = new Date().getMonth() - new Date(birthday).getMonth
});