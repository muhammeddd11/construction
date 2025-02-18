import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home__section section">
      <img src="home-lines-bg.svg" alt="Lines" className="bg__lines"/>
      <div className="home__container grid container">
        <div className="home__content grid">
            <div className="home__data">
                <h1 className="home__title">
                    Create The <br/> 
                    Constructions <br/> 
                    You Want Here
                </h1>
                <p className="home__description">
                    We provide the best home design, construction and 
                    maintenance services for you and your family.
                </p>
                <div className="home__buttons">
                    <Link to="services" className="btn">Our Services</Link>
                    <Link to="projects" className="home__btn">
                    <span>View Projects</span>
                    <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
                <div className="home__info">
                    <div>
                        <h3 className="home__info__title">10+</h3>
                        <p className="home__info__description">Years of <br/> Experience</p>
                    </div>

                    <div>
                        <h3 className="home__info__title">200</h3>
                        <p className="home__info__description">Complete <br/> Projects</p>
                    </div>

                </div>
            </div>
        </div>
        <div className="home__images">
            <img src="home-img-1.png" alt="home" className="home__img_1"/>
            <img src="home-img-2.png" alt="home" className="home__img_2"/>
        </div>
      </div>
    </section>
  );
}

export default Home;