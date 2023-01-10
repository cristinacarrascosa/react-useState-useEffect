import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // cuando se monta el componente
        alert("El componente AvisoComponent está montado!");
        // cuando se desmonta el componente
        return () => {
            alert("El componente AvisoComponent está desmontado!");
        }
    }, []); // se ejecuta una vez porque le paso un array vacío

  return (
    <div>
        <hr/>
        <h3>Saludos Cristina, ¿qué tal estás?</h3>
        <button
        onClick = { e => {
            alert("Bienvenida!")
        }}>Mostrar alerta</button>
    </div>
  )
}
