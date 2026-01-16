# Purpose of this project:

This project demonstrates building a e-commerce store using **React** (a JavaScript library).  
It uses **Bootstrap** for responsive styling and fetches products from an external API.  
Each product has a unique ID for dynamic routing.

## Homepage:

- Displays all products in a responsive grid.
- Live search bar that filters products as you type.
- Each product card has "Add to Cart" and "View Product" buttons.
- View Product links to the single product detail page using the product's unique ID.

## About

- Shows company vision and information.
- Includes a personal card with title, image, and details.

## Contact:

- Form with four required fields:
  - Full Name (min 3 characters).
  - Subject (min 3 characters).
  - Email (must be valid email address).
  - Message/Body (min 3 characters).
- Live validation with red error messages below each field.
- Submit button disabled until form is valid.
- On submit: console.log form data and clear form.

- Full name
- Subject
- Email
- Message
- Submit button
- And shows error message if not fully implemented the requirements ( email must be valid email address, and the others have a number or characters of at least 3. )

## cartpage

- Lists all added products with details (title, price/discount, image, rating, etc.)
- Shows total price at the bottom.
- "Proceed to Checkout" button.

## Checkout & Success

- Checkout page (listing + total)
- Checkout Success page: shows "Order Successful!", clears the cart, and has "Back to Store" link.

## Extra Polish

- Meta tags + Open Graph for SEO and social sharing.
- Compressed About page image for faster loading.
