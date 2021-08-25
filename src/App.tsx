import React from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robots";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>机器人网站</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
