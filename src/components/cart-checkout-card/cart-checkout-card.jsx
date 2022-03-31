import "../cartCard/cart-card.css";
import { useCartContext } from "../../contexts/Cart-context/cart-context";
import { React, Fragment, useState, useEffect } from "react";
import { calculateCartItems } from "../../utils/cart-details";
const CartCheckout = () => {
  const { cartState } = useCartContext();
  const [cartDetails, setCartDetails] = useState(0);

  useEffect(() => {
    const getDetails = cartState.reduce(
      (acum, cur) => {
        acum.CartQty += cur.qty;
        acum.totalMrp += cur.price * cur.qty;
        const [discountedPrice, sumToMinus] = calculateCartItems(cur.price, 40);
        acum.discountedPrice += sumToMinus * cur.qty;
        acum.subTotal += discountedPrice * cur.qty;
        return acum;
      },
      { CartQty: 0, totalMrp: 0, discountedPrice: 0, subTotal: 0 }
    );
    setCartDetails(getDetails);
    console.log(getDetails);
  }, [cartState]);

  return (
    <Fragment>
      <div className="rubik-font grey-0-5-bdr600 border-radius5 checkout-cart-card">
        <div className="grey-bg400 cart-checkout-head">PRICE SUMMARY</div>
        <ul className="mgn-1">
          <li className="flex jc-sb mgn-0-5--0">
            <p>Total QTY of items</p>
            <p>{cartDetails.CartQty}</p>
          </li>
          <li className="flex jc-sb mgn-0-5--0">
            <p>Total MRP (Incl. of taxes)</p>
            <p>₹{cartDetails.totalMrp?.toLocaleString("en-US")}</p>
          </li>
          <li className="flex jc-sb mgn-0-5--0">
            <p>Delivery Fee</p>
            <p>FREE</p>
          </li>
          <li className="flex jc-sb mgn-0-5--0">
            <p>Total Discount</p>
            <p>-₹{cartDetails.discountedPrice?.toLocaleString("en-US")}</p>
          </li>
          <li className="flex jc-sb mgn-0-5--0">
            <p>Subtotal</p>
            <p>₹{cartDetails.subTotal?.toLocaleString("en-US")}</p>
          </li>
        </ul>
        <p className="green-alert-light-bg green-alert-dark-color border-radius10 text-center mgn-1">
          You are saving ₹{cartDetails.discountedPrice?.toLocaleString("en-US")}{" "}
          on this order
        </p>

        <div className="flex jc-sb pd-0-5 col-gap-1">
          <div>
            <small className="font-wt-semibold">Total</small>
            <div className="font-wt-bold">
              ₹{cartDetails.subTotal?.toLocaleString("en-US")}
            </div>
          </div>
          <button className="pd-0-5--1 cart-address-btn">ADD ADDRESS</button>
        </div>
      </div>
    </Fragment>
  );
};

export { CartCheckout };
