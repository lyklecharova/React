import React, { useState, useEffect } from 'react';
import Starwars from './Starwars';
import styles from './App.module.css';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Mount component');

    }, []);

    useEffect(() => {
        console.log('Update components- number');
    }, [numbers])

    useEffect(() => {

        // setTimeout(() => setCount(s => s + 1), 1000);
    }, [count]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(0, oldState.length - 1));
    }

    return (

        <div className = {styles['heading-app']}>
            <Starwars/>
            <h3>Count: {count}</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li
                        data-key={index}
                        key={index}
                        className={styles.listItem}
                    // {styles['list-item']}
                    >
                        {number * 2}
                    </li>)
                )}
            </ul>

            <button style={{ marginRight: '10px' }} onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>
    );
}

export default App
