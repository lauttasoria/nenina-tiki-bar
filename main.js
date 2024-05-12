/// Función para agregar un pedido al carrito
function addOrder() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const menuItem = document.getElementById('menu').value;
  const drinkCheckbox = document.getElementById('drink');
  const hasDrink = drinkCheckbox.checked;

  let price;
  switch (menuItem) {
      case 'hamburguesa':
          price = 10;
          break;
      case 'pizza':
          price = 12;
          break;
      case 'ensalada':
          price = 8;
          break;
      default:
          price = 0;
          break;
  }

  if (hasDrink) {
      price += 3; // Incremento de precio por bebida
  }

  const orderItem = `${menuItem} - $${price}`;

  const orderList = document.getElementById('orderList');
  const listItem = document.createElement('li');
  listItem.textContent = orderItem;
  orderList.appendChild(listItem);

  // Guardar pedido en localStorage
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({ name, email, item: menuItem, price });
  localStorage.setItem('orders', JSON.stringify(orders));
}

// Manejar el envío del formulario
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir envío por defecto del formulario
  alert('¡Pedido enviado! Gracias por tu orden.');
  // Puedes agregar aquí lógica adicional como enviar los datos a un servidor, etc.
});