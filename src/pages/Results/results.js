import React from "react";
import { Button } from "react-native";
import { Teste } from "./styled";

export default function Results({ navigation }) {
  return (
    <>
      <Teste>Results</Teste>
      <Button title="Inicio" onPress={() => navigation.navigate("Landing")} />
    </>
  );
}
