import { useState } from "react";
import "./App.css";
import FormLogin from "./Components/FormLogin";

const App = () => {

  const [formValues, setformValues] = useState({
    name: "",
    email: "",
    mobile:"",
    dateofbirth:"",
    Gender: "",
    password: "",
    confirmPassword: "",
    accepttermscondition:"",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name field is required!",
      label: <b>Name</b>,
      pattern: "^[A-Za-z0-9-_ ]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email field is required!!",
      label: <b>Email</b>,
      required: true,
    },
    {
      id:3,
      name:"mobile",
      type:"number",
      placeholder:"Mobile",
      errorMessage:"Mobile field is required!",
      pattern:"[0-9] {10}",
      label:<b>Mobile</b>,
      required:true,
    },
  
 { id:4,
name: "dateofbirth",
type :"date",
placeholder:"Date of Birth",
label: <b>D.O.B</b>,

  },
  {id:5,
    label:<b>Gender</b>,
    type:"hidden",
    errorMessage:"This field is mandatory",
    

  },
    {
  id:6,
name:"optional",
label:"Male",
type:"radio",
gender:"Male",
required: true,

    },
    {
     id:7,
      name:"optional",
      label:"Female",
      type:"radio",
      gender:"Female",
      errorMessage:"This field is mandatory",
      required: true,
          },
   
    {
      id: 8,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 4-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: <b>Password</b>,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 9,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: <b>Confirm Password</b>,
      pattern: formValues.password,
      required: true,
    },
    {
      id :10,
      type:"checkbox",
       label:<b>Accept terms conditions</b>,
      
      errorMessage :"Accept term and condition",
      
      required:true,
      
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =new FormData(e.target)
 console.log(Object.fromEntries(data.entries())) 
  };

  const onChange = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="app"> 
      
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        {inputs.map((input) => (
          <FormLogin
            key={input.id}
            {...input}
            value={formValues[input.name]}
            //
            onChange={onChange}
          />
        ))}
        <button>Register</button>

      </form>
    </div>
  );
};

export default App;

