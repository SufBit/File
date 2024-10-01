import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.js';
import { MyNotes } from './pages/MyNotes/MyNotes.js';

const App = () => (
  
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path = '/' element={<LandingPage/>}/>
          <Route path = '/mynotes' element={<MyNotes/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

);

export default App;
