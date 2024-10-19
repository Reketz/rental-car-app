import React from 'react';
import VehicleList from './components/VehicleList';
import ReturnVehicle from './components/ReturnVehicle';

function App() {
    return (
        <div className="Conteiner">
            <h1>Controle de Aluguel de Veículos</h1>
            <VehicleList />
            <ReturnVehicle />
        </div>
    );
}

export default App;
