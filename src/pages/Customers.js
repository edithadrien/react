import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { baseUrl } from "../shared";
import AddCustomer from "../components/AddCustomer";

export default function Customers(){
    const [customers, setCostumers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow(){
        setShow(!show);
    }
    
    useEffect(() => {
        const url = baseUrl + 'api/customers/';
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            setCostumers(data.customers);
        })
    }, []);

    function newCustomer(name, industry){
        const data = {name: name, industry: industry};
        const url = baseUrl + 'api/customers/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        }).then((data) =>{
            toggleShow();
            setCostumers([...customers, data.customer]);
            //assume the add was successful
            //hide the modeal
            //make sure the list is updated appropriately
        }).catch((e) => {
            console.log(e);
        })
    }

    
    return (
        <>
            <h1>Here are our customers:</h1>
            <ul>
            {customers ? customers.map((customer) => {
                return (
                            <li key={customer.id}>
                                <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                            </li>
                            );
                        
            }) : null}
            </ul>
            <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow}/>
        </>
    )
}

