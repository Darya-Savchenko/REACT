import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/fetchUsers.js";
import styles from "./UserList.module.scss";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id} className={styles.item}>
          <div>
            <span className={styles.span}>Name:</span> {user.name}
          </div>
          <div className={styles.username}>
            <span className={styles.span}>Username:</span> {user.username}
          </div>
        </div>
      ))}
    </div>
  );
};
