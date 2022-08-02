import styled from "styled-components";

interface Props {
  top: number;
  left: number;
}

export const BallContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  background-color: #171717;
`;

export const Ball = styled.div<Props>`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 999999px;
  background-color: red;
  margin-top: ${(props) => `${props.top}px`};
  margin-left: ${(props) => `${props.left}px`};
  transition: 1s;
`;
