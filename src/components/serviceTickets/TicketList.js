import React, { useEffect, useState } from "react";

export const TicketList = () => {
  const [tickets, updateTickets] = useState([])
  useEffect(() => {
    fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
      .then((res) => res.json())
      .then((TicketArray) => {
        updateTickets(TicketArray);
      });
  }, []);

  return (
    <>
      {tickets.map((ticketObj) => {
        return <div key={`ticket--${ticketObj.id}`}>
            <p>{ticketObj.description} Submitted by {ticketObj.customer.name} and worked on by {ticketObj.employee.name}</p>
        
        </div>;
      })}
    </>
  );
};
