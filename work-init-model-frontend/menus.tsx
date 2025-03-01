// ./menus.tsx: 配置菜单

import { MenuDataItem } from "@ant-design/pro-layout";
import { BulbOutlined, CrownOutlined, TableOutlined } from "@ant-design/icons";
import { ACCESS_ENUM } from "@/constants";

// 配置菜单的时候也必须保证具有对应约定路由

const menus = [
    {
        path: "/",
        name: "主页",
        // hideInMenu: true, // 隐藏路由
        // target: "_blank", // 新开标签
        access: ACCESS_ENUM.NOT_LOGIN,
    },
    {
        path: "/list",
        name: "列表",
        icon: <TableOutlined />,
        hideInMenu: true,
        children: [
            {
                path: "/list/list1",
                name: "列表1",
            },
            {
                path: "/list/list2",
                name: "列表2",
            },
        ],
    },
    {
        path: "/admin",
        name: "管理",
        icon: <CrownOutlined />,
        access: ACCESS_ENUM.ADMIN,
    },
    {
        path: "/other",
        name: "其他",
        icon: <BulbOutlined />,
        access: ACCESS_ENUM.USER,
        // target: "_blank",
    },
] as MenuDataItem[]; // 这样写会提供编写本菜单配置的智能提示

export default menus;