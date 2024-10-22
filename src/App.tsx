import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import References from './pages/References';
import Achievements from './pages/Achievements';
import Education from './pages/Education'; 
import Employment from './pages/Employment'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`;

const Content = styled.div`
  flex-grow: 1;
`;

const Root = () => {
  return (
    <div>

      <Container>

      <Header />
      <Content>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employment" element={<Employment />} />
        <Route path="education" element={<Education />} /> 
        <Route path="references" element={<References />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      </Content>
      <Footer />
      </Container>

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

