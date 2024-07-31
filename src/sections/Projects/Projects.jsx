import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Ecommerce from '../../assets/ecommerce.png';
import Memorycard from '../../assets/memorycard.png';
import Battleship from '../../assets/battleship.png';
import Todo from '../../assets/todo.png';
import Library from '../../assets/library.png';
import Etchasketch from '../../assets/etchasketch.png';
import Weather from '../../assets/weather.png';
import Restaurant from '../../assets/restaurant.png';
import Tictactoe from '../../assets/xox.png';
import Calculator from '../../assets/calculator.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Ecommerce}
          link="https://github.com/semihmertdev/e-commerce-app"
          h3="E-Commerce"
        />
        <ProjectCard
          src={Memorycard}
          link="https://github.com/semihmertdev/memory-card"
          h3="Memory Card Game"
        />
        <ProjectCard
          src={Battleship}
          link="https://github.com/semihmertdev/battleship"
          h3="Battleship Game"
        />
        <ProjectCard
          src={Todo}
          link="https://github.com/semihmertdev/todo-list"
          h3="Todo App"
        />
        <ProjectCard
          src={Library}
          link="https://github.com/semihmertdev/library"
          h3="Library"
        />
        <ProjectCard
          src={Etchasketch}
          link="https://github.com/semihmertdev/Etch-a-Sketch"
          h3="Etch a Sketch"
        />
        <ProjectCard
          src={Weather}
          link="https://github.com/semihmertdev/weather-app"
          h3="Weather Forecast"
        />
        <ProjectCard
          src={Restaurant}
          link="https://github.com/semihmertdev/restaurant-page"
          h3="Restaurant Page"
        />
        <ProjectCard
          src={Tictactoe}
          link="https://github.com/semihmertdev/tic-tac-toe"
          h3="Tic Tac Toe"
        />
        <ProjectCard
          src={Calculator}
          link="https://github.com/semihmertdev/Calculator"
          h3="Calculator"
        />
      </div>
    </section>
  );
}

export default Projects;
