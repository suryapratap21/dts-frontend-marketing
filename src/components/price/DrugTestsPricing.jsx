"use client";

import React, { useEffect, useRef, useState } from "react";

const drugTestsList = [
  {
    id: "pre-employment",
    title: "Pre Employment",
    price: 75,
    description: "Drug test for pre employment",
    discountedPrice: 60,
  },
  {
    id: "post-accident",
    title: "Post Accident",
    price: 95,
    description: "Post accident drug test",
    discountedPrice: 80,
    isObserved: true,
  },
  {
    id: "random",
    title: "Random",
    price: 75,
    description: "Random drug test",
    discountedPrice: 60,
  },
  {
    id: "reasonable-suspicion",
    title: "Reasonable Suspicion",
    price: 75,
    description: "Drug test for reasonable suspicion",
    discountedPrice: 60,
  },
  {
    id: "return-to-duty",
    title: "Return to Duty",
    price: 95,
    description: "Drug test for return to duty",
    discountedPrice: 80,
  },
  {
    id: "follow-up",
    title: "Follow Up",
    price: 95,
    description: "Follow up drug test",
    discountedPrice: 80,
  },
  {
    id: "breath-alcohol-test",
    title: "Breath Alcohol Test",
    price: 85,
    description: "Breath alcohol test",
    discountedPrice: 75,
  },
];

const DrugTestsPricing = ({}) => {
  return (
    <div className="container">
      <div className="row g-3">
        {drugTestsList.map((test) => (
          <TestPricingElement test={test} key={test.id} />
        ))}
      </div>
    </div>
  );
};

const TestPricingElement = ({ test }) => {
  //   const [quantity, setQuantity] = useState(1);
  //   const [total, setTotal] = useState(test.price * quantity);
  //   const [discountedTotal, setDiscountedTotal] = useState(
  //     test.discountedPrice * quantity
  //   );
  //   const quantityRef = useRef(null);

  //   useEffect(() => {
  //     setTotal(test.price * quantity);
  //     setDiscountedTotal(test.discountedPrice * quantity);
  //   }, [quantity]);

  return (
    <div className="col-xl-6">
      <div className="single-price-box">
        <div className="price-header">
          <div>
            <h3>{test.title}</h3>
            <p>{test.description}</p>
          </div>
          <div className="rounded-btn">
            <i className="fas fa-cart-plus"></i>
          </div>
        </div>
        <div className="price-footer">
          <div className="price">
            <div className="d-flex align-items-end">
              <h5 className="me-2">Member Price:</h5>
              <h2>${test.discountedPrice}</h2>
            </div>
            <div className="d-flex align-items-end">
              <p className="me-2">Regular Price:</p>
              <h4>${test.price}</h4>
            </div>
          </div>

          {/* <div className="quantity">
            <input
              type="number"
              ref={quantityRef}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="total">
            <h2>${total}</h2>
            <h4>${discountedTotal}</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DrugTestsPricing;
