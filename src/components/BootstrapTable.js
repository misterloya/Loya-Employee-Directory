import {Table as BootstrapTable} from "react-bootstrap"

export default function Table(props) {
    return (
        <div>
            <BootstrapTable striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo </th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.employees.map(employee => (
                    <tr>
                        <td><img src={employee.picture.thumbnail} alt={employee.name.first}></img></td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.login.username}</td>
                    </tr>
                       ))}
                  
                </tbody>
                </BootstrapTable>
        </div>
    )
}



