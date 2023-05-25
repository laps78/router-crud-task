// modules
import { Link } from "react-router-dom";
import './ButtonSave.css';

function ButtonSave() {
  return (
    <nav
      className="upper-buttons-container"
    >
      <Link
        to="/posts/new"
        className="button-blue"
      >
        Создать пост
      </Link>
    </nav>);
}

export default ButtonSave;