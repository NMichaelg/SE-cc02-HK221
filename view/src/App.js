import './App.scss';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MontlyView from './pages/Calendar/MontlyView';
import MultipleTeams from './pages/Teams/MultipleTeams';
import MultipleAreas from './pages/Areas/MultipleAreas';
import MultipleVehicle from './pages/Vehicles/MultipleVehicles';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Navigate to="/calendar" />} />
            <Route path='calendar' element={<MontlyView />}>

            </Route>
            <Route path='teams' element={<MultipleTeams />}></Route>
            <Route path='resources' element={<MultipleVehicle />}></Route>
            <Route path='areas' element={<MultipleAreas />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
