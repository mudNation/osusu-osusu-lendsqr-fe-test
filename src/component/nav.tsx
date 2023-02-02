import React, { useState } from "react";
import "../style/utils/nav.scss";
import Logo from "./logo";
import search from "../assets/vectors/search.png";
import bell from "../assets/vectors/bell.png";
import profile from "../assets/profile.png";
import arrow from "../assets/vectors/arrow-down.png";

interface Props{
    barsClick: ()=>void,
}

const Nav = ({barsClick}:Props) => {
    const [dropClass, setDropClass] = useState("right-dropdown-div hidden"); 
    const setDropClick = () => {
        if(window.innerWidth >= 850){
            return
        }

        if(dropClass.includes("hidden")){
            setDropClass(dropClass.replace(" hidden", ""))
        }else{
            setDropClass(dropClass + " hidden")
        }
    }

    return(
        <div className="nav-body">
            <Logo />

            <div className="search-div">
                <input type="text" className="search-input" placeholder="Search for anything"/>
                <div className='search-icon-div'>
                    <img src={search} alt='search icon' />
                </div>
            </div>

            <div className="nav-right-div">
                <p className="docs-p">Docs</p>
                <img src={bell} alt="bell icon" className="bell-icon"/>
                <img src={profile} alt="profile" className="profile" onClick={setDropClick}/>
                <p className="name">Adedeji <img src={arrow} alt="arrow down icon" className="nav-right-down-icons" /></p>
                

                <ul className={dropClass}>
                    <li>Adedeji</li>
                    <li><img src={bell} alt="bell icon"/></li>
                    <li>Docs</li>
                </ul>
            </div>

            <i className="fa-solid fa-bars" onClick={barsClick}></i>
        </div>
    )
}


export default Nav; 