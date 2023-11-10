import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/';
import Home from './components/Home/';
import About from './components/About/';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';


function App() {

    return (
        <>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/*" element={<About />} /> 
                {/* "/about/*" -> всичко от about нататъка да отиде към about */}
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer/>
        </>
    )
}

export default App
