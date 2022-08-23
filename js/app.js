
const cart = [];
displayPlayer(cart);

function displayPlayer(cartPlayer){

const cartContainer = document.getElementById("player-cart");
if(cart.length > 5){
    alert("You Can not Select More Than 5 Players!!!");

    return cartPlayer.removeAttribute('disabled');
}


     const totalPlayers = document.getElementById("total-player");
     totalPlayers.innerText = cart.length;

     cartContainer.innerHTML = '';
    

    for(let i = 0; i < cart.length; i++)
    {
        const name = cart[i].playerName
       
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        
        `;
        cartContainer.appendChild(tr);
    }
   
}

function addToCart(element) {
    const button = element;
    button.setAttribute('disabled', 'ture');
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const players = {
        playerName: playerName,   
    }
    
    cart.push(players);
    displayPlayer(button);
}

//get input value from user
function getValue(element){
    const playerExpenseField = document.getElementById(element);
    const expenseValue = parseInt(playerExpenseField.value);
    playerExpenseField.value = '';
    return expenseValue;
    
}
//get textField value
function getTextValue(element){
    const getTextElement = document.getElementById(element);
    const textValue = parseInt(getTextElement.innerText);
    return textValue;
}
// set the value in text field
function setValue(element,value){
    const setExpenses = document.getElementById(element);
    setExpenses.innerText = value;
   
}
//calculate total player expenses
document.getElementById('btn-calculate').addEventListener('click',function(){

    const totalPlayersNumber = getTextValue('total-player')
    const perPlayerExpenses = getValue('per-player-expense');
    const totalPlayerExpenses = perPlayerExpenses * totalPlayersNumber;
    setValue('expenses',totalPlayerExpenses);
   
});
//calculate total cost
document.getElementById('btn-total').addEventListener('click',function(){
    const managerCost = getValue('manager-expense');
    const coachCost = getValue('coach-expense');
    const totalPlayerExpense = getTextValue('expenses');
    const totalCost = totalPlayerExpense + managerCost + coachCost;
    setValue('total-cost',totalCost);
})

