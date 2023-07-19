
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
 
    const [formValues, setFormValues] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues)
    };

  const ChangeValue = ()=>{}
const fields=[
  {name:"Name",type:"text",label:"Name"},
  {name:"Email",type:"email",label:"Email"},
  {name:"Password",type:"password",label:"Password"}
]
  return (
    <div>
        {/* Do not remove the main div */}
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App
