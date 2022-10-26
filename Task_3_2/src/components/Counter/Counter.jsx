import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const onIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <div className={styles.title}>Counter</div>
      <h1>{count}</h1>
      <button className={styles.button} onClick={onIncrement}>
        increment
      </button>
      <button className={styles.button} onClick={onDecrement}>
        Decrement
      </button>
    </div>
  );
};
