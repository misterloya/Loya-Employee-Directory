import {Table as BootstrapTable} from "react-bootstrap"

export default function Table(props) {
    return (
        <div>
            <BootstrapTable striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.employees.map(employee => (
                    <tr>
                        <td>1</td>
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



