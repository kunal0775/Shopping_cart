import React from 'react'
import '../styling/cart-page/cart-page.scss';

const cardData = [
    {
      id: 1,
      title: "Formal white shirt",
      image: "https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg",
      size: "Large",
      price: "₹ 684",
    },
];

const CartPage = () => {
  return (
    <div>
         
    <div className='flexbox'>
        <div className="shopping-card-container">
            {cardData.map((item) => (
        <div key={item.id} className="shopping-box">
        
                <div className='flexbox'>
                    <p>Shopping Cart</p>
                    <p>Price</p>
                </div>
                <hr/>
        <div className='flexbox'>
                <img className='img3s' src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p className='price'>Size: {item.size}</p>

                <div className='button-point'>
                    <button>🗑️</button>
                    <button> 1 </button>
                    <button>+</button>
                </div>

          </div>
                <p className='price'>{item.price}</p>
        </div>

        </div>
      ))}
    </div>
                <div className='buy-box'>
                    <p><b>Subtotal (1 item):</b>₹ 710</p>
                    <button className='buy-button'>Proceed to buy</button>
                </div>
    </div>
    </div>
  )
}

export default CartPage;
