import React from "react";
import { Container, Footer } from "./src/assets/app";
import BannerTOP from "./src/components/BannerTOP";
import BannerDOWN from "./src/components/BannerDown";
import Routes from "./src/Routes";

export default function App() {
  return (
    <>
      <Container>
        <BannerTOP />

        <Routes />

        <Footer>
          <BannerDOWN />
        </Footer>
      </Container>
    </>
  );
}
