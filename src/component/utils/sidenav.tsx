import React from "react";
import "../../style/utils/sidenav.scss";
import briefcase from "../../assets/vectors/briefcase.png";
import chevdown from "../../assets/vectors/chevdown.png";
import home from "../../assets/vectors/home.png";
import users from "../../assets/vectors/users.png";
import guarantors from "../../assets/vectors/guarantors.png";
import nairabag from "../../assets/vectors/nairabag.png";
import handshakeRegular from "../../assets/vectors/handshake-regular.png";
import piggy from "../../assets/vectors/piggy-bank.png";
import handCash from "../../assets/vectors/handcash.png";
import userCheck from "../../assets/vectors/user-check.png";
import userTimes from "../../assets/vectors/user-times.png";
import savingProduct from "../../assets/vectors/np-bank.png";
import coin from "../../assets/vectors/coins-solid.png";
import icon from "../../assets/vectors/icon.png";
import galaxy from "../../assets/vectors/galaxy.png";
import userCog from "../../assets/vectors/user-cog.png";
import scroll from "../../assets/vectors/scroll.png";
import chartBar from "../../assets/vectors/chart-bar.png";
import badgePercent from "../../assets/vectors/badge-percent.png";
import clipBoardList from "../../assets/vectors/clipboard-list.png";


interface Props{
    sideClass: string,
}

const SideNav = ({sideClass}:Props) => {
    const menu = [
        {
            title: "CUSTOMERS", 
            list: [
                {icon: users, text: "Users"},
                {icon: guarantors, text: "Guarantors"},
                {icon: nairabag, text: "Loans"},
                {icon: handshakeRegular, text: "Decision Models"},
                {icon: piggy, text: "Savings"},
                {icon: handCash, text: "Loan Requests"},
                {icon: userCheck, text: "Whitelist"},
                {icon: userTimes, text: "karma"},
            ]
        }, 
        {
            title: "BUSINESSES", 
            list: [
                {icon: briefcase, text: "Organization"},
                {icon: handCash, text: "Loan Products"},
                {icon: savingProduct, text: "Saving Products"},
                {icon: coin, text: "Fees and Charges"},
                {icon: icon, text: "Transactions"},
                {icon: galaxy, text: "Services"},
                {icon: userCog, text: "Service Account"},
                {icon: scroll, text: "Settlements"},
                {icon: chartBar, text: "Reports"},
            ]
        },
        {
            title: "SETTINGS", 
            list: [
                {icon: icon, text: "Preferences"},
                {icon: badgePercent, text: "Fees and Pricing"},
                {icon: clipBoardList, text: "Audit Logs"}
            ]
        }
    ]


    const menuList = menu.map((item, index) => (
        <div className="menu-div" key={index}>
            <h3>{item.title}</h3>
            {item.list.map((list, i) => (
                <div className={list.text === 'Users' ? "active-side-nav" : ""}>
                    <img src={list.icon} alt= {`${list.text} icon`}/>
                    <p>{list.text}</p>
                    <div className="side-hover"></div>
                </div>
            ))}
        </div>
    )); 

    return (
        <div className={sideClass}>
            <div className="brief-case-div">
                <img src={briefcase} alt='briefcase icon'/>
                <p>Switch Organization</p>
                <img src={chevdown} alt='chev down icon'/>
            </div>

            <div className="home-div">
                <img src={home} alt='home icon'/>
                <p>Dashboard</p>
            </div>

            
            {menuList}
        </div>
    )
}


export default SideNav; 