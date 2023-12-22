controlOrdersFolder();
async function controlOrdersFolder() {
    const orderInputContainers = document.querySelectorAll(".order-input-container");
    const ordersFolder = document.querySelector(".orders-folder")
    
    let orderInput = {};
    let orderLabel = {};
    let toBeRemoved = {}

    orderInputContainers.forEach(orderInputContainer => {
        orderInput = orderInputContainer.querySelector(".order-input");
        orderLabel = orderInputContainer.querySelector(".order-label");

        if (orderInput.checked) {
            ordersFolder.innerHTML += `<div order-id="${orderInput.getAttribute("id")}" class="order-card"><span data-lang="${orderLabel.getAttribute("data-lang")}"></span><i class='bx bxs-x-circle text-danger x-icon'></i></div>`;
            updateLang();
        }

        orderInput.onchange = () => {
            orderInput = orderInputContainer.querySelector(".order-input");
            orderLabel = orderInputContainer.querySelector(".order-label");

            if (orderInput.checked) {
                ordersFolder.innerHTML += `<div order-id="${orderInput.getAttribute("id")}" class="order-card"><span data-lang="${orderLabel.getAttribute("data-lang")}"></span><i class='bx bxs-x-circle text-danger x-icon'></i></div>`;
                updateLang();
            }
            else {
                toBeRemoved = ordersFolder.querySelector("[order-id=" + orderInput.getAttribute("id") + "]");
                toBeRemoved.remove()
            }
            controlOrderCards()
        }

        controlOrderCards()


    })
}

function controlOrderCards() {
    const orderCards = document.querySelectorAll(".order-card");
    let removeCardBtn = {};

    orderCards.forEach(orderCard => {
        removeCardBtn = orderCard.querySelector(".x-icon");

        removeCardBtn.onclick = () => {
            document.querySelector("#" + orderCard.getAttribute("order-id")).checked = false;
            orderCard.remove();
        }
    })
}
