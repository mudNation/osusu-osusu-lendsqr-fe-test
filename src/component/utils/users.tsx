import React, { useEffect, useState } from "react";
import "../../style/utils/users.scss";
import "../../style/utils/pagination.scss";
import group from "../../assets/vectors/Group.png";
import userIcon from "../../assets/vectors/np_users_1.png";
import loan from "../../assets/vectors/np_loan_1.png";
import money from "../../assets/vectors/np_money_1.png";
import tableMenu from "../../assets/vectors/table-menu.png";
import dot from "../../assets/vectors/dot.png";
import chevLeft from "../../assets/vectors/chev-left.png";
import chevRight from "../../assets/vectors/chev-right.png";
import view from "../../assets/vectors/np_view.png";
import dotUser from "../../assets/vectors/np_user.png";
import deleteFriend from "../../assets/vectors/np_delete-friend.png";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'
import axios from "axios";
import { UserObject } from "./models";
import ReactPaginate from "react-paginate";
import { valueContainerCSS } from "react-select/dist/declarations/src/components/containers";

interface SelectObject{
    value?: string,
    label?: string
}

const Users = () => {
    const [showFilter, setShowFilter] = useState(false); 
    const [dotIndex, setDotIndex] = useState(-1); 
    const [userInfo, setUserInfo] = useState<UserObject[]>([]); 
    const [allUserInfo, setAllUserInfo] = useState<UserObject[]>([]); 
    const [currentInfos, setCurrentInfos] = useState<UserObject[]>([]); 
    const navigate = useNavigate(); 
    const [dotClass, setDotclass] = useState<string[]>([]);
    const [showingCount, setShowingCount] = useState(10); 
    const [activePage, setActivePage] = useState(0); 
    const [pagesCount, setPagesCount] = useState(0); 
    const [orgSelect, setOrgSelect] = useState<SelectObject>({value: "", label: ""}); 
    const [usernameValue, setUsernameValue] = useState(""); 
    const [emailValue, setEmailValue] = useState(""); 
    const [dateValue, setDateValue] = useState(""); 
    const [phoneValue, setPhoneValue] = useState(""); 
    const [statusSelect, setStatusSelect] = useState<SelectObject>({value: "", label: ""}); 
    // const [dotClass, setDotclass] = useState(Array(userInfo.length).fill("dot-div-hidden"));

    const orgOptions = [
        { value: 'labore-dolor-et', label: 'Labore-dolor-et' },
        { value: 'accusamus-minima-repudiandae', label: 'Accusamus-minima-repudiandae' },
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

    useEffect(() => {
        getDetails(); 
    }, [])

    useEffect(() => {
        storeDetails();
        setPagination(); 
        setDotclass(Array(showingCount).fill("dot-div-hidden"))
    }, [userInfo])

    useEffect(() => {
        setPagination(); 
    }, [activePage])

    useEffect(() => {
        setPagesCount(userInfo.length/showingCount); 
        setPagination(); 
        setDotclass(Array(showingCount).fill("dot-div-hidden"))
    }, [showingCount])

    const getDetails = async () => {
        try{
            const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            setUserInfo(response.data); 
            setAllUserInfo(response.data); 
        }catch(err){
            alert(err); 
        }
    }

    const storeDetails = async () => {
        userInfo.forEach((value) => {
            localStorage.setItem(`user-${value.id}`, JSON.stringify(value)); 
        })
    }

    const setPagination =  () => {
        setPagesCount(Math.ceil(userInfo.length/showingCount))
        const basePage = activePage*showingCount; 
        // // const currentInfos = userInfo.slice(basePage, basePage+showingCount); 
        setCurrentInfos(userInfo.slice(basePage, basePage+showingCount)); 
        // alert(basePage + ":::" + (basePage+showingCount))
    }

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

    const detailsClick = (id: string) => {
        navigate(`/userdetails/${id}`);
    }

    const userList = currentInfos.map((user: UserObject, index: number) => (
        <div className='user-row-div' key={index}>
            <p className="org">{user.orgName}</p>
            <p className="username">{user.userName}</p>
            <p className="email">{user.email}</p>
            <p className="phone">{user.phoneNumber}</p>
            <p className="date">{user.createdAt.toString().split('T')[0]}</p>
            <div className="status">
                <div className="oval-div">
                    <p className='active-p'>{"active"}</p> <div className={`oval-div-hover active` }></div>
                </div>
            </div>

            <img className="dot-icon" src={dot} alt="three dot" onClick={() => {dotClick(index)} } />

            <div className={dotClass[index]}>
                <p onClick={() => {detailsClick(user.id)}}><img src={view} alt="view user icon"/> View Details </p>
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

    const pageChange = (value: { index: number; selected: number; 
        nextSelectedPage: number; event: object; isPrevious: boolean;
         isNext: boolean; isBreak: boolean; isActive: boolean; }) => {

        setActivePage(value.nextSelectedPage)
    }

    const countChange = (value: React.ChangeEvent<HTMLSelectElement>) => {
        setShowingCount(Number.parseInt(value.currentTarget.value)); 
    }

    const clearFilterUsers = () => {
        setUserInfo(allUserInfo); 

        setEmailValue("")
        setUsernameValue("")
        setPhoneValue("")
        setDateValue("")
        setOrgSelect({value: "", label: ""})
        setStatusSelect({value: "", label: ""})
    }

    const filterUsers = () => {
        const temp = userInfo.filter((value) => {
            return value.orgName.includes(orgSelect.value || "") && value.userName.includes(usernameValue) &&
                value.email.includes(emailValue) && value.phoneNumber.includes(phoneValue) && 
                value.createdAt.toString().split('T').includes(dateValue); 
        })

        alert(dateValue + ":::" + userInfo[0].createdAt.toString().split('T'))
        
        setUserInfo(temp);
    }

    const prevLabel = (<div className="chev-div"><img src={chevLeft} alt='chev left icon' /> </div>); 
    const nextLabel = (<div className="chev-div"><img src={chevRight} alt='chev left icon' /> </div>)

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
                        <Select options={orgOptions} onChange={(e)=>{
                            setOrgSelect({value: e?.value, label: e?.label})
                        }} />
                    </div>
                    
                    <label>Username</label>
                    <div className="select-div">
                        <input type="text" value={usernameValue} onChange={(e) => {setUsernameValue(e.target.value)}} placeholder="User"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Email</label>
                    <div className="select-div">
                        <input type="text" value={emailValue} onChange={(e) => {setEmailValue(e.target.value)}} placeholder="Email"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Date</label>
                    <div className="select-div">
                        <input type="date" value={dateValue} onChange={(e) => {setDateValue(e.target.value)}} placeholder="Date"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Phone Number</label>
                    <div className="select-div">
                        <input type="text" value={phoneValue} onChange={(e) => {setPhoneValue(e.target.value)}} placeholder="Phone Number"></input>
                        <div className="input-border"></div>
                    </div>

                    <label>Status</label>
                    <div className="select-div">
                        <Select options={statusOptions} onChange={(e)=>{
                            setStatusSelect({value: e?.value, label: e?.label})
                        }}  />
                    </div>

                    <div className="filter-button-div">
                        <button onClick={clearFilterUsers}>Reset</button>
                        <button onClick={filterUsers}>Filter</button>
                    </div>
                </div>
            </div>

            <div className="pagination-div">
                <div className="showing-div">
                    <p>Showing</p>
                    <select className="selectSet" value={showingCount} onChange={countChange}>
                        <option value="100">100</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                        <option value="10">10</option>
                    </select>
                    <p>{`Out of ${userInfo.length}`}</p>
                </div>
  
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={nextLabel}
                    onClick={pageChange}
                    pageRangeDisplayed={3} 
                    marginPagesDisplayed={2}
                    pageCount={pagesCount} 
                    previousLabel={prevLabel}
                    activeClassName="active"
                    containerClassName="page-div"
                    initialPage={activePage}
                />

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