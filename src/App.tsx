import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import References from './pages/References';
import Achievements from './pages/Achievements';
import Education from './pages/Education'; 
import Employment from './pages/Employment'; 


const Root = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employment" element={<Employment />} />
        <Route path="education" element={<Education />} /> 
        <Route path="references" element={<References />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter (
  [{path:"*", Component: Root}]
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

