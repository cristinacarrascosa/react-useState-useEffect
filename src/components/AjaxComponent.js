import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);// por defecto va a estar vacio
    const [cargando, setCargando] = useState(true);// por defecto va a estar cargando
    const [errores, setErrores] = useState("");


    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg"
            }, {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            }, {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }

        ])
    }

    const getUsuariosAjaxPms = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(resp => resp.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data);
            },
                (error) => {
                    console.log(error);
                }
            );
    }

    const getusuariosAjaxAW = () => {

        setTimeout(async () => {

            try {
                const peticion = await fetch('https://reqres.in/api/users?page=1');
                const { data } = await peticion.json();

                setUsuarios(data);
                setCargando(false);
            } catch (error) {
                setErrores(error.message);
                setCargando(false);
            }

        }, 2000);

    }

    useEffect(() => {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getusuariosAjaxAW();
    }, [])// solo se ejecuta una vez, al cargar el componente



    if(errores ===! ""){
         // Cuando pasa algún error
         return (
            <div className='errores'>
                Hay errores
                {errores}
            </div>
        );

    }else if (cargando === true) {
        // Cuando está todo cargando
        return (
            <div className='cargando'>
                Cargando datos...
            </div>
        );
    } else if(cargando == false && errores === "") {
        // Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return <li key={usuario.id}>
                                <img src={usuario.avatar} width='20px' />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>
                        })
                    }

                </ol>
                
            </div>
        )
    }


}
