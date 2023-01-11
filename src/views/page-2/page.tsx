import { Col, Row } from "antd";
import ButtonMove from "../../components/button/style-1";
import {
  TrapeziumIcon,
  ParallelogramIcon,
  RectangleIcon,
  CircleIcon,
  SquareIcon,
  EllipseIcon,
} from "../../components/icons";
import {
  CaretLeftOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const ICON = {
  1: <SquareIcon />,
  2: <CircleIcon />,
  3: <EllipseIcon />,
  4: <TrapeziumIcon />,
  5: <RectangleIcon />,
  6: <ParallelogramIcon />,
};

const Page2 = () => {
  const [sequenceIcon, setSequenceIcon] = useState([1, 2, 3, 4, 5, 6]);
  const [position, setPosition] = useState(true);
  const styleIcon = { fontSize: "160px", color: "gray" };

  const moveLeft = () => {
    const fistElement = sequenceIcon[0];
    const leftElement = sequenceIcon.slice(1);
    setSequenceIcon([...leftElement, fistElement]);
  };

  const moveRight = () => {
    const lastElement = sequenceIcon[5];
    const leftElement = sequenceIcon.slice(0, 5);
    setSequenceIcon([lastElement, ...leftElement]);
  };

  const movePosition = () => {
    const row1 = sequenceIcon.slice(0, 3);
    const row2 = sequenceIcon.slice(3, 6);
    setPosition(!position);
    setSequenceIcon([...row2, ...row1]);
  };

  const randomPosition = () => {
    let arr = [];
    while (arr.length < 6) {
      let r = Math.floor(Math.random() * 6) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    setPosition(!position);
    setSequenceIcon(arr);
  };

  return (
    <div className="app-center">
      <div className="m-auto w-60">
        <Row gutter={24} className="w-100">
          <Col span={6}>
            <ButtonMove
              labelButton="MoveShrap"
              btnProps={{
                onClick: () => moveLeft(),
              }}>
              <CaretLeftOutlined style={styleIcon} />
            </ButtonMove>
          </Col>
          <Col span={12}>
            <ButtonMove
              labelButton="MovePosition"
              btnProps={{
                onClick: () => movePosition(),
              }}>
              <CaretUpOutlined style={styleIcon} />
              <CaretDownOutlined style={styleIcon} />
            </ButtonMove>
          </Col>
          <Col span={6}>
            <ButtonMove
              labelButton="MoveShrap"
              btnProps={{
                onClick: () => moveRight(),
              }}>
              <CaretRightOutlined style={styleIcon} />
            </ButtonMove>
          </Col>
        </Row>

        <Row gutter={16}>
          {sequenceIcon.slice(0, 3).map((icon, index) => (
            <Col
              span={6}
              offset={index === 0 ? (position ? 6 : 3) : 0}
              key={index}>
              <ButtonMove
                btnProps={{
                  onClick: () => randomPosition(),
                }}>
                {Object.values(ICON)[icon - 1]}
              </ButtonMove>
            </Col>
          ))}
        </Row>

        <Row gutter={16}>
          {sequenceIcon.slice(3, 6).map((icon, index) => (
            <Col
              span={6}
              offset={index === 0 ? (position ? 3 : 6) : 0}
              key={index}>
              <ButtonMove
                btnProps={{
                  onClick: () => randomPosition(),
                }}>
                {Object.values(ICON)[icon - 1]}
              </ButtonMove>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Page2;
