import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../component/utils/nav';
import SideNav from '../component/utils/sidenav';
import Users from '../component/utils/users';
import "../style/dashboard.scss";


const Dashboard = () => {
    const [sideClass, setSideClass] = useState("side-nav")
    const [userInfo, setUserInfo] = useState([]); 
    
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
        
        getDetails(); 
        window.addEventListener('resize', handleResize)
    }, [])

    const getDetails = async () => {
        try{
            const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            alert(JSON.stringify(response.data));
        }catch(err){
            alert(err); 
        }
    }

    return(
        <div className='dashboard-body'>
            <Nav barsClick={barsClick} />

            <div className='dashboard-content'>
                <SideNav sideClass = {sideClass} />
                <Users/>
            </div>
        </div>
    )
}


export default Dashboard; 