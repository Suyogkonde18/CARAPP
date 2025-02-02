import React, { useState } from "react";
import moment from "moment";

const VehicleCard = ({
    vehicle,
    onContactOwner,
    onDeleteVehicle,
    onUpdateVehicle,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedVehicle, setUpdatedVehicle] = useState(vehicle);

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setUpdatedVehicle(vehicle); // Reset the updatedVehicle to original if canceled
    };

    const handleSaveClick = () => {
        onUpdateVehicle(updatedVehicle); // Call the parent function with the updated vehicle
        setIsEditing(false);
    };

    const handleInputChange = (fieldName, value) => {
        const [field, subField] = fieldName.split(".");

        setUpdatedVehicle((prevVehicle) => ({
            ...prevVehicle,
            [field]: subField
                ? { ...prevVehicle[field], [subField]: value } // For nested fields like owner.name
                : value, // For simple fields like companyName
        }));
    };

    return (
        <div className="vehicle-card">
            {isEditing ? (
                <div>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            value={updatedVehicle.companyName}
                            onChange={(e) =>
                                handleInputChange("companyName", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Distance Covered:
                        <input
                            type="number"
                            value={updatedVehicle.distanceCovered}
                            onChange={(e) =>
                                handleInputChange("distanceCovered", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Mileage:
                        <input
                            type="number"
                            value={updatedVehicle.mileage}
                            onChange={(e) =>
                                handleInputChange("mileage", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Owner Name:
                        <input
                            type="text"
                            value={updatedVehicle.owner.name}
                            onChange={(e) =>
                                handleInputChange("owner.name", e.target.value)
                            }
                            required
                        />
                    </label>
                    <label>
                        Owner Email:
                        <input
                            type="email"
                            value={updatedVehicle.owner.email}
                            onChange={(e) =>
                                handleInputChange("owner.email", e.target.value)
                            }
                            required
                        />
                    </label>

                    <button
                        onClick={handleSaveClick}
                        style={{
                            padding: "10px 20px",
                            marginRight: "10px",
                            backgroundColor: "#4CAF50", 
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px", 
                        }}
                    >
                        Save
                    </button>
                    <button
                        onClick={handleCancelClick}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#f44336", 
                            color: "#fff", 
                            border: "none", 
                            borderRadius: "4px", 
                        }}
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div>
                    <h3 style={{ fontWeight: "bold" }}>{vehicle.companyName}</h3>
                    <p>
                        <span style={{ fontWeight: "bold" }}>
                            Distance Covered:
                        </span>{" "}
                        {vehicle.distanceCovered}
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }}>Mileage:</span>{" "}
                        {vehicle.mileage}
                    </p>

                    {vehicle.owner && (
                        <div>
                            <p style={{ fontWeight: "bold" }}>Owner:</p>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>{vehicle.owner.name}</li>
                                <li>{vehicle.owner.email}</li>
                            </ul>
                        </div>
                    )}

                    {vehicle.image && (
                        <div className="image-container">
                            <img
                                src={vehicle.image}
                                alt={vehicle.companyName}
                                className="vehicle-image"
                            />
                        </div>
                    )}
                    <p>Service Dates:</p>
                    <ul>
                        {vehicle.serviceDates.map((item, i) => (
                            <li key={i}>
                                {moment(item).format("MMMM D, YYYY")}
                            </li>
                        ))}
                    </ul>

                    <div className="button-container">
                        <button
                            onClick={() =>
                                onContactOwner(
                                    vehicle.owner ? vehicle.owner.email : ""
                                )
                            }
                        >
                            Contact Owner
                        </button>
                        <button onClick={() => onDeleteVehicle(vehicle._id)}>
                            Delete Vehicle
                        </button>
                        <button onClick={handleUpdateClick}>Update</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VehicleCard;
