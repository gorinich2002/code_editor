import { useEffect, useState } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { $authHost, $host } from "../http";

export default function Teacher() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        $authHost.get('user/all').then(data=>{
            console.log(data)
            setUsers(data.data.users)
        });
    },[])
    return <>
        <ListGroup>
            {users.map(e=><ListGroupItem key={e.id}>
                <div style={{display: "flex", justifyContent:"space-around"}}>
                    <h2>{e.email}</h2>
                    <Form.Control style={{maxWidth:'500px'}} type="email" placeholder="Группа" />
                </div>
            </ListGroupItem>)}
        </ListGroup>
    </>
}