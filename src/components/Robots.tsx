import React from "react";

interface RobotPrps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotPrps> = ({ id, name, email }) => {
  return (
    <li>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Robot;
