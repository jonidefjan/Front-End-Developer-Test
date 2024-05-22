import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContentDetailsPage from './pages/ContentDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import GamesPage from './pages/GamesPage';
import VideosPage from './pages/VideosPage';
import ArtworkPage from './pages/ArtworkPage';
import MusicPage from './pages/MusicPage';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/content/:id" element={<ContentDetailsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/artwork" element={<ArtworkPage />} />
          <Route path="/music" element={<MusicPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
