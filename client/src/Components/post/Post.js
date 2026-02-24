import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import { getPost } from "../../action/post";
import { useParams } from "react-router-dom";
import PostItem from "../posts/PostItem";
import { Link } from "react-router-dom";
import CommentForm from "../post/CommentForm";

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  if (loading || (post === null && loading) || post === undefined) {
    <Spinner />;
  } else {
    return (
      <>
        <Link to="/posts" className="btn">
          Back to posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
      </>
    );
  }
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
