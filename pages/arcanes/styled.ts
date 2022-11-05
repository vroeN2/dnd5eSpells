import styled from "styled-components";
// import { Box, CheckBox, Select, TextInput } from "grommet";
import { Checkbox, OutlinedInput, Select, Box, MenuItem } from "@mui/material";

export const ArcanesWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  background: url("assets/bg_1.png") no-repeat center center fixed;
  background-size: cover;
`;

export const ListWrapper = styled.div`
  margin-top: 25vh;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchbarWrapper = styled(Box)`
  transition: 0.15s all ease;
  background: white;
  z-index: 3;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 9vh;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #1d1d1d;
`;

export const SearchbarContent = styled.div`
  width: 80%;
  display: flex;
  /* justify-content: flex-start; */
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled(OutlinedInput)`
  color: #1f1f1f;
  font-family: "Aclonica", sans-serif;
  width: 30vw;
`;

export const FilterSelect = styled(Select)`
  width: 10vw;
  color: #1f1f1f;
`;

export const FilterCheckbox = styled(Checkbox)``;

export const CheckboxLabel = styled.p`
  color: #1f1f1f;
  font-family: "Aclonica", sans-serif;
`;

export const SelectOption = styled(MenuItem)`
  color: #1f1f1f;
  font-family: "Aclonica", sans-serif;
`;
