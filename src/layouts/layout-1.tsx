import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Select } from "antd";

interface LayoutProps {
  children: React.ReactNode;
}

const layout1: FC<LayoutProps> = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t, i18n] = useTranslation("common");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state } = useLocation();
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const handleChange = (language: string) => i18n.changeLanguage(language);

  return (
    <>
      <div className="app">
        <div className="header">{state?.header ? t(state?.header) : null}</div>
        <div className="language">
          <Select
            defaultValue="th"
            style={{ width: 120 }}
            onChange={handleChange}
            options={[
              {
                value: "th",
                label: "th",
              },
              {
                value: "en",
                label: "en",
              },
            ]}
          />
        </div>
        <div className="app-container">{children}</div>
      </div>
    </>
  );
};

export default layout1;
