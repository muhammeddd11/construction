import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop() {
  const {pathname}=useLocation();
  useEffect(function(){
    window.scrollTo(0,0)
  },[pathname])  
  return null;
}

export default ScrollTop;