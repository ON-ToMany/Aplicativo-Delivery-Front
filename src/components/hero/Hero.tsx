import './Hero.css';
import foodTruckImg from '../../assets/img/hero.friendlyfood.png'; 

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${foodTruckImg})` }}>
      <div className="hero-overlay">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="first-letter">F</span>FRIENDLY <br />
              <span className="first-letter">F</span>FOOD
            </h1>
            
            <p className="hero-subtitle">
              Compartilhando refeições e espalhando solidariedade
            </p>
            
            <div className="hero-actions">
              <button className="btn-donate">Faça uma doação</button>
              <button className="btn-location">Onde estamos</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;