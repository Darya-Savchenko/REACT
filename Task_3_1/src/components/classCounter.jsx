import React from "react";
import styles from './Counter.module.scss';

export class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <div className={styles.title}>Class component</div>
                <h1>{this.state.count}</h1>
                <button className={styles.button} onClick={this.increment}>increment</button>
                <button className={styles.button} onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}
