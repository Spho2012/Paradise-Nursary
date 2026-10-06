import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

// Simple inline SVG thumbnail so images always load. Replace `image` with real photo URLs if you like.
const leaf = (bg, fg = '#2d6a4f') =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${bg}"/>` +
      `<rect x="80" y="130" width="40" height="50" rx="6" fill="#b5651d"/>` +
      `<path d="M100 135 C40 110 50 50 100 40 C150 50 160 110 100 135Z" fill="${fg}"/>` +
      `<path d="M100 135 L100 55" stroke="#fff" stroke-width="3" opacity=".6"/></svg>`
  );

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: 15, image: leaf('#e3f1e7') },
      { name: 'Spider Plant', cost: 12, image: leaf('#e3f1e7', '#40916c') },
      { name: 'Peace Lily', cost: 18, image: leaf('#e3f1e7', '#1b4332') },
      { name: 'Boston Fern', cost: 20, image: leaf('#e3f1e7', '#52b788') },
      { name: 'Rubber Plant', cost: 17, image: leaf('#e3f1e7', '#2d6a4f') },
      { name: 'Aloe Vera', cost: 14, image: leaf('#e3f1e7', '#74c69d') },
    ],
  },
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', cost: 20, image: leaf('#efe6f7', '#7b5ea7') },
      { name: 'Jasmine', cost: 18, image: leaf('#efe6f7', '#6a994e') },
      { name: 'Rosemary', cost: 15, image: leaf('#efe6f7', '#386641') },
      { name: 'Mint', cost: 12, image: leaf('#efe6f7', '#52b788') },
      { name: 'Lemon Balm', cost: 14, image: leaf('#efe6f7', '#a7c957') },
      { name: 'Basil', cost: 10, image: leaf('#efe6f7', '#2d6a4f') },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      { name: 'Jade Plant', cost: 16, image: leaf('#fbf0d9', '#40916c') },
      { name: 'Echeveria', cost: 11, image: leaf('#fbf0d9', '#8fb996') },
      { name: 'Zebra Haworthia', cost: 13, image: leaf('#fbf0d9', '#2d6a4f') },
      { name: 'Barrel Cactus', cost: 19, image: leaf('#fbf0d9', '#52796f') },
      { name: 'String of Pearls', cost: 17, image: leaf('#fbf0d9', '#74c69d') },
      { name: 'Burro\'s Tail', cost: 15, image: leaf('#fbf0d9', '#6a994e') },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  return (
    <div className="product-page">
      {plantsArray.map((group) => (
        <section className="category" key={group.category}>
          <h2>{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p className="price">${plant.cost}</p>
                <button
                  className="btn"
                  disabled={isInCart(plant.name)}
                  onClick={() => dispatch(addItem(plant))}
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
