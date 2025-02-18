import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen,setIsOpen]=useState(false)  
  function handleOpen(){
    setIsOpen(open=>!open)
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (<header className={`${scrollY>=50? "header__background__1":"header__background__2"} header`}>
    <nav className="nav" id="nav">
        <Link className="nav__logo">
            <i className="ri-building-2-line"></i>
            <span className="logo__text">Construct</span>
        </Link>
        {isOpen?
        <div className="nav__menu">
            
            <ul className="nav__list">
                <li>
                    <Link to="/" className="nav__link" onClick={()=>handleOpen()}>Home</Link>
                </li>
                <li>
                    <Link to="about" className="nav__link" onClick={()=>handleOpen()}>About Us</Link>
                </li>
                <li>
                    <Link to="service" className="nav__link" onClick={()=>handleOpen()}>Services</Link>
                </li>
                <li>
                    <Link to="projects" className="nav__link" onClick={()=>handleOpen()}>Projects</Link>
                </li>
                <li>
                    <Link to="contact" className="nav__link btn" onClick={()=>handleOpen()}>Contact Us</Link>
                </li>
            </ul>
            <i className="ri-close-large-line nav__close" onClick={()=>handleOpen()}></i>
           </div>:<i className="ri-apps-2-fill nav__toggle" onClick={()=>handleOpen()}></i>} 
    </nav>
  </header>);
}

export default Header;