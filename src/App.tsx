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
  max-width: 1200px
  margin: 0 auto;
  padding: 0 20px; 
  background-color: rgb(173, 209, 240);
  `;

const Content = styled.div`
  flex-grow: 1;
  padding: 0 30px; /* You can adjust this to add padding inside the content */
`;

const Root = () => {
  return (
    <Container>
      
      <Content>
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
      </Content>
      <Footer />
    </Container>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}