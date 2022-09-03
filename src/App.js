import Navbar from './components/Navbar';
import Header from './components/Header';
import Photoshoot from './components/Photoshoot';
import PackagePhotos from './components/PackagePhotos';
import About from './components/About';
import PhotographySoon from './components/PhotographySoon';

import './scss/app.scss';
import Map from './components/Map';
import Review from './components/Review';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Header />
                <Photoshoot />
                <PackagePhotos />
                <About />
                <PhotographySoon />
                <Map />
                <Review />
            </main>
        </div>
    );
}

export default App;
