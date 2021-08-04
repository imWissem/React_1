import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, Label, Input } from 'reactstrap' ;
import './App.css';

function App() {
  return (
<Form className="login-form">
  <h2> put your data </h2>
   <Label>username</Label>
    <Input type="text" placeholder="name"/>
    <Label>your email</Label>
    <Input type="email" placeholder="email"/>
    <Label>password</Label>
    <Input type="password" placeholder="password"/>
    <Button className="btn-lg btn-dark btn-block">log in</Button>
    <div className="text-center">
      <a href="/sign-up">sign up</a>
      <span className="p-2>">II</span>
      <a href="/sign-up">Forgot Password</a>
    </div>
</Form>
  );
}

export default App;
