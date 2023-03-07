import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    
    function handleAdd() {
        setCounter(counter + 1);
        // setCounter((c) => c + 1);
    }

    function handleSubtract() {
        setCounter(counter - 1);
    }

    function handleReset() {
        setCounter(value);
    }

    return (
        <>
            <h1> Counter App </h1>
            <h2> {counter}</h2>

            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleSubtract}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}