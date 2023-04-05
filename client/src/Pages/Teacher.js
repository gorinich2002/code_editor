import { useEffect, useState } from "react";
import { Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { $authHost, $host } from "../http";

export default function Teacher() {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        $authHost.get('user/all').then(data => {
            console.log(data)
            setUsers(data.data.users)
        });
        $authHost.get('groups/all').then(data => {
            console.log(data)
            setGroups(data.data.groups);
        });
    }, [])
    return <>
        <ListGroup>
            {users.map(e => <ListGroupItem key={e.id}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <h2>{e.email}</h2>
                    <Form.Select aria-label="Группа" style={{ maxWidth: '500px' }} >
                    <option>Группа</option>

                        {groups.map(e=><option value={e.id}>{e.name}</option>)}

                    </Form.Select>
                </div>
            </ListGroupItem>)}
        </ListGroup>
    </>
}