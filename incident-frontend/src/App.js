import logo from './logo.svg';
import './App.css';
import Incidents from './Pages/Incidents';
import Addincident from './Pages/Addincident';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import EditIncident from './Pages/EditIncident';
import Welcome from './Pages/welcome';


function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element= {<Welcome />}/>
      <Route path="/welcome" element= {<Welcome />}/>
        <Route path="/incidents" element= {<Incidents/> }/>
        <Route path="/add-incidents" element= {<Addincident/> }/>
        <Route path="/edit-incidents/:id" element={<EditIncident />} />

      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
