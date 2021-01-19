import React from "react";
import { Container, Footer, Top } from "./src/assets/app";
import BannerTOP from "./src/components/BannerTOP";
import BannerDOWN from "./src/components/BannerDown";
import Landing from "./src/pages/Landing";

export default function App() {
  return (
    <>
      <Container>
        <Top>
          <BannerTOP />
        </Top>

        <Landing />

        <Footer>
          <BannerDOWN />
        </Footer>
      </Container>
    </>
  );
}
