import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import "./styles.css";
//групповой импорт объектов
import { lionData, zebraData, hippoData } from "./data";

function Lesson_03() {
  return (
    <div className="lesson03-container">
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species} 
        animalImg={lionData.image}
      />
      {/* если мы используем при создании компонента prop children при создании компонента, 
      появляется возможность добавлять структуру в компонент, 
      передавая между открывающим и закрывающим тегом вызова компонета */}
     
      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}        
      >
      <div>The main animal</div>
      <Button name="Get more info"></Button>
      </AnimalCard>
      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
      />
      {/* при вызове компонента Button передаём значение для свойства name объекта Props */}
      <Button name="Send data" />
      <Button name="Get data" />
      <Button />
    </div>
  );
}

export default Lesson_03;
