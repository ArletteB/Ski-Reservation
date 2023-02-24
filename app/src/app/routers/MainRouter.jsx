import { Route, Routes } from "react-router-dom";
import SinglePost from "../components/post/SinglePost";
import Reservation from "../components/reservation/Reservation";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SingupPage";
import HomePage from "../pages/HomePage";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </>
  );
};

export default MainRouter;
