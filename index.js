


 import {menuArray} from "/data.js"
    
 const pizzaBtn = document.getElementById("pizza-btn")
const burgerBtn = document.getElementById("burger-btn")
const beerBtn = document.getElementById("beer-btn")
const feed = document.getElementById("feed")







let orderCart = []


pizzaBtn.addEventListener("click", function(){
    orderCart.push(menuArray[0])
    updateOrderMenu()
})

burgerBtn.addEventListener("click", function(){
    orderCart.push(menuArray[1])
    updateOrderMenu()
})

beerBtn.addEventListener("click", function(){
    orderCart.push(menuArray[2])
    updateOrderMenu()
})


function updateOrderMenu(){
    feed.innerHTML = ""
  const YourOrder = document.createElement("div")
   YourOrder.innerHTML = `
   <div class="yourOrder">    
        <h2>Your Order</h2>
   </div>`
   feed.appendChild(YourOrder)
   
    orderCart.forEach(function(menu){
        const itemDiv = document.createElement("div")
        itemDiv.innerHTML = `
        <div class="innerMenu">
            <p>${menu.name}</p>
            <p>$${menu.price}</p>
        </div>`
        feed.appendChild(itemDiv)
    })
  
   const totalPrice = orderCart.reduce((c, p) =>{
       return c + p.price
   },0)
  
   const totalDiv = document.createElement("div")
   totalDiv.innerHTML = `
   <div class="menuTotalPrice">
        <p>Total price:</p>
        <p>$${totalPrice}</p>
   </div>`
   feed.appendChild(totalDiv)
   
   const CompleteButton = document.createElement("div")
   CompleteButton.innerHTML = `
   <div class="divBottom">
    <button id="complete-Btn" class="completeBtn">Complete Order</button>
   </div>`
   feed.appendChild(CompleteButton)
   
   const completebtn = document.getElementById("complete-Btn")
   completebtn.addEventListener("click", function(){
       completeOrderDetails()
   })
   
   
  
   
}

function completeOrderDetails(){
    const yourDetails = document.createElement("div")
    
    yourDetails.innerHTML = `
    <div class="OrderDetails">
        <form>
            <h2 class="detailsText">Enter card Details</h2>
            <label for="nameText">
                <input type="text"  placeholder="Enter your name please" id="nameText required>
            </label>
                    <input type="number" placeholder="Enter your card number please" id="nameText" required>
                    <input type="tel" placeholder ="Enter your cvv" id="nameText" required>
                     <button class="payBtn" id="payBtn">Pay<button>
        </from>
    </div>`
    
    feed.appendChild(yourDetails)
    const paybtn = document.getElementById("payBtn")
    paybtn.addEventListener("click", function(){
        orderOnItsWay()
    })
   
}

function orderOnItsWay(){
    feed.innerHTML = ""
    const tyMessage = document.createElement("div")
    tyMessage.innerHTML = `
    <div class="thankYouMessage">
        <h3 class="thxMsg">Thank you! Your order is on its way.<h3>
    </div>`
    
    feed.appendChild(tyMessage)
}

