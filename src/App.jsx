import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AboutFeature from './components/AboutFeature';
import Button from './components/Button';
import CollectionList from './components/CollectionList';
import DiskonProduct from './components/DiskonProduct';
import FeatureProduct from './components/FeatureProduct';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Recomended from './components/Recomended';
import TopNewProduct from './components/TopNewProduct';
import HomePages from './pages/HomePages';
import DetailPages from './pages/DetailPages';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const handleRouteChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    handleRouteChange();
  }, [location]);

  return (
    <>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/product/:id" element={<DetailPages />} />
      </Routes>
    </>
  );
}

export default App;
