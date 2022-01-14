import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ticket.css"

export const TicketList = () => {
  const [tickets, updateTickets] = useState([])
  const history = useHistory()
  
  useEffect(() => {
    fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
      .then((res) => res.json())
      .then((TicketArray) => {
        updateTickets(TicketArray);
      });
  }, []);

  return (
    <>
      <div>
        <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
      </div>
      <div className="tickets__list">
      {tickets.map((ticketObj) => {
        return <p key={`ticket--${ticketObj.id}`} className={`ticket--${ticketObj.id} ${ticketObj.emergency ? `emergency` : ``}`}>
            -{ticketObj.emergency ? "🚑" : ""} {ticketObj.description} submitted by {ticketObj.customer.name} and worked on by {ticketObj.employee.name}
        
        </p>;
      })}
      </div>
    </>
  );
};
