import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import moviesData from './assets/movies.json';
import './App.css';
//import Header from './components/header';
import ListsPage from './components/ListsPage';
import Details from './components/Details';
import { LanguageProvider, Header } from './components/header'
import Contact from './components/Contact';
import Footer from './components/footer';



function App() {

    useEffect(() => {
        console.log('Movies Data:', moviesData);
        
    }, []);

    return (
        <>
           <LanguageProvider>
            <div className="container-fluid">
                <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={<ListsPage movies={moviesData} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/details/:id" element={<Details movies={moviesData} />} />
                    </Routes>
                <Footer />
                </Router>
            </div>
            </LanguageProvider>
        </>
    );
}

export default App;