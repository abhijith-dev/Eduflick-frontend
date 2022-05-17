
import React from "react";
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import SplashScreen from "./components/screens/splash/SplashScreen";
import StudentLoginScreen from "./components/screens/studentLogin/StudentLoginScreen";
import TeacherLoginScreen from "./components/screens/teacherLogin/TeacherLoginScreen";
import TeacherSignupScreen from './components/screens/teacherSignup/TeacherSignupScreen';
import StudentSignupScreen from './components/screens/studentSignup/StudentSignupScreen';
import VideoPlayer from "./components/widgets/videoplayer/VideoPlayer";
import QuestionsPaper from "./components/widgets/questions/QuestionsPaper";
import ResetPasswordStudent from "./components/screens/resetpasswordstudent/ResetPasswordStudent";

function RouteController() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/student" element={<StudentLoginScreen />} />
        <Route path="/teacher" element={<TeacherLoginScreen />} />
        <Route path="/signup-teacher" element={<TeacherSignupScreen />} />
        <Route path="/signup-student" element={<StudentSignupScreen />} />
        <Route path="/player" element={<VideoPlayer />} />
        <Route path="/questions" element={<QuestionsPaper />} />
        <Route path="/reset" element={<ResetPasswordStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteController;
