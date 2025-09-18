// src/components/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>We're sorry! :( The page that you're trying to reach does not exist. </p>
      <Link to="/">Back to menu</Link>
    </div>
  );
};

export default NotFound;