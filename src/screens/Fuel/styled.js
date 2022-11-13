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
  margin-bottom: 80px;
`;

export const ContainerBase = styled.View`
  background-color: rgba(206, 229, 255, 0.1);
  padding: 16px;
  border-radius: 18px;
`;

export const Alcool = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const Texto = styled.Text`
  width: 50%;
  text-align: right;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #5593cf;
  margin-right: 8px;
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
  background-color: #f0f0f0;
  color: #000;
`;

export const Btn = styled.Pressable.attrs(({ pressed }) => ({
  backgroundColor: pressed ? "rgba(206, 229, 255, 0.1)" : "rgba(206, 229, 255, 0.5)",
}))`
  padding: 16px 32px;
  margin-top: 40px;
  border-radius: 18px;
`;
