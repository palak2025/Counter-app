const countval=document.querySelector('#counter');

function increment(){
    let value=parseInt(countval.innerText);
    value=value+1;
    countval.innerText=value;
};



function decrement(){
    let value=parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;
};
