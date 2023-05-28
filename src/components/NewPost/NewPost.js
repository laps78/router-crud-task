import "./NewPost.css";
//import useRequest from "../../hooks/useRequest";
import axios from "axios";
import { nanoid } from "nanoid";

function NewPost() {
  const addNewPostButtonHandler = (event) => {
    event.preventDefault();
    const input = event.target.parentElement.parentElement[0];
    let formValue = input.value.trim();

    // todo remove log button handler
    console.log("New post add button clicked, value: ", formValue);

    // validate text length
    if (formValue.length > 0) {
      makePostRequest(process.env.REACT_APP_POSTS_URL + "posts", {
        id: nanoid(),
        content: formValue,
      });

      // clear textarea
      input.value = "";
    }
  };

  const makePostRequest = async (url, data) => {
    await axios
      .post(url, data)
      .then((responce) => console.info("req: ", responce))
      .catch((err) => {
        console.info(err);
      })
      .finally(() => {
        window.location.href = process.env.REACT_APP_HOME_URL;
      });
  };

  return (
    <div className="new-post-form-wrapper">
      <header className="new-post-header">
        <img
          className="new-post-header-string-image"
          src="./newpost.png"
          alt="new post header string"
        />
      </header>
      <form className="new-post-form">
        <div className="new-post-content">
          <div className="avatar-wrapper">
            <img src="#" alt="avatar" />
          </div>
          <input
            className="new-post-text-area"
            type="textarea"
            placeholder="Введите текст сообщения"
            autoFocus
          ></input>
        </div>
        <div className="new-post-button-wrapper">
          <button
            className="button new-post-submit button-blue"
            onClick={addNewPostButtonHandler}
          >
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
