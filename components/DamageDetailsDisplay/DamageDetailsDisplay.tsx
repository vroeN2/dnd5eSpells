import { Tooltip } from "antd";
import React from "react";
import { ColumnWithTitle } from "../arcanes/styled";
import { RowWithTitle } from "./styled";

interface Details {
  title: string;
  details: string;
  tooltip?: TooltipInterface;
}

export interface TooltipInterface {
  content: { damage: string; level: number }[] | null;
  title: string;
}

const DamageDetailsDisplay = ({ title, details, tooltip }: Details) => {
  const createTooltip = (tooltip: TooltipInterface) => {
    const { title, content } = tooltip;
    if (content) {
      return (
        <ColumnWithTitle>
          <span>{title}</span>
          {content.map((sub) => {
            return (
              <p key={sub.level} style={{ marginBottom: 0 }}>
                <span>{sub.level}:</span> {sub.damage}
              </p>
            );
          })}
        </ColumnWithTitle>
      );
    }
  };

  return (
    <>
      {tooltip && (
        <Tooltip
          placement="bottomLeft"
          title={createTooltip(tooltip)}
          color={"#fff"}
        >
          <RowWithTitle>
            <span style={{ textDecoration: "underline" }}>{title}</span>
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

export default DamageDetailsDisplay;
