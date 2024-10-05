import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Verify from "./components/Verify";
import OTPInput from "./components/OTPInput";
import Login from "./components/Login";

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
      <Route path="/home" element={<HomePage />} />
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
