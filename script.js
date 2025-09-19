const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('input');


buttons.forEach(button => {
    // Add a 'click' event listener to the current button
    button.addEventListener('click', () => {
        const value = button.textContent
        if (value === 'C'){
            display.value = ''
        }
        else if (value === '='){
            try{
                display.value = eval(display.value);
            }catch{
                display.value = 'Error'
            }
        }else{
            display.value += value;
        }
    });
});
