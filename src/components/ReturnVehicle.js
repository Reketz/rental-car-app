import React, { useState } from 'react';
import Api from '../services/Api';

function ReturnVehicle() {
    const [rentalId, setRentalId] = useState('');

    const handleReturn = () => {
        Api.returnVehicle(rentalId)
            .then((rent) => {
                alert("Veículo devolvido com sucesso! Total do aluguel: " + rent.data.totalPrice);
                window.location.reload();
            })
            .catch((error) => {
                alert("Erro ao devolver veículo: " + error.response.data);
            });
    };

    return (
        <div>
            <h2>Devolver Veículo</h2>
            <input
                type="text"
                placeholder="ID do Aluguel"
                value={rentalId}
                onChange={(e) => setRentalId(e.target.value)}
            />
            <a onClick={handleReturn} className="waves-effect waves-light btn">Devolver</a>
        </div>
    );
}

export default ReturnVehicle;
