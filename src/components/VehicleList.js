import React, { useEffect, useState } from "react";
import Api from "../services/Api";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    Api.getVehicles().then((response) => {
      setVehicles(response.data);
    });
  }, []);

  const handleRent = (id) => {
    Api.rentVehicle(id)
      .then((rent) => {
        alert("Veículo alugado com sucesso! ID gerado: " + rent.data.id);
        window.location.reload();
      })
      .catch((error) => {
        alert("Erro ao alugar veículo: " + error.response.data);
      });
  };

  function showVehicles() {
    return (
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Preço por dia</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {vehicles
            .filter((vehicle) => !vehicle.rented)
            .map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.licensePlate}</td>
                <td>{vehicle.rentalPricePerDay}</td>
                <td>
                  {!vehicle.rented && (
                    <a
                      onClick={() => handleRent(vehicle.id)}
                      className="waves-effect waves-light btn"
                    >
                      Alugar
                    </a>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }

  function showNoVehicles() {
    return (
      <div className="card-panel red darken-2">
        <span style={{color: "yellow"}}>
          Não há veículos disponíveis para aluguel
        </span>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Veículos</h2>
      {vehicles.filter((vehicle) => !vehicle.rented).length === 0
        ? showNoVehicles()
        : showVehicles()}
    </div>
  );
}

export default VehicleList;
