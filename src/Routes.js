import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SingleUser from "./pages/SingleUser";
import SingleAlbum from "./pages/SingleUser/SingleAlbum";
import UserSinglePost from "./pages/SingleUser/SinglePost";
import SinglePost from "./pages/Posts/SinglePost";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";

const RoutesWrapper = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id"
            element={
              <ProtectedRoute>
                <SingleUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/singlepost/:postId"
            element={
              <ProtectedRoute>
                <UserSinglePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/:id/singlealbum/:albumId"
            element={<SingleAlbum />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<SinglePost />} />
        </Routes>
      </Layout>
    </>
  );
};

export default RoutesWrapper;
