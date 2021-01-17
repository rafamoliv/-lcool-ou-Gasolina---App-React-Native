import React from 'react';
import { Container, ContainerApp } from './src/assets/app';
import BannerTOP from './src/components/BannerTOP';
import BannerDOWN from './src/components/BannerDown';
import Landing from './src/pages/Landing';


export default function App() {
  return (
    <>
      <Container>
        <BannerTOP/>

        <ContainerApp>
          <Landing/>
        </ContainerApp>

        <BannerDOWN/>
      </Container>
    </>
  );
}
