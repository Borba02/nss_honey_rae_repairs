import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { TicketForm } from "./serviceTickets/TicketForm.js";
import { TicketList } from "./serviceTickets/TicketList.js";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/hiring">
                <EmployeeForm />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>    
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}