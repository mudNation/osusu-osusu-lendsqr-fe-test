import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import UserDetails from './pages/userdetails';
// import Users from '../pages/userstemp';
 
const Application = () => {
    return (  
        <BrowserRouter> 
            <Routes>
                <Route path = "/" element={<Login/>} />
                <Route path = "/dashboard" element={<Dashboard/>} />
                {/* <Route path = "/userdetails" element={<UserDetails/>} /> */}
                <Route path = "/userdetails">
                    <Route index element = {<UserDetails/>}/>
                    <Route path=":id" element = {<UserDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
 
export default Application;