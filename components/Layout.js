import NavBar from "./Navbar";
import Footer from "./Footer";
import ActiveResource from "./ActiveResource";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <ActiveResource />
      {children}
      <Footer />
    </>
  );
}
