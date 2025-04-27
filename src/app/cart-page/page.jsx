"use client";

import { useState } from 'react'
import '../styling/cart-page/cart-page.scss';

const initialData = [
    {
      id: 1,
      title: "Formal white shirt",
      image: "https://m.media-amazon.com/images/I/61idJrfaIRL._AC_UL480_QL65_.jpg",
      size: "Large",
      price: 684,
      order_qty:2,
    },
];

const calculateTotal = () => {
  return initialData.reduce((sum, item) => sum + item.price * item.order_qty, 0);
};

const CartPage = () => {
  const [cardData, setCardData] = useState(initialData);

  const handleAddCart = (e) => {
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty + 1 };
        }
        return item;
      });
    }
    );
  }
  const handleIncrement = (e) => {
    console.log(e.target.id);
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty + 1 };
        }
        return item;
      });
    }
    );
  }

  // const handlePrice = (e) => {
  //   setCardData((prevData) => {
  //     return prevData.map((item) => {
  //       if (item.id === parseInt(e.target.id)) {
  //         return { ...item, price: item.price * item.order_qty};
  //       }
  //       return item;
  //     });
  //   }
  //   );
  // }

  const handleDecrement = (e) => {
    setCardData((prevData) => {
      return prevData.map((item) => {
        if (item.id === parseInt(e.target.id)) {
          return { ...item, order_qty: item.order_qty -1 };
        }
        return item;
      });
    }
    );
  }
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
              <p className='size'>Size: {item.size}</p>
        
              <div className='button-point'>
                  <button id={item.id} onClick={handleDecrement}>{item.order_qty>1?"-":"🗑️"}</button>
                  <button> {item.order_qty} </button>
                  <button id={item.id} onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className='price'>{item.price}</p>
        </div>
        </div>

      ))}
    </div>
                <div className='buy-box'>
                    <p ><b>Subtotal (1 item):</b> ₹{calculateTotal()}</p>
                    <button className='buy-button'>Proceed to buy</button>
                </div>
    </div>
    </div>
  )
}

export default CartPage;
