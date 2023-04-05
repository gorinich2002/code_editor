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

    const onChangeSelect = (userId) => (e) => {
        $authHost.post(`groups/${userId}/${e.target.value}`).then(console.log);
    }
    return <>
        <ListGroup>
            {users.map(e => <ListGroupItem key={e.id}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <h2>{e.email}</h2>
                    <Form.Select aria-label="Группа" style={{ maxWidth: '500px' }} defaultValue={e.group_id || 'defaut'} onChange={onChangeSelect(e.id)}>
                    
                        {groups.map(e=><option value={e.id}>{e.name}</option>)}
                        <option value={'defaut'}></option>
                    </Form.Select>
                </div>
            </ListGroupItem>)}
        </ListGroup>
    </>
}