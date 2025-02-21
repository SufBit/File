import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.js';
import { MyNotes } from './pages/MyNotes/MyNotes.js';
import  LoginScreen  from './pages/LoginScreen/LoginScreen.js';
import RegisterPage from './pages/RegisterPage/RegisterPage.js';
import CreateNote from './pages/CreateNote/CreateNote.js';
import SingleNote from './pages/CreateNote/SingleNote.js';
import { useState } from 'react';
import ProfileScreen from './pages/ProfileScreen/profileScreen.js';

const App = () => {

  const [search, setSearch] = useState("");
  console.log(search);
  
    return (
      <BrowserRouter>
        <Header setSearch = {setSearch} />
        <main>
          <Routes>
            <Route path = '/' element={<LandingPage/>}/>
            <Route path = '/login' element={<LoginScreen/>}/>
            <Route path = '/register' element={<RegisterPage/>}/>
            <Route path = '/createnote' element={<CreateNote/>}/>
            <Route path = '/note/:id' element={<SingleNote/>}/> 
            <Route path = '/profile' element={<ProfileScreen />}/>
            <Route path = '/mynotes' element={<MyNotes search= {search}/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    );

};

export default App;
