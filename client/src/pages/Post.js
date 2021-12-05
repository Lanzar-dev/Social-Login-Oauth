import { useLocation } from "react-router";
import { posts } from "../data";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = posts.find((p) => p.id.toString() === path);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">
        {post.longDesc}{" "}
        <span>
          <a
            href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389"
            target="_blank"
            rel="noreferrer"
          >
            Reference
          </a>
        </span>
      </p>
    </div>
  );
};

export default Post;
