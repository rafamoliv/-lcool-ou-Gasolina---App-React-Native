import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex: 1;
`;

export const Logo = styled.Image`
  height: 135px;
  width: 265px;
  margin-bottom: 20px;
`;

export const ContainerBase = styled.View`
  margin: 5px;
  margin-top: 10px;
`;

export const Alcool = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Texto = styled.Text`
  width: 50%;
  text-align: right;
  margin-right: 10px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #5593cf;
`;

export const TextoPadrao = styled.Text`
  width: 80%;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: #5593cf;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Resultado = styled.Text`
  width: 80%;
  text-align: center;
  font-family: sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #5593cf;
`;

export const Custo = styled.TextInput`
  width: 35%;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 15px;
  background-color: #f0f0f0
  color: #000;
`;
