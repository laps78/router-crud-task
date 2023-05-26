// modules
import "./PostList.css";
import { PropTypes } from 'prop-types';

// components
import ButtonSave from "../ButtonSave";
import PostCard from "../PostCard/PostCard";

function PostList({ posts }) {
  const showPosts = (posts) => posts.map(post => {
    return (
      <PostCard
        key={posts.id}
        author_name={posts}
        avatar_url={posts}
        post_content={posts}
        post_modified={posts}
      />
    );
  });

  const PostListElement = ({ posts }) => {
    return (
      <>
        {showPosts(posts)}
      </>
    )
  };
  
  return (
    <div className="post-list">
      <nav
        className="upper-button-container"
      >      
        <ButtonSave />
      </nav>
      {
        (posts != null)
          ?
          <PostListElement posts={posts} />
          :
          <p className="post-list" style={{ color: 'gray', }}>
            Сорян, постов нет...
          </p>
      }
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
}

export default PostList;