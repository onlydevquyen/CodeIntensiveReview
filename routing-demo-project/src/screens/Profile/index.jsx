import React from "react";
import { Button, Tabs } from "antd";
import CardUserOverview from "../../components/CardUserOverview";
import { Outlet, useLocation, useNavigate } from "react-router";
import { LogoutOutlined } from "@ant-design/icons";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tabItems = [
    {
      key: "post",
      label: "My posts",
    },
    {
      key: "information",
      label: "My Profile",
    },
  ];

  const getActiveKey = () => {
    let path = location.pathname;
    if (path.endsWith("/information")) return "information";
    else if (path.endsWith("/post") || path.endsWith("/my-information"))
      return "post";
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="profilePage m-auto p-[18px] max-w-[90vw] min-h-[50vh] flex gap-[18px]">
      <div className="flex-[0.25]  p-[18px] bg-white text-center">
        <CardUserOverview />
        <Button icon={<LogoutOutlined />} onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex-[0.75] bg-white  p-[18px]">
        <Tabs
          activeKey={getActiveKey()}
          items={tabItems}
          onChange={(key) => {
            navigate(`/my-profile/${key}`);
          }}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
