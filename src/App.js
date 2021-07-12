import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShoppingPage from "./pages/ShoppingPage";
import PanchakarmaPage from "./pages/PanchakarmaPage";
import PostDeliveryCarePage from "./pages/PostDeliveryCarePage";
import SwarnaPrashanaPage from "./pages/SwarnaPrashanaPage";
import YogaPage from "./pages/YogaPage";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import RejuvenationPage from "./pages/RejuvenationPage";
import AdminPanel from "./components/AdminPanel";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import Loginpage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import { createContext } from "react";
import CheckoutPage from "./pages/CheckoutPage";
import useCart from "./components/useCart";
import ManageAppointmentsPage from "./pages/ManageAppointmentsPage";
import ManageProductsPage from "./pages/ManageProductsPage";
import ManageOrdersPage from "./pages/ManageOrdersPage";
import AdminSettingsPage from "./pages/AdminSettingsPage";
import OrdersPage from "./pages/OrdersPage";
import ClientSettingsPage from "./pages/ClientSettingsPage";

export const UserContext = createContext();

function App() {
  // fetch cart data and store it in state. when cart changes, fetch it from db
  // const [cartUpdated,setCartUpdated]= useState(false)
  const [user, setUser] = useState(() => {
    let userId = localStorage.getItem("userId");
    var userType = localStorage.getItem("userType");
    if (userId && userType) return { userId, userType };
    else return null;
  });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [cart, setCart, cartUpdated, setCartUpdated] = useCart(user);

  return (
    <Router>
      <Navbar
        toggle={toggle}
        cartCount={cart.length}
        user={user}
        setUser={setUser}
        setCart={setCart}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} cartCount={cart.length} />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/book_appointment" component={BookAppointmentPage} />
        <Route path="/appointments" component={AdminPanel} />
        <Route path="/rejuvenation" component={RejuvenationPage} />
        <Route path="/panchakarma" component={PanchakarmaPage} />
        <Route path="/post_delivery_care" component={PostDeliveryCarePage} />
        <Route path="/swarna_prashana" component={SwarnaPrashanaPage} />
        <Route path="/yoga" component={YogaPage} />
        <UserContext.Provider
          value={{ user, setUser, cart, setCart, cartUpdated, setCartUpdated }}
        >
          <Route exact path="/checkout/:cartId" component={CheckoutPage} />
          <Route path="/login" component={Loginpage} />
          <Route path="/shop" component={ShoppingPage} />
          <Route
            path="/cart"
            component={() => {
              if (user) return <CartPage />;
              else
                return (
                  <Redirect
                    to={{ pathname: "/login", state: { redirectUri: "/cart" } }}
                  />
                );
            }}
          />
          <Route
            path="/manage_appointments"
            component={() => {
              if (user && user.userType === "admin")
                return <ManageAppointmentsPage />;
              else if (user && user.userType === "client")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/manage_appointments" },
                    }}
                  />
                );
            }}
          />
          <Route
            path="/manage_products"
            component={() => {
              if (user && user.userType === "admin")
                return <ManageProductsPage />;
              else if (user && user.userType === "client")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/manage_products" },
                    }}
                  />
                );
            }}
          />
          <Route
            path="/manage_orders"
            component={() => {
              if (user && user.userType === "admin")
                return <ManageOrdersPage />;
              else if (user && user.userType === "client")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/manage_orders" },
                    }}
                  />
                );
            }}
          />
          <Route
            path="/admin_settings"
            component={() => {
              if (user && user.userType === "admin")
                return <AdminSettingsPage />;
              else if (user && user.userType === "client")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/admin_settings" },
                    }}
                  />
                );
            }}
          />
          <Route
            path="/orders"
            component={() => {
              if (user && user.userType === "client") return <OrdersPage />;
              else if (user && user.userType === "admin")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/orders" },
                    }}
                  />
                );
            }}
          />
          <Route
            path="/settings"
            component={() => {
              if (user && user.userType === "client")
                return <ClientSettingsPage />;
              else if (user && user.userType === "admin")
                return <Redirect to={"/"} />;
              else
                return (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { redirectUri: "/settings" },
                    }}
                  />
                );
            }}
          />
        </UserContext.Provider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
