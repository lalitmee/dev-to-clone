const Navbar = () => {
  return (
    <nav className="sticky flex items-center justify-between p-2 border-b w-full bg-white">
      <div className="w-8/12 mx-auto flex justify-between">
        <div className="flex items-center">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="dev-to-logo"
            width={50}
            height={40}
          />
          <div className="relative flex">
            <input
              className="border rounded ml-3 px-4 py-2"
              type="text"
              placeholder="Search for something"
            />
            <div className="absolute top-2 right-4 text-lg">
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="border rounded border-blue-800 text-blue-800 px-4 py-2 hover:underline hover:bg-blue-800 hover:text-white">
            Create Post
          </button>
          <div className="relative mx-6 text-2xl">
            <i className="fa fa-bell"></i>
            <span className="absolute top-[-5px] right-[-6px] bg-red-400 px-1 py-0 rounded text-sm">
              42
            </span>
          </div>
          <button className="border-white border-4 rounded-full hover:border-gray-300">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--mI9Tx6Fm--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/58311/1ddc3472-f4b3-4290-94a1-6cc531b95d49.jpg"
              alt="user-logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
