import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

interface ArrowProps {
  direction: 0 | 1;
}

export const SlideHeader = styled.h2`
  font-size: 5rem;
  max-width: 30%;
  color: white;
  text-shadow: 0px 0px 5px #1f1f1f;
`;

export const SlideDescription = styled.h3`
  font-size: 2rem;
  max-width: 17%;
  color: white;
  text-shadow: 0px 0px 5px #1f1f1f;
`;

export const ArrowDownWrapper = styled.div`
  position: absolute;
  bottom: 15rem;
  right: 50%;
  transform: translateY(50%);
  width: 100px;
  height: 100px;
  color: white;
`;

export const StyledArrow = styled(IoIosArrowDown)<ArrowProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.15s all ease;
    animation: ${(props) => (props.direction === 1 ? "popReverse" : "pop")} 1.5s
      infinite;
  }

  &:hover {
    cursor: pointer;

  @keyframes pop {
    0% {
      transform: translate(-50%, -50%) scale(1.25, 0.75);
    }
    50% {
      transform: translate(-50%, -150%) scale(1, 1);
    }
    55% {
      transform: translate(-50%, -150%) rotate(15deg);
    }
    60% {
      transform: translate(-50%, -150%) rotate(-15deg);
    }
    65% {
      transform: translate(-50%, -150%) rotate(15deg);
    }
    70% {
      transform: translate(-50%, -150%) rotate(-15deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1.25, 0.75);
    }
  }

  @keyframes popReverse {
    0% {
      transform: translate(-50%, -150%) scale(1.25, 0.75);
    }
    50% {
      transform: translate(-50%, -50%) scale(1, 1);
    }
    55% {
      transform: translate(-50%, -50%) rotate(15deg);
    }
    60% {
      transform: translate(-50%, -50%) rotate(-15deg);
    }
    65% {
      transform: translate(-50%, -50%) rotate(15deg);
    }
    70% {
      transform: translate(-50%, -50%) rotate(-15deg);
    }
    100% {
      transform: translate(-50%, -150%) scale(1.25, 0.75);
    }
  }
`;
