import React, { useState } from "react";
import { Alcool, Container, ContainerBase, Custo, Logo, Resultado, Texto, TextoPadrao } from "./styled";
import AG from "../../assets/icon.png";

export const Fuel = () => {
  const [etanol, setEtanol] = useState(0);
  const [fuel, setFuel] = useState(0);

  const x = parseFloat(etanol);
  const y = parseFloat(fuel);
  const result = x / y;

  function takeBestFuel(result) {
    if (result === undefined) {
      return <Resultado>Insere um valor</Resultado>;
    } else if (result <= 0.73) {
      return <Resultado>Álcool</Resultado>;
    } else {
      return <Resultado>Gasolina</Resultado>;
    }
  }

  return (
    <>
      <Container>
        <Logo source={AG} />

        <ContainerBase>
          <Alcool>
            <Texto>Álcool R$</Texto>
            <Custo keyboardType="decimal-pad" placeholder="3.59" onChangeText={setEtanol} />
          </Alcool>
          <Alcool>
            <Texto>Gasolina R$</Texto>
            <Custo keyboardType="decimal-pad" placeholder="4.97" onChangeText={setFuel} />
          </Alcool>
        </ContainerBase>

        <TextoPadrao>O melhor para abastecer neste posto é:</TextoPadrao>
        <Resultado>{takeBestFuel(result)}</Resultado>
      </Container>
    </>
  );
};
