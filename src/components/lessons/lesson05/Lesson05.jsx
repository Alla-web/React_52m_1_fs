import "./styles.css";
import AnimalCard from "../../AnimalCard/AnimalCard";

import { animalData } from "./data";
import { v4 } from "uuid";

function Lesson05() {
  //с помощью map на основе данных animalData мы создаём масисв готовых элементов для
  //их отображения на экране
  const animalCards = animalData.map((animalData) => {
    return(
        <div key={v4()}>
        <h1>Madagaskar</h1>
        <AnimalCard 
        //ключ - дополнительный атрибут, который требуется при работе с массивом элементов,
        //который мы получили при работе с map. Он требуется для оптимизации работы React и
        //должен быть уникальным
        // key={animalData.id}

        //npm install uuid - команда для установки библиотеки генерирующей id
        //теперь генерируем ключ:
        //этот ключ должен быть в главной обёртке компонента
        // key={v4()}
        animalName={animalData.name}
        animalSpecies={animalData.species}
        animalImg={animalData.image}
        />
        </div>
    )
  });

  console.log(animalCards);

  return (<div className="lesson05-container">
    {animalCards}
  </div>);
}

export default Lesson05;
