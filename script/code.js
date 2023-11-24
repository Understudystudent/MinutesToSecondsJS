document.getElementById('convertButton').addEventListener('click', CMTS);

function CMTS() {
    let minInput = document.querySelector('[data-mintues]').value;
    let secndOutput = minInput * 60;
    document.querySelector('[data-seconds]').value = secndOutput;
}