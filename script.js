document.addEventListener("DOMContentLoaded", () => {
  const cartData = {
    original_total_price: 250000,
    items: [
      {
        id: 49839206859071,
        quantity: 1,
        title: "Asgaard sofa",
        price: 25000000,
        featured_image: {
          url: "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
        },
      },
    ],
    currency: "INR",
  };

  const cartItemsBody = document.getElementById("cart-items-body");
  const subtotalElement = document.querySelector(".subtotal");
  const totalElement = document.querySelector(".total");
  const noItemsMessage = document.getElementById("no-items-message");

  const formatPrice = (price) => `₹${(price / 100).toFixed(2)}`;

  const calculateTotals = (items) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    subtotalElement.textContent = formatPrice(subtotal);
    totalElement.textContent = formatPrice(subtotal);
  };

  const updateItemSubtotal = (item, itemSubtotalElement) => {
    itemSubtotalElement.textContent = formatPrice(item.price * item.quantity);
  };

  const renderCart = () => {
    const items = cartData.items;

    // Clear the cart table before rendering
    cartItemsBody.innerHTML = "";

    if (items.length === 0) {
      // Show the no-items message and hide the table
      noItemsMessage.style.display = "block";
      subtotalElement.textContent = formatPrice(0);
      totalElement.textContent = formatPrice(0);
      return;
    } else {
      // Hide the no-items message if items exist
      noItemsMessage.style.display = "none";
    }

    items.forEach((item) => {
      const row = document.createElement("tr");
      const imageCell = document.createElement("td");
      const productImage = document.createElement("img");
      productImage.src = item.featured_image.url;
      productImage.alt = item.title;
      productImage.style.width = "50px";
      imageCell.appendChild(productImage);

      const titleCell = document.createElement("td");
      titleCell.textContent = item.title;

      const priceCell = document.createElement("td");
      priceCell.textContent = formatPrice(item.price);

      const quantityCell = document.createElement("td");
      const quantityInput = document.createElement("input");
      quantityInput.type = "number";
      quantityInput.min = 1;
      quantityInput.value = item.quantity;
      quantityInput.classList.add("quantity-input");

      quantityInput.addEventListener("input", () => {
        item.quantity = parseInt(quantityInput.value, 10) || 1;
        updateItemSubtotal(item, itemSubtotal);
        calculateTotals(items);
      });

      quantityCell.appendChild(quantityInput);

      const itemSubtotal = document.createElement("td");
      itemSubtotal.classList.add("item-subtotal");
      itemSubtotal.textContent = formatPrice(item.price * item.quantity);

      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "🗑️";
      deleteButton.style.cursor = "pointer";
      deleteButton.style.background = "none";
      deleteButton.style.border = "none";

      deleteButton.addEventListener("click", () => {
        const index = items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          items.splice(index, 1);
          renderCart(); // Re-render the cart to reflect the changes
        }
      });

      deleteCell.appendChild(deleteButton);

      row.appendChild(imageCell);
      row.appendChild(titleCell);
      row.appendChild(priceCell);
      row.appendChild(quantityCell);
      row.appendChild(itemSubtotal);
      row.appendChild(deleteCell);

      cartItemsBody.appendChild(row);
    });

    calculateTotals(items);
  };

  renderCart();

  document.querySelector(".checkout-button").addEventListener("click", () => {
    alert("Proceeding to checkout!");
  });
});
