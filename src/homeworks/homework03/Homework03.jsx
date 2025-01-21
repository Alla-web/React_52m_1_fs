import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button"

function Homework03() {
  return (
    <div className="homework03-container">
      <Input name='email' type='text' placeholder='Enter your email' label='Email' id='input-component'/>
      <Button name="SEND DATA"/>
    </div>
  );
}

export default Homework03;
