// modules
import { Link } from "react-router-dom";
import './ButtonSave.css';

function ButtonSave() {
  return (
    <Link
      to="/posts/new"
      className="button-blue"
    >
      Создать пост
    </Link>
  );
}

export default ButtonSave;