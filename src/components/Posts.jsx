import PropTypes from "prop-types";

const tabs = [
  { label: "Relevant", value: "relevant" },
  { label: "Latest", value: "latest" },
  { label: "Top", value: "top" },
];

const Posts = ({ posts }) => {
  return (
    <div className="w-8/12">
      <div className="flex gap-4 items-center my-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`text-lg "active:font-bold" hover:text-blue-500`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {posts.map((post) => (
        <div key={post.id} className="rounded-xl bg-white mb-4">
          <img
            src={post.imgSrc}
            alt="post-thumbnail"
            className="rounded-t-xl"
          />
          <div className="flex items-start gap-4 p-4">
            <img
              src={post.user.profileImg}
              className="rounded-full"
              alt="user-profile"
              width={32}
              height={32}
            />
            <div className="flex flex-col gap-6">
              <div className="">
                <div>{post.user.name}</div>
                <div>{post.posted}</div>
              </div>
              <h3 className="text-4xl font-bold">{post.title}</h3>
              <div className="flex gap-4 items-center">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded px-2 py-1 border border-white hover:border-gray-300 hover:bg-gray-100"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
