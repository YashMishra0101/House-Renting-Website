import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Home,
  About,
  HelpSection,
  Login,
  Register,
  Registration,
  HomeRegistration,
  HouseListings,
  Mission,
  Careers,
  Blog,
  Testimonial,
} from "./componet/index.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="helpsection" element={<HelpSection />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="registration" element={<Registration />} />
      <Route path="homeregistration" element={<HomeRegistration />} />
      <Route path="houselistings" element={
      <ProtectedRoute>
        <HouseListings />
        </ProtectedRoute>} />
      <Route path="mission" element={<Mission />} />
      <Route path="careers" element={<Careers />} />
      <Route path="blogs" element={<Blog />} />
      <Route path="testimonial" element={<Testimonial />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </div>
);
