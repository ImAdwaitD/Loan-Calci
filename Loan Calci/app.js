document.querySelector('#loan-form').addEventListener('submit', function(e){
    document.querySelector('.results').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';

    setTimeout(calResult, 1500);
    
    e.preventDefault();
});

function calResult(){
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const MP = document.querySelector('#monthly-payment');
    const TP = document.querySelector('#total-payment');
    const TI = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const cInterest = parseFloat(interest.value)/100/12;
    const Cpayment = parseFloat(years.value)*12;

    const x = Math.pow(1 + cInterest, Cpayment);
    const monthly = (principal*x*cInterest)/(x-1);

    if(isFinite(monthly)){
        MP.value = monthly.toFixed(2);
        TP.value = (Cpayment * monthly).toFixed(2);
        TI.value = ((Cpayment * monthly) - principal).toFixed(2);
        document.querySelector('.results').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    } else {
        ShowError('Please check your numbers');
    }
}

function ShowError(error){
    document.querySelector('.results').style.display = 'none';
        document.querySelector('#loading').style.display = 'none';
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    setTimeout(errorgo, 3000);

}

function errorgo(){
    document.querySelector('.alert').remove();
}