import './Error.css';

const Error = () => {
    return (
        <div className="imgError">
            <img src={require('./error.png')} />
            <h1>Esto es un ErRoR!!!</h1>
        </div>
    )
}

export default Error;