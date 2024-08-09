//Write your javascript code here
const countDisplay = document.getElementById('count');
let count = 0;

document.getElementById('increase').addEventListener('click', () => {    
    count++;    
    countDisplay.textContent = count; 
});

document.getElementById('decrease').addEventListener('click', () => {    
    if(count>0) {
        count--;    
    }
    countDisplay.textContent = count; 
});

document.getElementById('reset').addEventListener('click', () => {    
    count=0;
    countDisplay.textContent = count; 
});
