import React from "react";
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
//import Cart from "./Pages/Cart/Cart";
import Payment from "./Pages/Payment/Payment";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51PGp6KBpbK4HqhCuzsJWkKeFRwNVBvS1xP4s3v1E4gM1efYvfbbAGFGQaz7sb6PYMO4mtElPY1rzwUfF8DDf9DPo00kbNPAnQO"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to you pay"}
              redirect={"/payments"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders "}
              redirect={"/orders"}>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/category/:CatagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        {/* <Route path="/products/:productId" element={ProductDetail} /> */}

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
