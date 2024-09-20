import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`container ${styles.navigation} `}>
      <div className="logo">
        <img src="/images/Frame.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navigation;
