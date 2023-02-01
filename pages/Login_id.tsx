import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Homepopular from '@/components/home/Homepopular';
import HomeRecent from '@/components/home/HomeRecent';
import HomeSugestions from '@/components/home/HomeSugestions';
import NarvarUser from '@/components/NarvarUser';
import Preferences from '@/components/Preferences';

const Login_id = () => {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section>
        <Header />
      </section>
      <section>
        <Homepopular />
      </section>
      <section>
        <HomeSugestions />
      </section>
      <section>
        <Preferences />
      </section>
      <section>
        <HomeRecent />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Login_id;
