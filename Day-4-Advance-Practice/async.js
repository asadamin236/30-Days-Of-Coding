// =================================================================
// 🧠 DATA MANIPULATION MASTER CHALLENGE (Clean Code)
// Module: E-COMMERCE DATA HANDLER
// =================================================================

// --- SECTION 1: CORE DATA ---
const INVENTORY = [
  {
    id: 101,
    name: "Laptop X1",
    category: "Electronics",
    price: 1200.0,
    stock: 15,
  },
  { id: 102, name: "T-Shirt Pro", category: "Apparel", price: 25.5, stock: 40 },
  { id: 103, name: "Coffee Mug", category: "Home", price: 8.0, stock: 100 },
  {
    id: 104,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 99.99,
    stock: 5,
  },
  {
    id: 105,
    name: "Jeans SlimFit",
    category: "Apparel",
    price: 75.0,
    stock: 0,
  },
  {
    id: 106,
    name: "4K Monitor",
    category: "Electronics",
    price: 350.5,
    stock: 20,
  },
];

let cart = []; // User's current cart
//Question No 1: Find all the products whose price is greater than 100

const filterProducts = INVENTORY.filter(function (value) {
  if (value.price >= 100) {
    console.log(value);
  }
});

const discountList = INVENTORY.map(function (product) {
  const { id, price } = product;

  const discount = price * 0.1;
  const discountPrice = price - discount;
  return {
    id: id, // key aur value same hai
    discountPrice: Number(discountPrice.toFixed(2)), // Floating point safe karna zaroori hai
  };
});

console.log(discountList);

// --- SECTION 2: UTILITY FUNCTIONS (Corrected & Optimized) ---

// 1. Corrected: Finds a single product object
const getProductById = (id) => {
  return INVENTORY.find((p) => p.id === id); // Use find() for a single item
};

// 2. Corrected: Calculates total, safe for floating points
const calculateTotal = (currentCart) => {
  const rawTotal = currentCart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return Number(rawTotal.toFixed(2)); // Ensures proper currency calculation
};

// 3. Corrected: Display info using correct property names
const displayProductInfo = (product) => {
  // Note: The product object has 'name', not 'product_name'
  const { name, category, price } = product;
  console.log(`\nItem: ${name} | Category: ${category} | Price: $${price}`);
};

// --- SECTION 3: CHALLENGE OPERATIONS ---

// Function to safely update cart (Using Spread/Rest for Immutability)
const updateCart = (newCartItem) => {
  // FIX: Using Spread Operator for creating a shallow copy (Immutability)
  cart = [...cart, newCartItem];
};

// Function to safely update stock (Using Map for Immutability)
const updateInventoryStock = (productId, quantity) => {
  // FIX: Using Map to update the item without mutating the array directly
  // (In a real app, this array would be a state variable or database).
  INVENTORY.map((p) => {
    if (p.id === productId) {
      return { ...p, stock: p.stock - quantity };
    }
    return p;
  });
};

// --- SECTION 4: DEMO EXECUTION ---

async function main() {
  console.log("--- System Initialized ---");
  displayProductInfo(getProductById(104));

  // Demo: Add items to cart
  updateCart({ id: 104, name: "Keyboard", price: 99.99, quantity: 2 });
  updateCart({ id: 103, name: "Mug", price: 8.0, quantity: 5 });

  console.log(`\nCart Total: $${calculateTotal(cart)}`);
  // NOTE: This main function is a clean base for your challenges below.
}

main();
// =================================================================
