import React from "react";
import { connect } from "react-redux";

const Home = (props)=>{
    const handleName = ()=>{
        props.setName('Lucas Silva');
    }
    const handleIncrement = ()=>{
        props.increment();
    }

    return(
        <div>
            <h4>Página Home</h4>
            <br />
            <span>{props.name}</span>
            <br />
            <span>{props.count}</span>
            <section>
                <button onClick={handleName}>Ir para algum lugar!!!</button>
                <button onClick={handleIncrement}>+1</button>
            </section>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return{ 
        name: state.user.name,
        count: state.user.count
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setName: (newName)=> dispatch({
            type: 'SET_NAME',
            payload: {name:newName}
        }),
        increment: ()=> dispatch({
            type: 'INCREMENT_COUNT'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);