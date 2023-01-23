import Atoms from '@/components/Atoms';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function components() {
  return (
    <div>
      <div>
        <h1>Atoms</h1>
        <Atoms />
      </div>
      <div>
        <h1>Navbar</h1>
        <Navbar />
      </div>
      <div>
        <h1>Header</h1>
        <Header />
      </div>
      <div>
        <h1>Footer</h1>
        <Footer />
      </div>
    </div>
  );
}
