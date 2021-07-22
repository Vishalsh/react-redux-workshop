import React, { useState, useEffect } from "react";
import { getDefaultPrice } from "../../service";
import { useConfigurableComponents } from './ConfigurableComponentsContext';

const Price = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const { configurableComponents } = useConfigurableComponents();

  const getAddOnPrice = () => {
    return Object.keys(configurableComponents).reduce((totalAddOnPrice, component) => {
      return totalAddOnPrice + configurableComponents[component].find(variant => variant.selected).addOnPrice
    }, 0);
  }

  useEffect(() => {
    setLoading(true);
    getDefaultPrice()
      .then((data) => {
        setPrice(data.value);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div className="price container">
      <div className="price__content">
        <h1 className="price__value">
          Total:
          {
            loading ?
              <>{` loading...`}</>
              :
              error ?
                'Something went wrong. Please try again later'
                :
                <span data-testid="total-price">{` ₹${price + getAddOnPrice()}`}</span>
          }
        </h1>
      </div>
    </div>
  )
}

export default Price;