import React from "react";
import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <>
      <div className="homeTitle">
        <h2>
          You know exercise is good for you, but do you know how good? From
          boosting your mood to improving your sex life, find out how exercise
          can improve your life.
        </h2>
      </div>
      <div className="home">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
