
const cart = [];
//button disabled after select
const boxes = document.getElementsByClassName('select-btn')
    for (let box of boxes) {
        box.addEventListener('click', function onClick() {
            this.disabled = true;
        });
      }

function displayPlayer(cartPlayer)
{
    if(cartPlayer.length>5){
        alert('can not add more than 5 players!');
        //this.disabled = false;
        return;
    }
    //let totalPrice = 0;
    //total added products
     const totalPlayers = document.getElementById("total-player");
     totalPlayers.innerText = cart.length;

    const cartContainer = document.getElementById("player-cart");
    cartContainer.innerHTML = '';

    for(let i = 0; i < cartPlayer.length; i++)
    {
        const name = cart[i].playerName
       
         // totalPrice = totalPrice + price;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
        
        `;
        cartContainer.appendChild(tr);
    }

    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <th></th>
    // <td>Total Price</td>
    // <td>${totalPrice}</td>
    // `;

    // cartContainer.appendChild(tr);
}
function getValue(element){
    const playerExpenseField = document.getElementById(element);
    const expenseValue = parseInt(playerExpenseField.value);
    playerExpenseField.value = '';
    return expenseValue;
    
}
function setValue(element,value){
    const setExpenses = document.getElementById(element);
    setExpenses.innerText = value;
   
}
document.getElementById('btn-calculate').addEventListener('click',function(){
    const totalPlayers = document.getElementById("total-player");
    const totalPlayersNumber = totalPlayers.innerText;

    const perPlayerExpenses = getValue('per-player-expense');
    const totalPlayerExpenses = perPlayerExpenses * totalPlayersNumber;
    setValue('expenses',totalPlayerExpenses);
   
});
document.getElementById('btn-total').addEventListener('click',function(){
    
})

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const players = {
        playerName: playerName,   
    }
    
    cart.push(players);
    displayPlayer(cart);
}
