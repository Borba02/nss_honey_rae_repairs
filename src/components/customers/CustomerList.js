import React, { useEffect, useState } from "react";

export const CustomerList = () => {
  const [customers, assignCustomers] = useState([]);
  const [totalCustomerMessage, updateMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then((customersArray) => {
        assignCustomers(customersArray);
      });
  }, []);

  useEffect(
      () => {
          if (customers.length === 1){
              updateMessage(`You have 1 customer`)
          }
          else {
              updateMessage(`You have ${customers.length} customers`)
          }
      },
      [customers]
  )

  return (
    <>
        <div>{totalCustomerMessage}</div>
      {customers.slice(0,5).map((customerObj) => {
        return <h3 key={`customer--${customerObj.id}`}>{customerObj.name}</h3>;
      })}
    </>
  );
};

