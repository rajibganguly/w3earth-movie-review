import { createContext, useState, useContext, ReactNode } from 'react';
import './../App.css';
import { Link } from 'react-router-dom';

// Define the context type
interface LanguageContextType {
    lang: string;
    setLang: (lang: string) => void;
}

// Create a Context with the defined type
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const Header = () => {
    const context = useContext(LanguageContext);
    const [activeLanguage, setActiveLanguage] = useState('All');

    if (!context) {
        throw new Error('Header must be used within a LanguageProvider');
    }

    const { setLang } = context;

    const setLanguage = (l: string) => {
        setActiveLanguage(l)
        setLang(l);
    };

    return (
        <>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 link-body-emphasis text-decoration-none">
            <span className="display-5 link-body-emphasis mb-1 fs-2"><strong>w3earth</strong> <small className="fs-5">movie-review</small></span>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"><a href="#" className={`nav-link ${activeLanguage === 'All' ? 'active' : ''}`} aria-current="page" onClick={() => setLanguage('All')}>All</a></li>
            <li className="nav-item"><a href="#" className={`nav-link ${activeLanguage === 'English' ? 'active' : ''}`} onClick={() => setLanguage('English')}>English</a></li>
            <li className="nav-item"><a href="#" className={`nav-link ${activeLanguage === 'Hindi' ? 'active' : ''}`} onClick={() => setLanguage('Hindi')}>Hindi</a></li>
        </ul>

        <ul className="nav nav-pills">
        <li className="nav-item"><Link className="btn btn-outline-dark me-2" to="/" >List of Movies</Link></li>
            <li className="nav-item"><Link className="btn btn-outline-dark me-2" to="/contact" >Contact</Link></li>
        </ul>
        </header>
        </>
    );
};

const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState(sessionStorage.getItem('lang') || 'All');


    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { Header, LanguageProvider, LanguageContext };