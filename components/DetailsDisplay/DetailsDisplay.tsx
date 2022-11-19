import { Tooltip } from "antd";
import React from "react";
import { RowWithTitle } from "./styled";

interface Details {
  title: string;
  details: string | string[];
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
