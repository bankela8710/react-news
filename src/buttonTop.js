import React, {useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import './App.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 0){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 0){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    document.body.scrollTo({top:0, behavior:'smooth'});
    document.documentElement.scrollTo ({top:0, behavior:'smooth'}) ;
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className="button-wrapper">
        <FaAngleUp className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}} Top /> 
        </div>
  );

}

export default ScrollArrow;







 

