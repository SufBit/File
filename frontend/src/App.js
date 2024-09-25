import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import LandingPage from './pages/LandingPage';

const App = () => (
  
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>

);

export default App;
