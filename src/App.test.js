import { render, screen } from '@testing-library/react';
import App from './App';


test("Submit",()=>{
  render(<App />)

const buttonElem =screen.getByRole("button",{name :'Register',exact:false})
expect(buttonElem).toBeInTheDocument()
 
})

test("Login Form",()=>{
  const {getByText}=render (<App/>);
  const formValue=getByText('Login Form')
  expect(formValue).toBeInTheDocument();
 
})

test("Email",()=>{
  const components=render (<App/>);
 const emailformValue=components.getByPlaceholderText("Email")
  expect(emailformValue).toBeInTheDocument();
 

})
  test("Name",()=>{
    const components=render (<App/>);
   const nameformValue=components.getByText("Name")
    expect(nameformValue).toBeInTheDocument();
 

  })
 test("Pass",()=>{
   const components=render (<App/>);
  const passformValue=components.getByText("Password")
   expect(passformValue).toBeInTheDocument();
 

 })
 test("Confirm Pass",()=>{
  const components=render (<App/>);
 const confformValue=components.getByText("Confirm Password")
  expect(confformValue).toBeInTheDocument();


})