import React, { useState } from "react";
import tableMenu from "../../assets/vectors/table-menu.png";
import "../../style/utils/user-general-table.scss";
import dot from "../../assets/vectors/dot.png";
import { UserObject } from "./models";
import dotUser from "../../assets/vectors/np_user.png";
import deleteFriend from "../../assets/vectors/np_delete-friend.png";
import view from "../../assets/vectors/np_view.png";
import { useNavigate } from "react-router-dom";

interface Props{
    userInfo: UserObject[],
}


const UserGeneralTable = ({userInfo}: Props) => {
    const navigate = useNavigate();
    const [dotIndex, setDotIndex] = useState(-1); 
    const [dotClass, setDotclass] = useState<string[]>([]);


    
    const detailsClick = (id: string) => {
        navigate(`/userdetails/${id}`);
    }

    const dotClick = (index: number) => {
        const temp = [...dotClass]; 

        if(dotIndex !== -1 && index !== dotIndex){
            temp[dotIndex] = "dot-div-hidden";
        }

        temp[index] = temp[index] === "dot-div-shown" ? "dot-div-hidden" : "dot-div-shown"; 
        setDotclass(temp);
        setDotIndex(index);
    }

    const userList = userInfo.map((user: UserObject, index: number) => (
        <tr key={index}>
            <td>{user.orgName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.createdAt.toString().split('T')[0]}</td>
            <td>
                <div className="oval-div">
                    <p className='active-p'>{"active"}</p> <div className={`oval-div-hover active` }></div>
                </div>
            </td>

            {/* <img className="dot-icon" src={dot} alt="three dot" onClick={() => {dotClick(index)} } /> */}

            {/* <div className={dotClass[index]}>
                <p onClick={() => {detailsClick(user.id)}}><img src={view} alt="view user icon"/> View Details </p>
                <p><img src={deleteFriend} alt="view user icon"/> Blacklist User </p>
                <p><img src={dotUser} alt="view user icon"/> Activate User </p>
            </div> */}
        </tr>
    ))

    return (
        <table className="general-table">
            {/* <thead>
                <th>ORGANIZATION <img src={tableMenu} alt="table menu icon" /></th>
                <th>USERNAME <img src={tableMenu} alt="table menu icon" /></th>
                <th>EMAIL <img src={tableMenu} alt="table menu icon" /></th>
                <th>PHONE NUMBER <img src={tableMenu} alt="table menu icon" /></th>
                <th>DATE JOINED <img src={tableMenu} alt="table menu icon" /></th>
                <th>STATUS <img src={tableMenu} alt="table menu icon" /></th>
            </thead> */}

            <tbody>
                {userList}
            </tbody>
        </table>
    )
}

export default UserGeneralTable;