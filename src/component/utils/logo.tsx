import React from "react";
import "../../style/utils/logo.scss";
import union from "../../assets/Union.png"; 
import lendsqr from "../../assets/lendsqr.png"; 

const Logo = () => {
    return (
        <div className='logo-div'>
            <img className="union" src = {union} alt='union logo'/>
            <img className = "lendsqr" alt ='lendsqr text' src = {lendsqr}/>
        </div>
    )
}

export default Logo; 