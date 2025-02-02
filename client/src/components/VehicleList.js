import React, { useState, useMemo } from "react";
import VehicleCard from "./VehicleCard";

const VehicleList = ({
    vehicles,
    onContactOwner,
    onDeleteVehicle,
    onUpdateVehicle,
}) => {
    const [companyFilter, setCompanyFilter] = useState("");
    const [sortBy, setSortBy] = useState("distanceCovered"); 

    const filteredAndSortedVehicles = useMemo(() => {
        return vehicles
            .filter((vehicle) =>
                vehicle.companyName
                    .toLowerCase()
                    .includes(companyFilter.toLowerCase())
            )
            .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }, [vehicles, companyFilter, sortBy]);

    return (
        <div className="list" style={{ marginTop: "10px" }}>
            <h2 style={{ color: "orange" ,fontSize:"30px"}}>Vehicle List</h2>

            <div style={{ marginBottom: "10px", fontSize: "25px" }}>
         <label style={{ color: "white", fontWeight: "bold" }}>
           Filter by Company Name: 
           <input
    type="text"
    value={companyFilter}
    onChange={(e) => setCompanyFilter(e.target.value)}
    style={{ marginLeft: "20px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc" ,fontSize: "25px"}}
/>
    </label>

    <label style={{ marginLeft: "15px", color: "white", fontSize: "25px", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
    Sort by:
    <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "16px", fontFamily: "Arial, sans-serif",marginLeft:"20px" }}
    >
        <option value="distanceCovered" style={{ fontSize: "16px", fontFamily: "Arial, sans-serif" }}>
            Distance Covered
        </option>
        <option value="mileage" style={{ fontSize: "16px", fontFamily: "Arial, sans-serif" }}>
            Mileage
        </option>
    </select>
</label>

            </div>

            <div className="list-container">
                {filteredAndSortedVehicles.map((vehicle) => (
                    <VehicleCard
                        key={vehicle._id}
                        vehicle={vehicle}
                        onContactOwner={onContactOwner}
                        onDeleteVehicle={onDeleteVehicle}
                        onUpdateVehicle={onUpdateVehicle}
                    />
                ))}
            </div>
        </div>
    );
};

export default VehicleList;
