import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MontlyView from './pages/Calendar/MontlyView';
import DayView from './pages/Calendar/DayView';
import TaskView from './pages/Calendar/TaskView';
import MultipleTeams from './pages/Teams/MultipleTeams';
import MultipleAreas from './pages/Areas/MultipleAreas';
import MultipleVehicle from './pages/Vehicles/MultipleVehicles';
import SingleTeam from './pages/Teams/SingleTeam';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Navigate to="/calendar" />} />
            <Route path='calendar'>
              <Route index element={<MontlyView />}></Route>
              <Route path='day/:dayth'>
                <Route index element={<DayView />}></Route>
                <Route path='task/:taskId'>
                  <Route index element={<TaskView />}></Route>
                </Route>
              </Route>
            </Route>
            <Route path='teams'>
              <Route index element={<MultipleTeams />}></Route>
              <Route path='team/:teamId' >
                <Route index element={<SingleTeam />}></Route>
              </Route>
              <Route />
            </Route>
            <Route path='resources' element={<MultipleVehicle />}>
            </Route>
            <Route path='areas' element={<MultipleAreas />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
