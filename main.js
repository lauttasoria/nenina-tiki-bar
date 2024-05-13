// Función para agregar un pedido a la lista temporalmente
function addOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const menuItem = document.getElementById('menu').value;
    const drinkCheckbox = document.getElementById('drink');
    const hasDrink = drinkCheckbox.checked;

    let price;
    let orderDescription;

    switch (menuItem) {
        case 'hamburguesa':
            price = 7800;
            orderDescription = 'Hamburguesa';
            break;
        case 'pizza':
            price = 10000;
            orderDescription = 'Pizza';
            break;
        case 'ensalada':
            price = 6500;
            orderDescription = 'Ensalada';
            break;
            case 'sándwich':
            price = 6200;
            orderDescription = 'Sándwich';
            break;
        case 'panchos':
            price = 5900;
            orderDescription = 'Panchos';
            break;
        case 'lomito':
            price = 8700;
            orderDescription = 'Lomito';
            break;
        default:
            price = 0;
            orderDescription = 'Otro';
            break;
    }

    if (hasDrink) {
        price += 2500; // Incremento de precio por bebida
        orderDescription += ' con Bebida';
    }

    const orderItem = `${orderDescription} - $${price}`;

    const orderList = document.getElementById('orderList');
    const listItem = document.createElement('li');
    listItem.textContent = orderItem;
    orderList.appendChild(listItem);
}

// Función para enviar el pedido y limpiar lista y formulario
function submitOrder() {
    // Obtener lista de pedidos
    const orderListItems = document.getElementById('orderList').getElementsByTagName('li');
    const orders = [];

    // Recorrer cada ítem de la lista y extraer la descripción y precio
    for (let i = 0; i < orderListItems.length; i++) {
        const orderText = orderListItems[i].textContent.trim();
        const [description, priceStr] = orderText.split(' - $');
        const price = parseFloat(priceStr);
        orders.push({ description, price });
    }

    // Guardar lista de pedidos en localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Limpiar lista de pedidos y formulario
    const orderListElement = document.getElementById('orderList');
    orderListElement.innerHTML = '';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('menu').selectedIndex = 0;
    document.getElementById('drink').checked = false;

    alert('¡Pedido enviado! Gracias por tu orden.');
}