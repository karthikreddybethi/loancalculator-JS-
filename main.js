

const calcu = document.querySelector('#calc');
calcu.addEventListener('click',function(e){

    document.querySelector('.results').style.display = 'none';
    document.querySelector('.loader').style.display = 'block';
    setTimeout(calculate,2000);

    e.preventDefault()
});

function calculate(){

    const results = document.querySelector('.results');
    const loanAmount = parseFloat(document.querySelector('#loan-amount').value);
    const intrest = (document.querySelector('#interest').value/100)/12;
    const years = document.querySelector('#repayment').value;
    const rmonthlyPayment = document.querySelector('#mpayment');
    const totalPayment = document.querySelector('#payment');
    const totalIntrest = document.querySelector('#tinterest');

    //Error indicator
    const error = document.querySelectorAll('.error')
    error.forEach((item,index)=>{

        if (item.value === ''){
            // alert('its empty');
            document.querySelectorAll('.error')[index].style.border = 'solid 1px red';
        }

    })

    //calculations

    const pow = Math.pow((1+intrest),years);
    const dividend = loanAmount*intrest*pow;
    const divisor = pow-1;
    const monthlyPayment = (dividend)/(divisor); 
    rmonthlyPayment.value = monthlyPayment.toFixed(2);
    const tpayment = ((monthlyPayment*years)).toFixed(2);
    totalPayment.value = tpayment;
    const tIntrest = (tpayment - loanAmount).toFixed(2); 
    totalIntrest.value = tIntrest;

    //Loader invisible

    document.querySelector('.loader').style.display = 'none';
    //
    if(isFinite(monthlyPayment)){
        document.querySelector('.results').style.display = 'block';
    }

    setTimeout(hideError,2000);
    // e.preventDefault();
}

function hideError(){
    const error = document.querySelectorAll('.error')
    error.forEach((item,index)=>{

        if (item.value === ''){
            // alert('its empty');
            document.querySelectorAll('.error')[index].style.border = 'solid 1px #EAEAEA';
        }

    })
}
