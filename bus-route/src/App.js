
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contect from './Components/Contect';
import Navbar from './Components/Navbar';


// import Admin from './Components/Admin';
// import Admintable from './Components/Admintable';

import Signin from './Components/Signin';

import Auth from './Components/Auth';
// import Requiredauth from './Components/Requiredauth';
import Login from './Components/Login';
import Filters from './Components/Filter';
import AdminLogin from './Components/AdminLogin';
import Admin from './Components/Admin';
import Profil from './Components/Profil';
import Filter2 from './Components/Filter2';
import Login2 from './Components/Login2';
import Headroom from 'react-headroom'
import AdminTable from './Components/Admintable';
import Filter3 from './Components/Filter3';
import DataInsertion from './Components/DataInsertion';
import Admin2 from './Components/Admin2';
import Admin3 from './Components/Admin3';
import Track from './Components/Track';


function App() {
  return (
    <div className="App">      
      <Auth>
        <Headroom>
        <Navbar/>
        </Headroom>      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contect />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login2' element={<Login2/>}/> 
          <Route path='/Filter' element={<Filters />} />
          <Route path='/Filter2' element={<Filter2/>}/>
          <Route path='/Filter3' element={<Filter3/>}/>
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path = 'adminTable' element={<AdminTable/>}/>
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Admin2' element={<Admin2/>}/>
          <Route path='/Admin3' element={<Admin3/>}/>
          <Route path='/profile' element={<Profil/>}/>
          <Route path='/DataInsertion' element={<DataInsertion/>}/>
        </Routes>
      </Auth>     
    </div>

  );
}
export default App;
