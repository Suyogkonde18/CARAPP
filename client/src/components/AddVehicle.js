import axios from "axios";
import React, { useState } from "react";

const AddVehicle = ({ onAddVehicle }) => {
    const [newVehicle, setNewVehicle] = useState({
        companyName: "",
        distanceCovered: "",
        mileage: "",
        serviceDates: "",
        owner: {
            name: "",
            email: "",
        },
        image: "",
    });

    const handleAddVehicle = () => {
        // Convert serviceDates to an array by splitting on commas and trimming spaces
        const vehicleToSubmit = {
            ...newVehicle,
            serviceDates: newVehicle.serviceDates.split(",").map(date => date.trim()),
        };

        axios
            .post("http://localhost:3001/api/cars", vehicleToSubmit)
            .then((response) => {
                onAddVehicle(response.data);

                // Reset form after successful submission
                setNewVehicle({
                    companyName: "",
                    distanceCovered: "",
                    mileage: "",
                    serviceDates: "",
                    owner: {
                        name: "",
                        email: "",
                    },
                    image: "",
                });
            })
            .catch((error) => console.error("Error adding vehicle:", error));
    };

    return (
        <div className="form-container">
            <h2 style={{ color: "#007BFF", textAlign: "center", fontSize: "25px" }}>
                Add a New Vehicle
            </h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddVehicle();
                }}
            >
                <div className="form-row">
                    <label>
                        Company Name:
                        <input
                            type="text"
                            value={newVehicle.companyName}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    companyName: e.target.value,
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                    <label>
                        Distance Covered:
                        <input
                            type="number"
                            value={newVehicle.distanceCovered}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    distanceCovered: e.target.value,
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Mileage:
                        <input
                            type="number"
                            value={newVehicle.mileage}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    mileage: e.target.value,
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                    <label>
                        Service Dates (comma-separated):
                        <input
                            type="text"
                            value={newVehicle.serviceDates}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    serviceDates: e.target.value,
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Owner Name:
                        <input
                            type="text"
                            value={newVehicle.owner.name}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    owner: {
                                        ...newVehicle.owner,
                                        name: e.target.value,
                                    },
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                    <label>
                        Owner Email:
                        <input
                            type="email"
                            value={newVehicle.owner.email}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    owner: {
                                        ...newVehicle.owner,
                                        email: e.target.value,
                                    },
                                })
                            }
                            required
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={newVehicle.image}
                            onChange={(e) =>
                                setNewVehicle({
                                    ...newVehicle,
                                    image: e.target.value,
                                })
                            }
                            className="form-input"
                        />
                    </label>
                </div>
                <button type="submit" className="form-button">
                    Add Vehicle
                </button>
            </form>
        </div>
    );
};

export default AddVehicle;
