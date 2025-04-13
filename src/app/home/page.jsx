import React from 'react'
import '../styling/home/home.scss';

const cardData = [
    {
      id: 1,
      title: "Formal white shirt",
      image: "https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg",
      price: "₹ 684",
    },
    {
      id: 2,
      title: "Stripped shirt",
      image: "https://m.media-amazon.com/images/I/711aUSDW66L._AC_UL480_QL65_.jpg",
      price: "₹ 565",

    },
    {
        id: 3,
        title: "Blue casual shirt",
        image: "https://m.media-amazon.com/images/I/51fVQasKeNL._AC_UL480_QL65_.jpg",
        price: "₹ 654",

      },
      {
        id: 4,
        title: "Green outing shirt",
        image: "https://m.media-amazon.com/images/I/714r0xXLL6L._AC_UL480_QL65_.jpg",
        price: "₹ 766",

      },
      {
        id: 5,
        title: "Denim shirt",
        image: "https://m.media-amazon.com/images/I/81uTb5UwUgL._AC_UL480_QL65_.jpg",
        price: "₹ 876",

      },
      {
        id: 6,
        title: "Denim pink shirt",
        image: "https://m.media-amazon.com/images/I/71YpLqxFChL._AC_UL480_QL65_.jpg",
        price: "₹ 467",

      },
      {
        id: 7,
        title: "Navy casual shirt",
        image: "https://m.media-amazon.com/images/I/51-pLhPHoBL._AC_UL480_QL65_.jpg",
        price: "₹ 643",

      },
      {
        id: 8,
        title: "Checked casual half shirt",
        image: "https://m.media-amazon.com/images/I/71D-olo8gXL._AC_UL480_QL65_.jpg",
        price: "₹ 545",

      },
      {
        id: 9,
        title: "Checked casual full shirt",
        image: "https://m.media-amazon.com/images/I/61UoMHRthTL._AC_UL480_QL65_.jpg",
        price: "₹ 684",

      },
      {
        id: 10,
        title: "Linning full shit",
        image: "https://m.media-amazon.com/images/I/71BfHmJgTtL._AC_UL480_QL65_.jpg",
        price: "₹ 763",

      },
      {
        id: 11,
        title: "Blue dotted shirt",
        image: "https://m.media-amazon.com/images/I/61BQlmyg41L._AC_UL480_QL65_.jpg",
        price: "₹ 812",

      },
      {
        id: 12,
        title: "Checked yellow shirt",
        image: "https://m.media-amazon.com/images/I/71uJmh8dJAL._AC_UL480_QL65_.jpg",
        price: "₹ 699",

      },
];

const HomePage = () => {

  return (
    <div>
      <h2>Product List</h2>

      <div className="card-grid">
      {cardData.map((item) => (
        <div key={item.id} className="card">
            <div className='img-container'>
          <img src={item.image} alt={item.title} />
          </div>

          <h3>{item.title}</h3>
          <div className='flex-content'>
          <p>{item.price}</p>
          <button className='add-button' id={item.id}>add items</button>
          </div>

        </div>
      ))}
    </div>

    </div>
  )
}

export default HomePage;
