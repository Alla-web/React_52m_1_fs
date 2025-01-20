import "./styles.css";
import { homeworkData } from "./data";

//Создайте компонент "ProfileCard" в папке "components". В нем нужно создать карточку с
// информацией о вымышленном пользователе со следующими данными:
// аватар(можно не ваш, а просто какую-нибудь картинку как ссылку)
// имя и фамилия
// род деятельности
// хобби

function ProfileCard() {
  return (
    <div className="profileCard-container">
      <img src={homeworkData.avatar} alt="avatar"></img>
      <p><b>Firstname: </b>{homeworkData.firstname}</p>
      <p><b>Lastname: </b>{homeworkData.lastname}</p>
      <p><b>Activities: </b>{homeworkData.activities}</p>
      <p><b>Hobby: </b>{homeworkData.hobby}</p>
    </div>
  );
}

export default ProfileCard;
