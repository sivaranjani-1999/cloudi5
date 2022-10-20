import './App.css';
import { Firstpage } from './firstpage';
import { Secondpage } from './secondpage';
import { Thirdpage } from './thirdpage';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <Firstpage/>  
        {/* <Secondpage/>     */}
      {/* <Thirdpage/>   */}
 


 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Firstpage/>}/>
      <Route path='/Secondpage' element={<Secondpage/>}/>
      <Route path='/Thirdpage' element={<Thirdpage/>}/>

    </Routes>
    </BrowserRouter> 

 
    </div>
  );
}

export default App;
