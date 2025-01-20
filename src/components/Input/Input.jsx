import "./styles.css";

function Input({name, type, placeholder, label}) {
  return (
    <div className="input-container">
      <label htmlFor='input-component'>{label}</label>
      <input name={name} type={type} placeholder={placeholder} id='input-component'></input>
    </div>
  );
}

export default Input;
