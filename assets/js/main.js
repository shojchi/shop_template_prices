let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.content-grid');
let cartCounter = 0;
let cartPrice = 0;

const btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = `${++cartCounter}`;
        if (cartCounter === 1) cartCounterLabel.style.display = 'block';
    }

    const mockData = +target.
        parentElement.
        previousElementSibling.
        innerHTML.
        replace(/^\$(\d+)\s\D+(\d+).*$/u, '$1.$2');

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100; 
    let restoreHTML = target.innerHTML;
    
    target.innerHTML =`Added ${cartPrice.toFixed(2)} $`;
    
    buttonsContainer.removeEventListener("click", btnClickHandler);
    target.disabled = true;

    setTimeout(() => {
        target.innerHTML = restoreHTML;
        buttonsContainer.addEventListener("click", btnClickHandler);
        target.disabled = false;
    }, 2000);
};

buttonsContainer.addEventListener("click", btnClickHandler);