import Artist from '@/components/artist/Artist';
import ArtistRecentInfo from '@/components/artist/ArtistRecentInfo';
import Footer from '@/components/Footer';
import Preferences from '@/components/Preferences';
import Search from '@/components/Search';
import NarvarUser from '../components/NarvarUser';

export default function artist_info() {
  return (
    <div>
      <section>
        <NarvarUser />
        <br />
        <br />
        <br />

        <Search />
      </section>

      <section>
        <Artist />
      </section>
      <section>
        <Preferences />
      </section>
      <section>
        <ArtistRecentInfo />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
