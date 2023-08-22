 function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    //formula za izracunavanje stope inflacije za prvu godinu
    let worth = money + (money * (inflationRate / 100));
     
    // izracunavanje povecanja inflacije za n godina
    for (let i = 0; i < years; i++) {
      worth+= worth * (inflationRate /100);
    }
    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money}€ ce za ${years}g. vredeti ${worth}€`;

    document.querySelector('.container').appendChild(newElement);
 }