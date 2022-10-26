import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../actions/fetchTodo.js";
import { useEffect } from "react";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div>
      {todo.map((el) => (
        <div key={el.id} className={styles.todo}>
          <div className={styles.userId}>{el.userId}</div>
          <div>{el.title}</div>
        </div>
      ))}
    </div>
  );
};
