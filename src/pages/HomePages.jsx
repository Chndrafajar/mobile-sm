import React from 'react';
import { AboutFeature, CollectionList, DiskonProduct, FeatureProduct, Footer, HeroSection, Navbar, TopNewProduct } from '../components/Index';

export default function HomePages() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutFeature />
      <FeatureProduct />
      <DiskonProduct />
      <TopNewProduct />
      <CollectionList />
      <Footer />
    </>
  );
}
