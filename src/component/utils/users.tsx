import React, { useState } from "react";
import "../../style/utils/users.scss";
import group from "../../assets/vectors/Group.png";
import userIcon from "../../assets/vectors/np_users_1.png";
import loan from "../../assets/vectors/np_loan_1.png";
import money from "../../assets/vectors/np_money_1.png";
import tableMenu from "../../assets/vectors/table-menu.png";
import dot from "../../assets/vectors/dot.png";
import chevLeft from "../../assets/vectors/chev-left.png";
import chevRight from "../../assets/vectors/chev-right.png";
import chevDown from "../../assets/vectors/chevdown.png";
import view from "../../assets/vectors/np_view.png";
import dotUser from "../../assets/vectors/np_user.png";
import deleteFriend from "../../assets/vectors/np_delete-friend.png";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

const Users = () => {
    const [showFilter, setShowFilter] = useState(false); 
    const [dotClass, setDotclass] = useState(Array(10).fill("dot-div-hidden")); 
    const [dotIndex, setDotIndex] = useState(-1); 
    const navigate = useNavigate(); 

    const orgOptions = [
        { value: 'lendsqr', label: 'Lendsqr' },
        { value: 'irorun', label: 'Irorun' },
    ]

    const statusOptions = [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
        { value: 'pending', label: 'Pending' },
        { value: 'blacklisted', label: 'Blacklisted' },
    ]

    const cards = [
        {
            icon: group,
            title: "USERS",
            figure: "2,453"
        },
        {
            icon: userIcon,
            title: "ACTIVE USERS",
            figure: "2,453"
        },
        {
            icon: loan,
            title: "USERS WITH LOANS",
            figure: "12,453"
        },
        {
            icon: money,
            title: "USERS WITH SAVINGS",
            figure: "102,453"
        },
    ]

    const userInfo = [
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Inactive",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Pending",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Blacklisted",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Active",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Pending",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Pending",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Inactive",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Blacklisted",
        },
        {
            organization: "Lendsqr",
            username: "Adedeji",
            email: "adedeji@lendsqr.com",
            phone: "08078903721",
            date: "May 15, 2020 10:00 AM",
            status: "Active",
        },
    ]

    const cardList = cards.map((card, index) => (
        <div className='card-div' key={index}>
            <div className="card-icon-div">
                <img src={card.icon} alt={`${card.title} icon`}/>
                <div className="card-icon-hover"></div>
            </div>

            <p className="card-title-p">{card.title}</p>
            <p className="card-figures-p">{card.figure}</p>
        </div>
    ))

    const dotClick = (index: number) => {
        const temp = [...dotClass]; 

        if(dotIndex !== -1 && index !== dotIndex){
            temp[dotIndex] = "dot-div-hidden";
        }

        temp[index] = temp[index] === "dot-div-shown" ? "dot-div-hidden" : "dot-div-shown"; 
        setDotclass(temp);
        setDotIndex(index);
    }

    const detailsClick = () => {
        navigate("/userdetails");
    }

    const userList = userInfo.map((user, index) => (
        <div className='user-row-div' key={index}>
            <p className="org">{user.organization}</p>
            <p className="username">{user.username}</p>
            <p className="email">{user.email}</p>
            <p className="phone">{user.phone}</p>
            <p className="date">{user.date}</p>
            <div className="status">
                <div className="oval-div">
                    <p className={`${user.status.toLowerCase()}-p`}>{user.status}</p> <div className={`oval-div-hover ${user.status.toLowerCase()}` }></div>
                </div>
            </div>

            <img className="dot-icon" src={dot} alt="three dot" onClick={() => {dotClick(index)} } />

            <div className={dotClass[index]}>
                <p onClick={detailsClick}><img src={view} alt="view user icon"/> View Details </p>
                <p><img src={deleteFriend} alt="view user icon"/> Blacklist User </p>
                <p><img src={dotUser} alt="view user icon"/> Activate User </p>
            </div>
        </div>
    ))

    const filterClick = () => {
        if(showFilter){
            setShowFilter(false)
        }else{
            setShowFilter(true)
        }
    }

    return (
        <div className="user-content">
            <h1>Users</h1>

            <div className="card-holder-div">
                {cardList}
            </div>

            <div className="user-table">
                <div className="user-row-div">
                    <h3 className="org">ORGANIZATION <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                    <h3 className="username">USERNAME <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                    <h3 className="email">EMAIL <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                    <h3 className="phone">PHONE NUMBER <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                    <h3 className="date">DATE JOINED <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                    <h3 className="status">STATUS <img src={tableMenu} alt="table menu icon" onClick={filterClick} /></h3>
                </div>

                <h3 className="filter-p">Filter <img src={tableMenu} alt="table menu icon" onClick={filterClick}/></h3>

                {userList}

                <div className={showFilter ? "filter-div" : "filter-div-hidden"}>
                    <label>Organization</label>
                    <div className="select-div">
                        <Select options={orgOptions} />
                    </div>
                    
                    <label>Username</label>
                    <div className="select-div">
                        <input type="text" placeholder="User"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Email</label>
                    <div className="select-div">
                        <input type="text" placeholder="Email"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Date</label>
                    <div className="select-div">
                        <input type="date" placeholder="Date"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Phone Number</label>
                    <div className="select-div">
                        <input type="text" placeholder="Phone Number"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Status</label>
                    <div className="select-div">
                        <Select options={statusOptions} />
                    </div>

                    <div className="filter-button-div">
                        <button>Reset</button>
                        <button>Filter</button>
                    </div>
                </div>
            </div>

            <div className="pagination-div">
                <div className="showing-div">
                    <p>Showing</p>
                    <select className="selectSet">
                        <option value="100" selected>100</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                        <option value="10">10</option>
                    </select>
                    <p>Out of 100</p>
                </div>

                <div className="page-div">
                    <div className="chev-div"><img src={chevLeft} alt='chev left icon' /> </div>
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>...</p>
                    <p>15</p>
                    <p>16</p>
                    <div className="chev-div"><img src={chevRight} alt='chev left icon' /> </div>
                </div>

                <div className="mob-page-div">
                    <div className="chev-div"><img src={chevLeft} alt='chev left icon' /> </div>
                    <p>1 of 16</p>
                    <div className="chev-div"><img src={chevRight} alt='chev left icon' /> </div>
                </div>
            </div>
        </div>
    );
}

export default Users; 