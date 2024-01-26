import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
