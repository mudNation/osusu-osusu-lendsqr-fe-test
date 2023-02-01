import React, { useEffect, useState } from "react";
import Nav from "../component/utils/nav";
import SideNav from "../component/utils/sidenav";
import "../style/dashboard.scss";
import "../style/userdetails.scss";
import back from "../assets/vectors/back-icon.png";
import avatar from "../assets/avatar.png";
import fullStar from "../assets/vectors/np_star_full.png";
import emptyStar from "../assets/vectors/star_empty.png";
import chevDown from "../assets/vectors/chevdown.png";
import UserInfoTable from "../component/userdetails/user-info-table";
import Select from 'react-select'
import axios from "axios";

const UserDetails = () => {
    const [sideClass, setSideClass] = useState("side-nav")
    const barsClick = () => {

        if(sideClass.includes("mob-side-nav")){
            setSideClass(sideClass.replace(" mob-side-nav", "")); 
        }else{
            setSideClass(sideClass + " mob-side-nav"); 
        }
    }

    useEffect(() => {
        function handleResize() {
            if(window.innerWidth >= 850){
                setSideClass(sideClass.replace(" mob-side-nav", "")); 
            }
        }

        
        window.addEventListener('resize', handleResize)
    }, [])

    const options = [
        { value: 'general details', label: 'Genearl Details' },
        { value: 'documents', label: 'Documents' },
        { value: 'bank details', label: 'Bank Details' },
        { value: 'loans', label: 'Loans' },
        { value: 'savings', label: 'Savings' },
        { value: 'app and systems', label: 'App and Systems' },
    ]

    return (
        <div className='dashboard-body'>
            <Nav barsClick={barsClick} />
            <div className='dashboard-content'>
                <SideNav sideClass = {sideClass} />
                <div className="user-content">
                    <p className="back-p"><img src={back} alt="back icon"/> Back to Users</p>

                    <div className="user-details-div">
                        <p>User Details</p>

                        <div className="user-button-div">
                            <button>BLACKLIST USER</button>
                            <button>ACTIVATE USER</button>
                        </div>
                    </div>

                    <div className="user-logo-div">
                        <div className="user-logo-first">
                            <div className="name-logo">
                                <img src={avatar} alt="user avatar"/>
                                <div className="name-inner-div">
                                    <h2>Grace Effiom</h2>
                                    <p className="lsq-div">LSQFf587g90</p>
                                </div>
                            </div>

                            <div className="name-logo">
                                <div className="name-inner-div">
                                    <p className="user-tier-p">User's Tier</p>
                                    <p className="star-div">
                                        <img src={fullStar} alt = "full start"/> 
                                        <img src={fullStar} alt = "full start"/>
                                        <img src={fullStar} alt = "full start"/>
                                    </p>
                                </div>
                            </div>

                            <div className="name-logo">
                                <div className="name-inner-div">
                                    <h2>₦200,000.00</h2>
                                    <p className="bank-p">9912345678/Providus Bank</p>
                                </div>
                            </div>
                        </div>

                        <div className="user-logo-second">
                            <p>General Details</p>
                            <p>Documents</p>
                            <p>Bank Details</p>
                            <p>Loans</p>
                            <p>Savigns</p>
                            <p>App and System</p>
                        </div>

                        <div className="select-div">
                        
                        <div className="selectSet">
                            <Select options={options} />
                        </div>
                        {/* <div className="input-border"></div>
                        <img className="chev-down-icon" src={chevDown} alt="select down icon"/> */}
                    </div>
                    </div>

                    <div className="user-information-div">
                        <UserInfoTable />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserDetails; 