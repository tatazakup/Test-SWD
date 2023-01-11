import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

const Page1: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("common");

  const listCard = [
    {
      onClick: () =>
        navigate("layout-style", { state: { header: "website-management" } }),
      content: t("website-management"),
    },
    {
      onClick: () => {},
      content: t("integrate-api"),
    },
    {
      onClick: () => {},
      content: t("form-management"),
    },
  ];

  return (
    <div className="app-center">
      <div className="m-auto w-60">
        <Row gutter={16}>
          {listCard.map(({ onClick, content }, index) => (
            <Col span={8} key={index}>
              <Card
                className="card-link w-70 m-auto"
                title={`${t("test")} ${index + 1}`}
                bordered={false}
                onClick={onClick}>
                {content}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Page1;
