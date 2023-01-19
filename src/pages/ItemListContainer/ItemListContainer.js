import './ItemListContainer.css';
// import loguito from './components/img/logo.png'
// import ItemCount from '/ItemCount';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';



const ItemListContainer = ({greeting}) => {

    const [ productos, setProductos] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    const getProductos = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ([
                {
                    "id": 1,
                    "title": "Zapatilla 1",
                    "description": "Model One",
                    "price": 1000,
                    "category": "Zapatillas",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px" />,
                },
                {
                    "id": 2,
                    "title": "Zapatilla 2",
                    "description": "Model One",
                    "price": 1000,
                    "category": "Zapatillas",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px" />,
                },
                {
                    "id": 3,
                    "title": "Ojota 1",
                    "description": "Model One",
                    "price": 1000,
                    "category": "Ojotas",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px" />,
                },
                {
                    "id": 4,
                    "title": "Ojota 2",
                    "description": "Model One",
                    "price": 1000,
                    "category": "Ojotas",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px "/>,
                },
                {
                    "id": 5,
                    "title": "Zapato 1",
                    "description": "Model One",
                    "precio": 1000,
                    "category": "Zapatos",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px" />,
                },
                {
                    "id": 6,
                    "title": "Zapato 2",
                    "description": "Model One",
                    "price": 1000,
                    "category": "Zapatos",
                    "stock": 5,
                    "image": <img alt="Zapatillas" src="./images/ojotas-celestes.png" width="100px" />,
                }
            ]);
        }, 2000)
    });

    useEffect(() => {
        getProductos                    
            .then((response) => {
                console.log(response);
                setProductos(response);
            })
            .catch(error => console.log(error))
    }, [])

//     useEffect(() => {
//         getProductos
//             .then((res) => {            
//                 // setProductos(res);
//                 // console.log(res.id)
//             })
//             .catch(error => console.log(error))
// }, [])

    return (
        <div className='ItemListContainer'>
            {/* <ItemCount /> */}
            {/* <img src={loguito} className="App-logo loguito" alt="logo" /> */}
            {/* <h1 style={{color: "black"}}>{greeting}</h1> */}
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;

