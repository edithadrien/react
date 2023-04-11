
import '../index.css';
import Employee from '../components/Employee';
import {useState} from "react"; 
import {v4 as uuidv4} from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';

function Employees() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "Suzy", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg",
      },
        {
        id: 2,
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      },
      {
        id: 3,
        name: "Matthew", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg",
      },
      {
        id: 4,
        name: "Gina", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      },
      {
        id: 5,
        name: "Margaret", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/1181524/pexels-photo-1181524.jpeg",
      }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee]);

  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ? (
        <>
          
            <div className='flex flex-wrap justify-center'>
              {employees.map((employee) => {
                const editEmployee = (
                <EditEmployee 
                    id={employee.id}
                    name={employee.name} 
                    role={employee.role}
                    updateEmployee={updateEmployee}
                />
            );
                return (
                  <Employee 
                      key={employee.id}
                      id={employee.id}
                      name={employee.name}
                      role={employee.role} 
                      img={employee.img}
                      editEmployee={editEmployee} //the editEmployee variable is passed here wich is a component
                />
              )})}              
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )
      }
    </div>
  );
}

export default Employees;
