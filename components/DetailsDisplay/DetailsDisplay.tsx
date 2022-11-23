import { Tooltip } from "antd";
import React from "react";
import { RowWithTitle } from "./styled";

interface Details {
  title: string;
  details: string; //| string[] | null; // trzeba sprawdzić typy po kolei dla każdego elementu wyświetlanego - się może okazazać, że nie da rady jednym wylistować wszystkiego. Albo że trzeba pokombinować ;d
  tooltip?: string | string[];
}

const DetailsDisplay = ({ title, details, tooltip }: Details) => {
  return (
    <>
      {tooltip && (
        <Tooltip placement="bottomLeft" title={tooltip}>
          <RowWithTitle>
            <span>{title}</span>
            {details}
          </RowWithTitle>
        </Tooltip>
      )}

      {!tooltip && (
        <RowWithTitle>
          <span>{title}</span>
          {details}
        </RowWithTitle>
      )}
    </>
  );
};

export default DetailsDisplay;
