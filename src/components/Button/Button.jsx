//сборщик упрощает импорт стилей только в компонент
import "./styles.css";

function Button() {
  const isGetButton = true;
  const buttonType = 'submit';

  //маленький возврат без скобок
  //большой возврат берётся в скобки по слова return
  return (
    <button className="main-button" type={buttonType}>{isGetButton ? "GET" : "SEND"}</button>
  );
}

//экспорт по умолчанию
//такой эекспорт должен быть только один
export default Button;
