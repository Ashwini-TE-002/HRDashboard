import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Homepage from './HRDashboard/Pages/Dashboard/Homepage'

import Events from "./HRDashboard/Pages/Events/Events";

import Performance from './HRDashboard/Pages/Performance/Performance'

import RedZone from "./HRDashboard/Pages/RedZone/RedZone"

import Reports from "./HRDashboard/Pages/Reports/Reports"

import HRHealthMatrix from "./HRDashboard/Pages/HRHealthMatrix/HRHealthMatrix";

import EnergyAndWorkplace from './HRDashboard/Pages/Performance/Energy and Workplace/EnergyAndWorkplace';

import Productivity from "./HRDashboard/Pages/Performance/Business performance/Productivity/Productivity";

import Retention from "./HRDashboard/Pages/Performance/Business performance/Retention/Retention";

import FitnessEvents from "./HRDashboard/Pages/Events/Fitness Events/FitnessEvents";

import HealthEvents from "./HRDashboard/Pages/Events/Health Events/HealthEvents";

import MentalHealthEvents from "./HRDashboard/Pages/Events/Mental Health Events/MentalHealthEvents";

import SurvayResponse from "./HRDashboard/Pages/Reports/Survey Responses/SurvayResponse";

import Cohorts from "./HRDashboard/Pages/Cohorts/Cohorts";

import Subsriptions from "./HRDashboard/Pages/Subsriptions/Subsriptions"

import TeamReports from "./HRDashboard/Pages/Dashboard/Team Engagement/Team Reports/TeamReports";

import TeamScoreDetails from "./HRDashboard/Pages/Dashboard/Team Engagement/TeamScoreDetails/TeamScoreDetails";



function App() {
  return (
    <Router>
      <Routes>
        {/* Wizard Sections */}
        {/* Login and Reg Part */}

        <Route path="/Homepage" element={<Homepage />} />

        <Route path="/Events" element={<Events />} />

        <Route path="/Performance" element={<Performance />} />

        <Route path="/RedZone" element={<RedZone />} />

        <Route path="/Reports" element={<Reports />} />

        <Route path="/Cohorts" element={<Cohorts />} />

        <Route path="/HRHealthMatrix" element={<HRHealthMatrix />} />

        <Route path="/EnergyAndWorkplace" element={<EnergyAndWorkplace />} />

        <Route path="/Productivity" element={<Productivity />} />

        <Route path="/Retention" element={<Retention />} />

        <Route path="/FitnessEvents" element={<FitnessEvents />} />

        <Route path="/HealthEvents" element={<HealthEvents />} />

        <Route path="/MentalHealthEvents" element={<MentalHealthEvents />} />

        <Route path="/SurvayResponse" element={<SurvayResponse />} />

        <Route path="/Subsriptions" element={<Subsriptions />} />

        <Route path="/TeamReports" element={<TeamReports />} />

        <Route path="TeamScoreDetails" element={<TeamScoreDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
