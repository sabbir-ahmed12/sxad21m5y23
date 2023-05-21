import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ToastNotification from "./components/common/ToastNotification";

function App() {
  return (
    <>
      <ToastNotification message="This page was last updated on May 21, 2023" />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
