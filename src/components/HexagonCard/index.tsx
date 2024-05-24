import React from "react";

interface HexagonCardProps {
  count: number;
  text: string;
}

const HexagonCard: React.FC<HexagonCardProps> = ({ count, text }) => {
  return (
    <div className="hexagonCard">
      <div className="hexagonCard_textContainer">
        <div className="hexagonCard_textContainer_text">
          <div className="heading">{`${
            count !== 0 && count !== undefined ? `${count}+` : ""
          }`}</div>
          <div className="subtext">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default HexagonCard;
