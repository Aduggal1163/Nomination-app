import React from 'react';
import './Details.css';

export default function Details() {
    const data = JSON.parse(localStorage.getItem("data"))
    return (
        <div className="details-container">
            <h1>Details</h1>
            <table className="details-table">
                <thead>
                    <tr>
                        <th>Candidate Name</th>
                        <th>Team Name</th>
                        <th>Description</th>
                        <th>Award Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.teamname}</td>
                        <td>{data.description}</td>
                        <td>{data.awardtype}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
