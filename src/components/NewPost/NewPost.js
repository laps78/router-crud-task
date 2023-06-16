import "./NewPost.css";
//import useRequest from "../../hooks/useRequest";
import axios from "axios";
import { nanoid } from "nanoid";

function NewPost() {
  const addNewPostSubmitHandler = (event) => {
    event.preventDefault();
    const input = event.target[0];
    console.log("e.target:", event.target[0]);
    let formValue = input.value.trim();

    // todo remove log button handler
    console.log("New post add button clicked, value: ", formValue);

    // validate text length
    if (formValue.length > 0) {
      const newPostId = nanoid();
      makePostRequest(process.env.REACT_APP_POSTS_URL + `posts/${newPostId}`, {
        id: newPostId,
        content: formValue,
        timestamp: new Date(),
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
        window.location.href = '/';
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
      <form className="new-post-form" onSubmit={addNewPostSubmitHandler}>
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
          <button className="button new-post-submit button-blue">
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
