import React from "react";
import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

//FUNCTION COMPONENT
function Button({onClick, type, children}: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

//CLASS COMPONENT
class Button1 extends React.Component<{
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}> {
  render(): React.ReactNode {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
