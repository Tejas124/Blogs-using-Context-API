import React, { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";
import "./App.css"

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
}, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-2 ">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}
