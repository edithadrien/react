
import './index.css';
import Employee from './components/Employee';
import {useState} from "react"; 
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState(
    [
      {
        name: "Suzy", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg",
      },
        {
        
        name: "Caleb", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
      },
      {
        
        name: "Matthew", 
        role: "Developer", 
        img: "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg",
      },
      {
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

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange = {(e) => {
              console.log(e.target.value);
              setRole(e.target.value);

            }} />
            <div className='flex flex-wrap justify-center'>
              {employees.map((employee) => {
                
                return (<Employee 
                key={uuidv4()}
                name={employee.name}
                role={employee.role} 
                img={employee.img}
                />
              )})}
              
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )
      }
    </div>
  );
}

export default App;
