Create a functional and responsive cart page using HTML, CSS, and JavaScript. The cart items should be dynamically loaded from a provided JSON API.The design for the cart page can be accessed via Figma or the attached design image, which showcases the layout, typography, and styles to follow.
1. **HTML Structure:**
    - Implement the structure of the cart page according to the provided design.
    - Sections to include:
        - Header (Logo, Navigation links, Cart icon).
        - Cart content area (list of cart items, subtotal, total, and checkout button).
        - Cart totals section displaying the subtotal and total price.
        - Footer with service icons like "High Quality," "Warranty Protection," etc.
2. **CSS Styling:**
    - Match the styling from the provided design.
    - Ensure that the cart page is **responsive** (mobile-friendly and tablet view).
    - For desktop, use a two-column layout where the cart items are on the left and cart totals on the right.
3. **JavaScript Functionality:**
    - Fetch the cart data from the JSON API and dynamically display the cart items.
    - Each cart item should display:
        - Product image.
        - Product title.
        - Price.
        - Quantity (with a number input field to allow users to change the quantity).
        - Subtotal for each item (price multiplied by quantity).
        - A trash icon to remove items from the cart.
        - Dynamically calculate and display the subtotal and total prices in the "Cart Totals" section.
        - Implement functionality for the "Check Out" button.
  4. **Features to Implement:**
        - Fetch Cart Data: Retrieve the cart items using JavaScript's `fetch()` method and populate the cart page dynamically.
        - Quantity Update: Allow the user to change the quantity of the cart items. This should update the subtotal for the individual product and the total cart           value.
        - Remove Item: Clicking the trash icon next to any cart item should remove that item from the cart, updating the total accordingly.
        - Currency Formatting: Display prices in Indian Rupees (₹) with proper formatting.
6. **Bonus (Optional):**
        - Local Storage for Cart: Persist the cart state (items, quantities) in the browser's local storage so the cart contents are retained after page refresh.
        - Modal Popup for Item Removal Confirmation: Before removing an item from the cart, display a confirmation modal asking the user to confirm the removal.
        - Loader Animation: Show a loading animation while the cart data is being fetched from the API.
