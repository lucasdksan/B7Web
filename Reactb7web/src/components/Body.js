import Botao from './Botao';

export default (props) => {
    const handleButton = () => {
        props.setUsername('Paulo');
    }

    return (
        <article className="box">
            <Botao username={props.username} />

            <button onClick={handleButton}>Trocar para Paulo</button>
        </article>
    );
}