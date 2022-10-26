import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(currentCount => currentCount + 1)
    }

    const onDecrement = () => {
        setCount(currentCount => currentCount - 1)
    }

    return (
        <div>
            <div className={styles.title}>Functional component</div>
            <h1>{count}</h1>
            <button className={styles.button} onClick={onIncrement}>increment</button>
            <button className={styles.button} onClick={onDecrement}>Decrement</button>
        </div>
    )
};