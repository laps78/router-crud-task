// modules
import "./PostList.css";
import { PropTypes } from 'prop-types';

// components
import ButtonSave from "../ui-elems/ButtonSave";
import PostCard from "../PostCard/PostCard";

function PostList({ posts, loading }) {
  console.log("postlist posts: ", posts);
  const showPosts = (posts) => posts.map(post => {
    return (
      <PostCard
        key={post.id}
        author_name={"Ilnaz Gilyazov"}
        avatar_url={'#'}
        post_content={post.content}
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
        (posts === null)
          ?
          <p className="post-list" style={{ color: 'gray', }}>
            Сорян, постов нет...
          </p>
          :
          loading ? <p>Загружаем данные...</p> : <PostListElement posts={posts} />
      }
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
}

export default PostList;