import { useState } from "react";
import { useEffect } from "react";

const Contador = () => {
    // let contador = 0;
    const [contador, setContador] = useState(0);
    useEffect (() => {
        console.log('Apretaste el boton!!!')
    }, [contador])

    return (
    <>
        <h2>{contador}</h2>
        <button onClick={() => setContador(contador +1)}>Suma</button>
    </>
    );
};

export default Contador;