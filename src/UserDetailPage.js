import React from "react";
import "./UserDetailPage.css";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "./UserContext";

const UserDetailPage = () => {
    const { id } = useParams();
    const { users } = useUserContext();
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) return <p>User not found.</p>;

    return (
        <div className="UserDetails">
            <h1 className="user-name">{user.name}</h1>
            <p className="user-detail">Email: {user.email}</p>
            <p className="user-detail">Phone: {user.phone}</p>
            <p className="user-detail">Company: {user.company.name}</p>
            <p className="user-detail">Website: {user.website}</p>
            <button className="back-button">
                <Link to="/">Go Back</Link>
            </button>
        </div>
    );
};

export default UserDetailPage;
