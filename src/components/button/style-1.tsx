import { Button } from "antd";
import { FC } from "react";

interface ButtonProps {
  labelButton?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  btnProps?: object;
}

const buttonStyle1: FC<ButtonProps> = (props) => {
  const {
    labelButton = undefined,
    disabled = false,
    children,
    btnProps = {},
  } = props;

  return (
    <>
      <Button
        {...btnProps}
        style={{ width: "100%", height: "170px" }}
        className="style1"
        disabled={disabled}>
        {children}
        {labelButton ? <div className="label-button">{labelButton}</div> : null}
      </Button>
    </>
  );
};

export default buttonStyle1;
