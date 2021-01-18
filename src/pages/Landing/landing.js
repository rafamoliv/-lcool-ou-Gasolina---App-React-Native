import React from "react";
import { Button } from "react-native";
import { Teste } from "./styled";

export default function Landing({ navigation }) {
  return (
    <>
      <Teste>Teste</Teste>
      <Button title="Resultado" onPress={() => navigation.navigate("Results")} />
    </>
  );
}
