import styled from "@emotion/styled";

import { colors } from "../../theme/variables";

const S: any = {};
S.Button = styled.button`
  text-transform: uppercase;
  padding: 1.5rem 3rem;
  display: block;
  border-radius: 0.5rem;
  background-color: ${colors.green};
  width: 100%;
  font-size: 1.5rem;
  font-weight: 600;

  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  color: #fff;

  box-shadow: inset 0 -0.4rem 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 1.1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: inset 0 -0.55rem 0 rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(-0.2rem);
    box-shadow: inset 0 -0.45rem 0 rgba(0, 0, 0, 0.15);
  }
`;

interface iButtonProps {
  type?: String;
  children?: any;
}

const Button: React.FC<iButtonProps> = ({ type = "submit", children }) => {
  return <S.Button type={type}>{children}</S.Button>;
};

export default Button;
