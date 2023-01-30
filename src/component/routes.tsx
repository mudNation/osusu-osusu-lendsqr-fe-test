import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
// import Users from '../pages/userstemp';
 
const Application = () => {
    return (  
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Login/>} />
                <Route path = "/dashboard" element={<Dashboard/>} />
                {/* <Route path = "/user">
                    <Route index element = {<Users/>}/>
                    <Route path=":id" element = {<Users/>}/>
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}
 
export default Application;