import { useEffect, useState } from 'react';
import Nav from '../component/nav';
import SideNav from '../component/sidenav';
import Users from '../component/users';
import "../style/dashboard.scss";


const Dashboard = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


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