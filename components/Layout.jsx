import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <Header />

      <Footer />

      <main>{children}</main>

      <br />

      {/* <section className="h-screen bg-red bg-cover md:bg-top bg-center">
        <div>hola prueba</div>
      </section> */}
    </div>
  );
}
