import "./PostCard.css";
import PropTypes from "prop-types";
import LastUpdatedMark from "./LastUpdatedMark";

function PostCard({ author_name, avatar_url, post_content, post_modified }) {
  return (
    <article className="single-post-wrapper">
      <header className="single-post-header">
        <img
          className="user-avatar"
          src={avatar_url}
          alt={`${author_name} аватар`}
        />
        <div className="post-meta-container">
          <h3 className="author_name">{author_name}</h3>
          <div className="post-meta">
            <img src="./img/meta-user-role.png" alt="Роль пользователя" />
            -
            <LastUpdatedMark date={post_modified} />
          </div>
        </div>
      </header>
      <img src="./img/post-footer.png" alt="post footer" />
      {post_content}
    </article>
  );
}

PostCard.propTypes = {
  author_name: PropTypes.string,
  avatar_url: PropTypes.string,
  post_content: PropTypes.string,
};

export default PostCard;
