
/* First we need to get the button and what happens when we click the button*/
document.querySelectorAll('[data-id]').addEventListener('click', CMTS);

/*CMTS is convert Mintues to Seconds */
function CMTS() {
    // we declare minutes and store the value
    let minInput = document.querySelector('[data-mintues]').value;
    // we need to convert min into seconds
    let secndOutput = minInput * 60;
    /* we need to display the output */
    document.querySelector('[data-seconds]').value = secndOutput;
}