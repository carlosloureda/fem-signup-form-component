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

  &:hover:not(:disabled) {
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

  &:disabled {
    background-color: ${colors.dark};
    cursor: wait;
  }
`;

interface iButtonProps {
  type?: String;
  children?: any;
  // props?: any;
}

// Don't perfeclty know why the & any, but solved the issue for adding `...props`.
// Credits to this stackoverflow post: https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib
const Button: React.FC<iButtonProps & any> = ({
  type = "submit",
  children,
  ...props
}) => {
  console.log("props: ", props);
  return (
    <S.Button type={type} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
