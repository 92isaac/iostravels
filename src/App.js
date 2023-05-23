import "./App.css";
import Home from "pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Affiliate from "pages/affiliate/affiliate";
import Affiliatesignup from "pages/affiliate/affiliatesignup";
import Affiliatereceived from "pages/affiliate/affiliatereceived";
import Corporate from "pages/corporate/corporate";
import Blog from "pages/blog/blog";
import Corporateappointment from "pages/corporate/corporateappointment";
import Blogpost from "pages/blog/blogpost";
import Completeaffiliateaccount from "pages/affiliate/completeaffiliateaccount";
import Holiday from "pages/holiday/holiday";
import Package from "pages/holiday/package";
import Flight from "pages/flight/selectflight";
import Passengerdetail from "pages/flight/passengerdetail";
// import Tripsummary from "pages/flight/tripsummary";
// import Payment from "pages/flight/payment";
// import Success from "pages/flight/success";
import Visa from "pages/visa/visa";
import Processvisa from "pages/visa/processvisa";
import Faq from "pages/privacy/Faq";
import VerifyPayment from "pages/flight/VerifyPayment";
import { EmailSuccessSent, Login, ResetPasswod, SetupAccount } from "admin-dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route
            path="/completeaffiliateaccount"
            element={<Completeaffiliateaccount />}
          />
          <Route path="/corporate" element={<Corporate />} />
          <Route
            path="/corporateappointment"
            element={<Corporateappointment />}
          />
          <Route path="/affiliatesignup" element={<Affiliatesignup />} />
          <Route path="/affiliatereceived" element={<Affiliatereceived />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/packages" element={<Holiday />} />
          <Route path="/package/:id" element={<Package />} />
          <Route path="/selectflight" element={<Flight />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/passenger-details" element={<Passengerdetail />} />
          <Route path="/verify-payment" element={<VerifyPayment />} />
          {/* <Route path="/tripsummary" element={<Tripsummary />} />
          <Route path="/payment" element={<Payment />} /> */}
          {/* <Route path="/success" element={<Success />} /> */}
          <Route path="/visa" element={<Visa />} />
          <Route path="/processvisa" element={<Processvisa />} />
          <Route path="/admin_login" element={<Login />} />
          <Route path="/reset_password" element={<ResetPasswod />} />
          <Route path="/email_successfully_sent" element={<EmailSuccessSent />} />
          <Route path="/setup_account" element={<SetupAccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
