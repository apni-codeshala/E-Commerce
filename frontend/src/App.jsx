import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Register from "./components/Authentication/Register";
import Home from "./pages/Home";
import Verify from "./components/Authentication/Verify";
import OTPInput from "./components/Authentication/OTPInput";
import Login from "./components/Authentication/Login";
import Denied from "./pages/Denied";
import RequireAuth from "./components/Authentication/Authorize";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Verify />} />
      <Route
        path="/register"
        element={<AuthenticationPage Page={Register} />}
      />
      <Route path="/login" element={<AuthenticationPage Page={Login} />} />
      <Route
        path="/otp-verification"
        element={<AuthenticationPage Page={OTPInput} />}
      />
      <Route
        element={<RequireAuth allowedRoles={["user", "seller", "admin"]} />}
      >
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/denied" element={<Denied />} />
      <Route path="*" element={<Notfound />} />
      {/* <Route path='/about' element={<Aboutus />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/course/description' element={<CourseDescription />} />

      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure />} />

        <Route path="/course/displaylectures" element={<DisplayLectures />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse />} />
        <Route path="/course/addlecture" element={<AddLecture />} />
      </Route>

      <Route path='/contacts' element={<Contact />} />
      <Route path='/denied' element={<Denied />} />
      <Route path='*' element={<Notfound />} /> */}
    </Routes>
  );
}

export default App;
