import Footer from "./Footer";
import Header from "./Header";
import Foo from "./foo";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Foo />
      <Footer />
    </div>
  );
};

export default Layout;
