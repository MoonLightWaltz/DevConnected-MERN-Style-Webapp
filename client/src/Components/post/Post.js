import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import { getPost } from "../../action/post";
import { useParams } from "react-router-dom";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";

const Post = (props) => {
  const { id } = useParams();
  const { getPost, post } = props;

  const currentPost = post?.post;
  const loading = post?.loading;

  useEffect(() => {
    getPost(id);
  }, [id]);

  if (loading || !currentPost) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/posts" className="btn">
        Back to posts
      </Link>

      <PostItem post={currentPost} showActions={false} />

      <CommentForm postId={currentPost._id} />

      <div className="comments">
        {currentPost.comments.map((comment) => (
          <CommentItem
            key={comment._id}
            comment={comment}
            postId={currentPost._id}
          />
        ))}
      </div>
    </>
  );
};

// const Post = ({ getPost, post: { post, loading } }) => {
//   const { id } = useParams();

//   useEffect(() => {
//     getPost(id);
//   }, [getPost, id]);

//   if (loading || post === undefined) {
//     return <Spinner />;
//   } else {
//     return (
//       <>
//         <Link to="/posts" className="btn">
//           Back to posts
//         </Link>
//         <PostItem post={post} showActions={false} />
//         <CommentForm postId={post._id} />
//         <div className="comments">
//           {post.comments.map((comment) => (
//             <CommentItem
//               key={comment._id}
//               comment={comment}
//               postId={post._id}
//             />
//           ))}
//         </div>
//       </>
//     );
//   }
// };

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
