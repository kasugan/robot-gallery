import React from "react";
import styles from "./Robot.module.css";

interface RobotPrps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotPrps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Robot;
