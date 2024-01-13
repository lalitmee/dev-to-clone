import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";

const posts = [
  {
    id: 1,
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--FfOyAGhU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3fqrqohatf88t3f6tqtm.jpeg",
    title: "Angular is not for everyone, and probably not for you",
    tags: ["angular", "react", "typescript", "javascript"],
    reactions: [
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
    ],
    comments: 2,
    readTime: "3 min",
    posted: "Jan 11 (36 min ago)",
    user: {
      name: "Lalit Kumar",
      profileImg:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--mI9Tx6Fm--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/58311/1ddc3472-f4b3-4290-94a1-6cc531b95d49.jpg",
    },
  },
  {
    id: 2,
    imgSrc:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--FfOyAGhU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3fqrqohatf88t3f6tqtm.jpeg",
    title: "Angular is not for everyone, and probably not for you",
    tags: ["angular", "react", "typescript", "javascript"],
    reactions: [
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
    ],
    comments: 2,
    readTime: "3 min",
    posted: "Jan 11 (36 min ago)",
    user: {
      name: "Lalit Kumar",
      profileImg:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--mI9Tx6Fm--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/58311/1ddc3472-f4b3-4290-94a1-6cc531b95d49.jpg",
    },
  },
];

const links = [
  {
    id: 1,
    label: "Home",
    iconClass: "fa fa-home",
    count: 200,
  },
  {
    id: 2,
    label: "Podcasts",
    iconClass: "fa fa-microphone",
    count: 0,
  },
  {
    id: 3,
    label: "Videos",
    iconClass: "fa fa-video-camera",
    count: 200,
  },
  {
    id: 4,
    label: "Tags",
    iconClass: "fa fa-tag",
    count: 0,
  },
  {
    id: 5,
    label: "FAQ",
    iconClass: "fa fa-question",
    count: 200,
  },
  {
    id: 6,
    label: "About",
    iconClass: "fa fa-user",
    count: 0,
  },
];

function App() {
  return (
    <div className="w-full bg-gray-200">
      <Navbar />
      <div className="w-8/12 mx-auto flex p-4 gap-4">
        <Sidebar links={links} />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default App;
