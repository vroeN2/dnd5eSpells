import styled from "styled-components";
import { Input, Select, Checkbox, Button } from "antd";

export const SearchbarWrapper = styled.div`
  transition: 0.15s all ease;
  background: rgba(255, 255, 255, 0.8);
  z-index: 3;
  width: 80vw;
  height: 10vh;
  position: fixed;
  top: 9vh;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1d1d1d;
  border-radius: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;

export const SearchbarContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBarInput = styled(Input)`
  width: 25%;
  background: white;
`;

export const FilterSelect = styled(Select)`
  width: 15%;
`;

export const FilterCheckbox = styled(Checkbox)`
  font-size: 1rem;

  span:first-child {
    border: 1px solid #23392e;
    border-radius: 0.15rem;
  }
`;

export const ResetFiltersButton = styled(Button)`
  font-size: 1rem;
  margin-left: 1rem;
  transition: 150ms all ease;

  &:hover {
    border: 1px solid;
  }
`;
