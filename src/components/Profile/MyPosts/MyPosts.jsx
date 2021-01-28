import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


  let postsElements = props.postsData.map((p) => (
    <Post message={p.post} count={p.count} />
  ));

  return (
    <div className={s.posts}>
      <h2 className={s.myposts__h2}>My posts</h2>
      <div className={s.myposts}>
        <textarea defaultValue="What's new?" />
        <button>Send</button>
      </div>
      <h2 className={s.myposts__h2}>New posts</h2>
      <div className={s.newposts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
