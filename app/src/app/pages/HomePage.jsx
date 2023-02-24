import PostList from "../components/post/PostList";
import Search from "../components/search/Search";

const HomePage = () => {
  return (
    <section>
      <div>
        <Search />
      </div>
      <div className="postlist">
        <h1>Posts list</h1>
        <PostList />
      </div>
    </section>
  );
};

export default HomePage;
