import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about__section section">
        <div className="about__container container grid">
            <div className="about__data">
                <span className="section__subtitle">ABOUT US</span>
                <h2 className="section__title">We Provide The Best <br/> Service To Build</h2>
                <p className="about__description">
                    We strive to provide the best professionals 
                    to make your project a construction masterpiece, 
                    something unique and unmatched.
                </p>
                <ul className="about__list grid">
                    <li className="about__list__item">
                        <i className="ri-checkbox-circle-line"></i>
                        <span>Professional workers</span>
                    </li>
                    <li className="about__list__item">
                        <i className="ri-checkbox-circle-line"></i>
                        <span>Guaranteed quality</span>
                    </li>
                    <li className="about__list__item">
                        <i className="ri-checkbox-circle-line"></i>
                        <span>Extensive experience</span>
                    </li>
                    <li className="about__list__item">
                        <i className="ri-checkbox-circle-line"></i>
                        <span>We quote your  project</span>
                    </li>
                </ul>
                <Link to="projects" className="btn">View Projects</Link>

            </div>
            <div className="about__images">
                <img src="about-img-1.png" alt="about" className="about__img__1"/>
                <img src="about-img-2.png" alt="about" className="about__img__2"/>
            </div>
        </div>
    </section>
  );
}

export default About;