import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext";
import HomePage from "./HomePage";
import "./App.css";
import UserDetailPage from "./UserDetailPage";

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user/:id" element={<UserDetailPage />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;