const cart = [];
// products-cart

function displayPlayer(cartPlayer)
{
    if(cartPlayer.length>5){
        alert('ok')
        return;
    }
    //let totalPrice = 0;
    //total added products
    // const totalProducts = document.getElementById("total-products");
    // totalProducts.innerText = cart.length;

    const cartContainer = document.getElementById("products-cart");
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

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const players = {
        playerName: playerName,   
    }
   
    cart.push(players);
    displayPlayer(cart);
}
//button disabled after select
const boxes = document.getElementsByClassName('select-btn')
    for (const box of boxes) {
        box.addEventListener('click', function onClick() {
            this.disabled = true;
        });
      }