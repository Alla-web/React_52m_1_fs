import "./styles.css";

function Input({name, type, placeholder, label, id}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input name={name} type={type} placeholder={placeholder} id={id}></input>
    </div>
  );
}

export default Input;
