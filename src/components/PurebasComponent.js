import React, { useState, useEffect } from 'react';
import { AvisoComponent } from './AvisoComponent';

export const PurebasComponent = () => {
    

    // establecemos el estado inicial de la variable usuario
    const [usuario, setUsuario] = useState("Cristina Carrascosa");
    const [fecha, setFecha] = useState("1995");
    const [contador, setContador] = useState(0);

    // función que modifica el estado de usuario
    const modUsuario = (e) => {
        setUsuario(e.target.value);
    }


    // función que modifica el estado de fecha
    const cambiarFecha = e => {
        setFecha(Date.now());
    }

    // solo se ejecuta una vez, al cargar el componente
    useEffect(() => {
        console.log("has cargado el componente");
    }, []);

    // solo se ejecuta al modificar el estado de usuario
    useEffect(() => {
        setContador(contador + 1);
        console.log("has modificado el estado del usuario " + contador);
    }, [usuario]);

    // renderizamos el componente
    return (
        <div>
            <h1>React</h1>
            <h2>useState & useEffect</h2>

            {/** utilizamos condicional ternario para establecer la clase CSS de App.js */}
            <strong className={contador >= 10 ? 'label label-green' : 'label'}>
                {usuario}
            </strong>
            <strong className='label'>
                {fecha}
            </strong>

            <p>
                <input type="text"
                    onChange={modUsuario}
                    placeholder="Cambia el nombre"
                />

                <button onClick={cambiarFecha}>Cambiar Fecha</button>
            </p>

            {/** Si el estado de usuario es Cristina se llama al componente Aviso */}
            {usuario == "Cristina" && <AvisoComponent />}

        </div>
    )
}
