import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function Homework03() {
  return (
    <div className="homework03-container">
      <form className="form-container">
        <Input
          id="input"
          name="email"
          placeholder="Enter your email"
          label="Email*"
        />
        {/* по умолчанию: type='text' для для input*/}
        <Button name="SEND EMAIL" />
        {/* по умолчанию: type='submit' для для button*/}
      </form>
    </div>
  );
}

export default Homework03;
