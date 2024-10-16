import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/Homepage";
import AboutPage from "./about/Aboutpage";
import Header from "./common/Header";
import ErrorPage from "./PageNotFound";
import CoursePage from "./courses/CoursesPage";

const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/courses" element={<CoursePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div >
    )
}

export default App;