import "./styles.css";
import { homeworkData } from "./data";

//импорт картинки
// import userAvatar from "../../assets/foto/employee.jpg";

//Создайте компонент "ProfileCard" в папке "components". В нем нужно создать карточку с
// информацией о вымышленном пользователе со следующими данными:
// аватар(можно не ваш, а просто какую-нибудь картинку как ссылку)
// имя и фамилия
// род деятельности
// хобби

function ProfileCard() {
  //деструктуризация
  //создали отдельные переменнные bp 
  const { avatar, firstname, lastname, profession, hobby } = homeworkData;

  return (
    <div className="profileCard-container">
      <h3>Profile information</h3>
      {/* 1-й вариант */}
      {/* <img src={homeworkData.avatar} alt="avatar" className="profile-img"></img> */}
      {/* 2-й вариант */}
      <img src={avatar} alt="avatar" className="profile-img"></img>
      <p>
        <b>Firstname: </b>
        {firstname}
      </p>
      <p>
        <b>Lastname: </b>
        {lastname}
      </p>
      <p>
        <b>Profession: </b>
        {profession}
      </p>
      <p>
        <b>Hobby: </b>
        {hobby}
      </p>
    </div>
  );
}

export default ProfileCard;
