import React from "react"; // Import React
import "./App.css";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Aboutus from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import CreateQuizPage from "./pages/CreateQuizPage";
import InviteCandidatesPage from "./pages/InviteCandidates";
import Assessments from "./pages/Assesments";
import IndividualAssessmentPage from "./pages/AssessmentPage";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Interview from "./pages/Interview";
import MainLayout from "./MainLayout";
import Template from "./components/dashboard/template/Template";
import Students from "./components/dashboard/pages/Students/Students";
import Companies from "./components/dashboard/pages/Companies/Companies";
import Analytics from "./components/dashboard/pages/Analytics/Analytics";
import Layout from "./components/dashboard/template/Layout";


const App: React.FC = () => {
  return (
    <div className='bg-richblack-900 text-richblack-25'>


      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/login" element={
          <MainLayout>
            <Login />
          </MainLayout>
        } />
        <Route path="/signup" element={
          <MainLayout>
            <Signup />
          </MainLayout>

        } />
        <Route path="/contact-us" element={
          <MainLayout>
            <ContactUs />
          </MainLayout>
        } />
        <Route path="/about-us" element={
          <MainLayout>
            <Aboutus />
          </MainLayout>
        } />
        <Route path="/create-assessment" element={
          <MainLayout>
            <CreateQuizPage />
          </MainLayout>
        } />
        <Route path="/assessments" element={
          <MainLayout>
            <Assessments />
          </MainLayout>
        } />
        <Route path="/invite-candidates" element={
          <MainLayout>
            <InviteCandidatesPage />
          </MainLayout>
        } />
        <Route path="/assessment" element={
          <MainLayout>
            <IndividualAssessmentPage />
          </MainLayout>
        } />

        <Route path="/dashboard" element={
          <Layout />

        } >
          <Route path="students" element={
            <Students />
          } />
          <Route path="companies" element={
            <Companies />
          } />
          <Route path="analytics" element={
            <Analytics />
          } />

        </Route>

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/interview" element={<Interview />} />


      </Routes>
    </div>
  );
}

export default App;
