# work-init-model-frontend

> [!TIP]
>
> 吐槽：如果希望快速使用本模板并且跳过复杂的环节，就可以直接参考本文的 `项目初始、项目依赖` 后，直接前往复制代码仓库中的 `./src` 和 `./public` 目录覆盖本地（可以完全覆盖），并且把 `./` 下的一些重要文件（而不是目录）保持大体的一致（有少部分内容需要修改）即可。
> 另外本项目基于 `Antd UI` 进行开发，如果您希望更加强大的现代的 `UI`，可以考虑使用 `Material UI` 进行开发。再激进一点，则可以考虑使用 `Berry UI Template`

## 1.项目初始

```shell
# 初始项目
$ node -v
v22.11.0

$ npx create-next-app@14.2.6 # 都选 Yes, 但是 Tailwind CSS 选 No
✔ What is your project named? … work-init-model-frontend
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
✔ What import alias would you like configured? … @/* # 这里直接回车选默认就可以
Creating a new Next.js app in /home/ljp/data/ljp/git/work-init-model/work-init-model-frontend/work-init-model-frontend.
$ cd <项目名称> && npm install

# $ npm run start # 快速启动, 访问 http://localhost:3000/ 即可得到页面
# $ npm run build # 编译项目, 
# $ npm run analyze # 检测性能
# $ npm run lint # 检查问题

```

## 2.项目依赖

```shell
# 项目依赖
# 必备依赖
$ npm install antd --save # 参考 https://ant.design/components/overview-cn
$ npm install @ant-design/nextjs-registry --save # 针对 App Router 模式的 Next.js 需要处理页面闪动的情况进行优化
$ npm i @ant-design/pro-components --save # 参考 https://procomponents.ant.design/docs/intro
$ npm install axios
$ npm i --save-dev @umijs/openapi
$ npm install ts-node --save-dev # 这个后续自动生成接口需要使用
$ npm install @reduxjs/toolkit react-redux # 状态需要使用到
$ npm install eslint-config-prettier -D # prettier 用得到
$ npm install --save-dev eslint-config-prettier # 整合了 ESLint 和 Prettier, 参考 https://nextjs.org/docs/app/api-reference/config/eslint#prettier
$ npm install --save-dev --save-exact prettier # 安装 Prettier 以生效, 参考 https://prettier.io/docs/install

# 可选依赖
$ npm i @bytemd/react # 用于引入通用组件中的 Markdown 组件
$ npm i @bytemd/plugin-highlight @bytemd/plugin-gfm

```

> [!IMPORTANT]
>
> 补充：不过也可以一次性执行下面的脚本文件，还能顺带创建一些文件和目录。
>
> ```shell
> # !/bin/bash
> # 脚本文件(必须在 "./" 下执行, "./" 指整个前端项目的根目录)
> # 必备依赖
> npm install antd --save # 参考 https://ant.design/components/overview-cn
> npm install @ant-design/nextjs-registry --save # 针对 App Router 模式的 Next.js 需要处理页面闪动的情况进行优化
> npm i @ant-design/pro-components --save # 参考 https://procomponents.ant.design/docs/intro
> npm install axios
> npm i --save-dev @umijs/openapi
> npm install ts-node --save-dev # 这个后续自动生成接口需要使用
> npm install @reduxjs/toolkit react-redux # 状态需要使用到
> npm install eslint-config-prettier -D # prettier 用得到
> npm install --save-dev eslint-config-prettier # 整合了 ESLint 和 Prettier, 参考 https://nextjs.org/docs/app/api-reference/config/eslint#prettier
> npm install --save-dev --save-exact prettier # 安装 Prettier 以生效, 参考 https://prettier.io/docs/install
> 
> # 可选依赖
> npm i @bytemd/react # 用于引入通用组件中的 Markdown 组件
> npm i @bytemd/plugin-highlight @bytemd/plugin-gfm
> 
> # 创建文件
> touch robots.txt
> touch menus.tsx
> touch openapi.config.ts
> 
> # 创建目录
> mkdir -p ./src/layouts
> mkdir -p ./src/api
> mkdir -p ./src/components
> mkdir -p ./src/constants
> mkdir -p ./src/layouts
> mkdir -p ./src/libs
> mkdir -p ./src/stores
> 
> ```

## 3.项目配置

> [!CAUTION]
>
> 警告：直接存放在 ./ 下的单文件基本都是配置文件或文档文件，下面的每一个文件中的首行注释都去掉。注意，放在根目录下的目的仅仅是为了不让项目具有过多的目录导致产生杂乱的工作目录树。

```shell
# ./.gitignore: 忽略文件
$ vim .gitignore && cat ./.gitignore
# 忽略文件路径

```

```shell
# ./README.md: 配置 md
$ vim ./README.md && cat ./README.md
# 项目介绍文件

```

```shell
# ./package.json: 配置 npm
{
  "name": "work-init-model-frontend",
  "version": "0.1.0",
  "private": true,
  # 只覆盖 scripts 下的所有指令即可
  ### >>> beg >>> ###
  "scripts": {
    "dev": "next dev",
    "build": "next build && cp -r ./public .next/standalone/ && cp -r ./.next/static .next/standalone/.next/",
    "start": "next start",
    "lint": "next lint",
    "package": "mkdir -p ./.next/target && zip -r ./.next/target/standalone.zip .next/standalone",
    "openapi": "ts-node openapi.config.ts"
  },
  ### >>> end >>> ###
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.6"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.6"
  }
}
修改页面全局布局文件
```

```shell
# ./tsconfig.json: 配置 ts(该文件不变动只是做一个解读)
{
  "compilerOptions": { # 配置 TypeScript 的编译行为
    "lib": ["dom", "dom.iterable", "esnext"], # 编译时包含的库, 支持 DOM、可迭代 DOM 对象以及 ESNext 特性
    "allowJs": true, # 允许编译 JavaScript 文件, 即使项目中主要使用 TypeScript
    "skipLibCheck": true, # 跳过库看看访问是否成功文件的类型检查, 提高编译速度
    "strict": true, # 启用严格模式, 确保 TypeScript 的严格类型检查
    "noEmit": true, # 不生成输出文件, 只做类型检查, 常用于开发时
    "esModuleInterop": true, # 允许默认导入非 ES 模块的 CommonJS 模块
    "module": "esnext", # 设置模块系统为 ESNext, 可以支持 ES6 模块和最新的 JavaScript 特性
    "moduleResolution": "bundler", # // 使用 bundler 模式解析模块, 适合现代构建工具(如 Webpack)
    "resolveJsonModule": true, # 允许导入 `.json` 文件并解析为模块
    "isolatedModules": true, #修改页面全局布局文件
        "name": "next" # 启用 Next.js 插件, 支持 Next.js 特有的编译特性
      }
    ],
    "paths": { # 路径别名配置
      "@/*": ["./src/*"] # 使用 '@/' 路径别名指向 './src/' 目录
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"], # 包含的文件类型和目录
  "exclude": ["node_modules"] # 排除的目录, 通常不编译 `node_modules` 中的文件
}

```

```shell
# ./next.config.mjs: 配置 next
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone", // 这里修改为使用 standalone 模式来部署(这样上传服务器不用上传 node_modules/), 而 ./.next/standalone/ 目录就是可独立部署包, 不过还需要把 ./public 复制到 ./.next/standalone/ 内, 把 .next/static 复制到 .next/standalone/.next 内, 前面已经在 package.json 中对 build 指令进行了修改
    
    /*
    typescript: {
        ignoreBuildErrors: true, // 即使项目存在类型错误, 也允许产品构建成功完成
    },
    */
};

export default nextConfig;

```

```shell
# .eslintrc.json: 配置 prettier
# 安装代码自动格式化插件 Prettier
$ vim eslintrc.json && cat eslintrc.json # .eslintrc.json: 配置 eslint
{
  "extends": ["next/core-web-vitals", "prettier"]
}
# 如果使用的是 WebStorm 就需要在中 Setting 中搜索 Prettier 然后选择手动读取, 指定模块包目录为 ./node_modules/prettier, 然后设置保存时的行为中勾选运行 Prettier, 您也可以修改快捷键

```

```shell
# ./robots.txt: 配置 robots
$ vim ./robots.txt && cat ./robots.txt
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://xxx.com/sitemap.xml

```

```shell
# ./public/assets: 配置 logo
$ rm ./public/*
$ mkdir -p ./public/assets
# mv 一个 logo.png 图片到 ./public/assets/ 下作为项目的 logo, 项目中可以使用 <Image src={`/assets/logo.png`} alt-{alt} width="64" height="64" /> 来引入, 另外一些常见的网站元数据需要直接放置在 ./src/app/ 下, 例如 favicon.ico 文件, 可以参考 https://nextjs.org/docs/app/api-reference/file-conventions/metadata

```

## 4.项目搭建

### 4.1.逻辑初始

> [!CAUTION]
>
> 警告：这里主要是针对 `Antd UI` 框架进行项目搭建，如果使用了其他的组件需要进行一定的改造，但主要是修改一些全局组件，并且避免同时引入多种框架，这里的第一行注释可以不去掉。

```tsx
// ./menus.tsx: 配置菜单

import { MenuDataItem } from "@ant-design/pro-layout";
import { BulbOutlined, CrownOutlined, TableOutlined } from "@ant-design/icons";

// 配置菜单的时候也必须保证具有对应约定路由

const menus = [
  {
    path: "/",
    name: "主页",
    // hideInMenu: true, // 隐藏路由
    // target: "_blank", // 新开标签
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
  },
  {
    path: "/other",
    name: "其他",
    icon: <BulbOutlined />,
    // target: "_blank",
  },
] as MenuDataItem[]; // 这样写会提供编写本菜单配置的智能提示

export default menus;

```

```jsx
// ./src/layouts/BasicLayout/components/SearchInput/index.tsx: 网页搜索组件

"use client";

import "./index.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Index = () => {
  return (
    <div
      className="search-input"
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={<SearchOutlined />}
        placeholder="搜索"
        variant="borderless"
      />
    </div>
  );
};

export default Index;

```

```css
/* ./src/layouts/BasicLayout/components/SearchInput/index.css */

.search-input {

}
```

```jsx
// ./src/layouts/BasicLayout/components/Footer/index.tsx: 网页页脚组件

"use client";

import "./index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div>© {currentYear} Made</div>
      <div>by Work</div>
    </div>
  );
};

export default Footer;

```

```css
/* ./src/layouts/BasicLayout/components/Footer/index.css */

/* 居中页脚 */
.footer {
    bottom: 0;
    position: fixed;
    width: 100%;
    background: #efefef;
    padding: 16px;
    text-align: center;
}
```

```tsx
// ./src/layouts/BasicLayout/components/Header/index.tsx: 网页页头组件

"use client";

import "./index.css";
import React from "react";

interface HeaderProps {
  logo: React.ReactNode;
  title: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logo, title }) => {
  return (
    <a className="header">
      {" "}
      {logo}
      {title}
    </a>
  );
};

export default Header;

```

```css
/* work-init-model-frontend/src/layouts/BasicLayout/components/Header/index.css */

.header {

}

```

```jsx
// ./src/layouts/BasicLayout/components/Actions/index.tsx: 网页文档组件

"use client";

import "./index.css";
import { GithubFilled } from "@ant-design/icons";
import SearchInput from "@/layouts/BasicLayout/components/SearchInput";
import React from "react";

interface ActionsProps {
  isMobile?: boolean;
  layout?: "side" | "top" | "mix";
}

const Actions: React.FC<ActionsProps> = ({ isMobile, layout }) => {
  // 小屏幕就隐藏
  if (isMobile) return null;

  // 大屏幕就显示
  return [
    layout !== "side" ? ( // 不是侧边模式就会显示搜索条
      <SearchInput key={"searchFilled"} />
    ) : undefined,
    <a
      className="actions"
      key="github"
      href="https://github.com/xiaogithubooo"
      target="_blank"
    >
      <GithubFilled key="GithubFilled" />
    </a>,
    // <InfoCircleFilled key="InfoCircleFilled" />,
    // <QuestionCircleFilled key="QuestionCircleFilled" />,
  ];
};

export default Actions;

```

```css
/* work-init-model-frontend/src/layouts/BasicLayout/components/Actions/index.css */

.actions {

}
```

```tsx
// ./src/layouts/BasicLayout/index.tsx: 基本布局组件

"use client";

import "./index.css";
import { LogoutOutlined } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import menus from "../../../menus";
import Footer from "@/layouts/BasicLayout/components/Footer";
import Header from "@/layouts/BasicLayout/components/Header";
import Actions from "@/layouts/BasicLayout/components/Actions";

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname(); // 获取当前页面地址

  return (
    <div
      id="basicLayout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* 核心组件 */}
      <ProLayout
        // 网站标题
        title="work-init-model-frontend"
        // 网站图标
        logo={
          <Image
            src="/assets/logo.svg"
            height={32}
            width={32}
            alt="logo"
            style={{ width: "auto", height: "auto" }} // 解决 Next.js 警告
          />
        }
        // 布局类型, 可选值 top 或 side
        layout="top"
        // 是否高亮
        location={{
          pathname,
        }}
        // 用户数据
        avatarProps={{
          src: "https://avatars.githubusercontent.com/u/113878415?s=400&u=9f10b63e033c9504615bc475581441478424e04b&v=4",
          size: "small",
          title: "limou",
          // @ts-ignore
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        // 监听标题
        // @ts-ignore
        onMenuHeaderClick={(e) => console.log(e)}
        // 菜单数据
        menuDataRender={() => {
          return menus;
        }}
        // 菜单跳转
        // @ts-ignore
        menuItemRender={(item, dom) => (
          // 根据菜单进行页面跳转但需要约定路由的实际支持(也就是要编写对应的目录, 并且在这里可以拓展菜单的属性)
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
        // 渲染文档
        // @ts-ignore
        actionsRender={(props) => {
          return <Actions isMobile={props.isMobile} layout={props.layout} />;
        }}
        // 渲染头部
        // @ts-ignore
        headerTitleRender={(logo, title, _) => {
          return <Header logo={logo} title={title} />;
        }}
        // 渲染底部
        // @ts-ignore
        footerRender={() => {
          return <Footer />;
        }}
      >
        {/*  */}
        {children}
      </ProLayout>
    </div>
  );
}

```

```css
/* ./src/layouts/BasicLayout/index.css */

/* 避免页脚遮挡内容 */
.ant-pro-layout .ant-pro-layout-content {
    padding-bottom: 75px !important;
}
.ant-pro-layout-top {
    height: 100%;
}


```

```tsx
// ./src/app/layout.tsx: 应用全局初始, 无论访问什么页面都会执行这段代码(逻辑初始化和渲染初始化)

"use client";

import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React, { useCallback, useEffect } from "react";

const Init: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  // 设置测试初始逻辑
  const doInit = useCallback(() => {
    console.log("Do init.");
  }, []);

  // 调用一次
  useEffect(() => {
    doInit();
    // 如果有的页面不需要初始化则可以考虑使用 userPathname() 来判断当前路由再根据条件判断进行屏蔽
    // 这里等接口文档服务导入接口后, 就可以书写在用户没有登陆时要求登陆的初始化逻辑
    // eslint-disable-next-line
  }, []);

  return children;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {/* 引入组件库 */}
        <AntdRegistry>
          {/* 逻辑初始化 */}
          <Init>
            {/* 渲染初始化 */}
            <BasicLayout>{children}</BasicLayout>
          </Init>
        </AntdRegistry>
      </body>
    </html>
  );
}

```

```jsx
// ./src/app/page.tsx: 主页页面

"use client";

import { Button } from "antd";

export default function Home() {
  return (
    <main
      id="mainPage"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Button type="primary">Antd UI Button</Button>
    </main>
  );
}

```

```css
/* ./src/app/globals.css */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  max-height: 100vh;;
}

```

```jsx
// ./src/app/admin/page.tsx: 管理页面

"use client";

import "./page.css";

export default function Admin() {
  return (
    <div id="adminPage">
      <h1>Admin</h1>
    </div>
  );
}

```

```css
/* ./src/app/admin/page.css */

#adminPage {

}
```

```jsx
// ./src/app/other/page.tsx: 其他页面

"use client";

import "./page.css";

export default function Other() {
  return (
    <div id="otherPage">
      <h1>Other</h1>
    </div>
  );
}

```

```css
/* ./src/app/other/page.css */

#otherPage {

}

```

### 4.2.网络请求

> [!CAUTION]
>
> 警告：使用本 `Axios` 需要先有后端才能自动生成接口，否则无法使用，因此前后端同时开发时，前端最好是先对页面进行开发，等待后端编写假接口后再进行测试。因此在引入本模块之前，后端开发人员最好完成链后端接口服务器的开发，快速交付给前端开发人员。

```ts
// ./libs/request.ts: 封装 Axios 请求后得到的一个请求库
import axios from "axios";

// 注意后端接口在用户接口上需要符合下面的代码(不过工作室有自己的登陆接口因此不必担心)

// 创建 Axios 实例
const myAxios = axios.create({
  baseURL: "http://localhost:8000", // 请求后端(IP+PORT)
  timeout: 10000, // 响应时间(10s)
  withCredentials: true, // 凭证携带(开启)
});

// 创建请求拦截器
myAxios.interceptors.request.use(
  // 请求执行前执行
  function (config) {
    // console.log(config);
    return config;
  },
  // 处理请求错误
  function (error) {
    // console.log(error);
    return Promise.reject(error);
  },
);

// 创建响应拦截器
myAxios.interceptors.response.use(
  // 响应成功(2xx 响应触发), 整体为一个回调函数
  function (response) {
    // 解析数据
    const { data } = response;

    // 尚未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口, 或者不是登录页面, 则重定向跳转到登录页面)
      if (
        !response.request.responseURL.includes("user/get/login") && // 判断之前的请求中不包含获取登录接口
        !window.location.pathname.includes("/user/login") // 判断当前页面不是处于登录页面
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`; // 这一句代码的作用是将用户重定向到登录页面, 并在登录页面的 URL 中添加一个 redirect 参数, 方便用户登陆请求成功后切回原来的界面, 做到无缝体验， redirect 保存了当前页面的 URL
      }
    }

    // 其他错误
    else if (data.code !== 0) {
      throw new Error(data.message ?? "服务器错误");
    }

    // 允许返回
    return data;
  },

  // 响应失败(非 2xx 响应触发), 整体为一个回调函数
  function (error) {
    // 处理响应错误
    return Promise.reject(error); // 返回一个被拒绝的 Promise, 配合后续 async/await 日志打印
  },
);

export default myAxios;

```

```ts
// ./openapi.config.ts
import { generateService } from "@umijs/openapi";

generateService({
  requestLibPath: "import request from '@/libs/request'", // 请求库
  schemaPath: "http://localhost:8000/api/v2/api-docs", // 后端接口规范(Open API 以前称为 Swagger)
  serversPath: "./src", // 生成代码对应的父目录, 会得到一个 api/ 目录
});

// 并且需要 package.json 中编写 "openapi": "ts-node openapi.config.ts" 脚本, 如果后端编写了接口就可以在后端启动的时候启动本脚本快速获取接口

```

不过由于有可能您暂时不想导入后端接口，那么可以自己创建以下文件顶替一下。

```ts
// ./src/api/typings.d.ts: 临时类型, 如果导入接口文档最好去除

declare namespace API {
  type LoginUserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };
}

```

### 4.3.常量文件

> [!CAUTION]
>
> 警告：本常量文件没有一开始就分文件，而是先在 `index.js` 中定义常量，然后进行导出，但如果以后的常量比较多，并且明显可以进行分类，则可以开始分文件，并且统一使用 `index.ts` 文件进行导出。

```ts
// ./src/constants/index.ts

// 一些常量可以放在这里, 如果常量之间具有明显的分类关系, 就可以在 constants/ 下开始分文件导出, 并且统一使用 index 和外界进行导出

// 权限角色
export const ACCESS_ENUM = {
  NOT_LOGIN: "not_login",
  USER: "user",
  ADMIN: "admin",
};

// 默认用户
export const DEFAULT_USER: API.LoginUserVO = {
  userName: "未登录",
  userProfile: "暂无简介",
  userAvatar: "/assets/notLoginUser.png",
  userRole: ACCESS_ENUM.NOT_LOGIN,
};

```

### 4.4.状态管理

> [!CAUTION]
>
> 警告：状态管理器最好还是留有一份，不过如果本次开发不需要状态管理（例如不需要维护用户登陆状态），则可以考虑不要进行下面的设置，直接跳到项目准则。另外由于需要一个完整的用户中心服务才可以适应下面的代码，因此用户中心接口通常使用工作室的服务即可，这样就无需修改关于 `API` 的代码也能正常运行。并且注意需要在 `./static/assets/` 中放置两张图片，一张 `logo.svg` 一张 `not_login_user.svg`。

```ts
// ./src/stores/loginUser.ts: 用户登陆状态(相当于一个数据表)

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_USER } from "@/constants";

// 可以理解为 configureStore() 创建了一个数据库，createSlice() 创建了一个数据表
export const loginUserSlice = createSlice({
  name: "loginUser", // 表名
  initialState: DEFAULT_USER, // 初始
  reducers: {
    // 操作(会自动把返回值修改进 initialState)
    setLoginUser: (state, action: PayloadAction<API.LoginUserVO>) => {
      // state 是还没修改之前的状态, 这里暂时没用到, 可以考虑使用 _ 替代, 也可以考虑使用 { ...state, ...action.payload } 达到部分或全部的字段覆盖
      // 用户登陆后就需要使用 setLoginUser() 修改登陆状态
      return {
        ...action.payload,
      }; // 使用 {} 代表返回链一个副本, 避免污染状态
    },
  },
}); // 导出数据表

export const { setLoginUser } = loginUserSlice.actions; // 导出操作

export default loginUserSlice.reducer; // 导出注册

```

```ts
// ./src/stores/index.ts: 状态管理库(相当于一个数据库)

import { configureStore } from "@reduxjs/toolkit";
import loginUser from "@/stores/loginUser";

// 可以理解为而 configureStore() 创建了一个数据库，createSlice() 创建了一个数据表
const store = configureStore({
  // 在这里存放状态注册
  reducer: {
    loginUser,
  },
});

export type RootState = ReturnType<typeof store.getState>; // 用于类型推断和提示

export type AppDispatch = typeof store.dispatch; // 用于类型推断和提示

export default store; // 导出数据库

/*
引入数据表并且配置好数据库后, 就可以获取状态实例, 如果需要获取状态内的字段就像使用类对象一样使用
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
const 数据表名 = useSelector((state: RootState) => {state.<数据表名>})

如果需要对状态做操作就需要获得触发器, 然后使用之前定义的操作进行触发
const dispatch = useDispatch<AppDispatch>();
dispatch(操作名(值对象));
 */

```

不过还需要对前面的代码进行一些变动。

```tsx
// ./src/layouts/BasicLayout/index.tsx: 基本布局组件

"use client";

import "./index.css";
import { LogoutOutlined } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import menus from "../../../menus";
import Footer from "@/layouts/BasicLayout/components/Footer";
import Header from "@/layouts/BasicLayout/components/Header";
import Actions from "@/layouts/BasicLayout/components/Actions";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname(); // 获取当前页面地址

  const loginUser = useSelector((state: RootState) => state.loginUser); // 获取用户登陆状态实例

  return (
    <div
      id="basicLayout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* 核心组件 */}
      <ProLayout
        // 网站标题
        title="work-init-model-frontend"
        // 网站图标
        logo={
          <Image
            src="/assets/logo.svg"
            height={32}
            width={32}
            alt="logo"
            style={{ width: "auto", height: "auto" }} // 解决 Next.js 警告
          />
        }
        // 布局类型, 可选值 top 或 side
        layout="top"
        // 是否高亮
        location={{
          pathname,
        }}
        // 用户数据
        avatarProps={{
          src: loginUser.userAvatar || "/assets/not_login_user.svg",
          size: "small",
          title: loginUser.userName || "未登陆",
          // @ts-ignore
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        // 监听标题
        // @ts-ignore
        onMenuHeaderClick={(e) => console.log(e)}
        // 菜单数据
        menuDataRender={() => {
          return menus;
        }}
        // 菜单跳转
        // @ts-ignore
        menuItemRender={(item, dom) => (
          // 根据菜单进行页面跳转但需要约定路由的实际支持(也就是要编写对应的目录, 并且在这里可以拓展菜单的属性)
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
        // 渲染文档
        // @ts-ignore
        actionsRender={(props) => {
          return <Actions isMobile={props.isMobile} layout={props.layout} />;
        }}
        // 渲染头部
        // @ts-ignore
        headerTitleRender={(logo, title, _) => {
          return <Header logo={logo} title={title} />;
        }}
        // 渲染底部
        // @ts-ignore
        footerRender={() => {
          return <Footer />;
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
}

```

```tsx
// ./src/app/layout.tsx: 应用全局初始, 无论访问什么页面都会执行这段代码(逻辑初始化和渲染初始化)

"use client";

import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/stores";

const Init: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  // 设置测试初始逻辑
  const doInit = useCallback(() => {
    console.log("Do init.");
  }, []);

  // 调用一次
  useEffect(() => {
    doInit();
    // 如果有的页面不需要初始化则可以考虑使用 userPathname() 来判断当前路由再根据条件判断进行屏蔽
    // 这里等接口文档服务导入接口后, 就可以书写在用户没有登陆时要求登陆的初始化逻辑
    // eslint-disable-next-line
  }, []);

  return children;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {/* 引入组件库 */}
        <AntdRegistry>
          {/* 状态管理器 */}
          <Provider store={store}>
            {/* 逻辑初始化 */}
            <Init>
              {/* 渲染初始化 */}
              <BasicLayout>{children}</BasicLayout>
            </Init>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}

```

### 4.4.页面权限

```tsx
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
```

```tsx
// ./src/app/forbidden.tsx: 403 页面

import { Button, Result } from "antd";
import React from "react";

const Forbidden = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉，您无权访问此页面。 "
      extra={
        <Button type="primary" href="/">
          返回主页
        </Button>
      }
    />
  );
};

export default Forbidden;

```

```tsx
// ./src/access/checkAccess.ts: 权限校验方法

import { ACCESS_ENUM } from "@/constants";

const checkAccess = (
  loginUser: API.LoginUserVO,
  needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
  // 获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 如果用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    // 如果用户没登录，那么表示无权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 如果不为管理员，表示无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;

```

```ts
// ./src/access/accessControlDisplay.ts: 权限控显方法

import checkAccess from "@/access/checkAccess";
import menus from "../../menus";

const accessControlDisplay = (
  loginUser: API.LoginUserVO,
  menuItems = menus
) => {
  return menuItems.filter((item) => {
    if (!checkAccess(loginUser, item.access)) {
      return false;
    }
    if (item.children) {
      item.children = accessControlDisplay(loginUser, item.children);
    }
    return true;
  });
};

export default accessControlDisplay;

```

```tsx
// ./src/layouts/BasicLayout/components/Access/index.tsx: 网页权限组件

import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import { usePathname } from "next/navigation";
import checkAccess from "@/access/checkAccess";
import Forbidden from "@/app/forbidden";
import React from "react";
import { ACCESS_ENUM } from "@/constants";
import { MenuDataItem } from "@ant-design/pro-layout";
import menus from "../../../../../menus";

// 根据路径查找菜单
const findMenuItemByPath = (
  menus: MenuDataItem[],
  path: string
): MenuDataItem | null => {
  for (const menu of menus) {
    if (menu.path === path) {
      return menu;
    }
    if (menu.children) {
      const matchedMenuItem = findMenuItemByPath(menu.children, path);
      if (matchedMenuItem) {
        return matchedMenuItem;
      }
    }
  }
  return null;
};

// // 根据路径查找所有菜单
const findAllMenuItemByPath = (path: string): MenuDataItem | null => {
  return findMenuItemByPath(menus, path);
};

const Access: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const pathname = usePathname();
  const loginUser = useSelector((state: RootState) => state.loginUser);
  // 权限校验
  const menu = findAllMenuItemByPath(pathname) || {};
  const needAccess = menu?.access ?? ACCESS_ENUM.NOT_LOGIN;
  const canAccess = checkAccess(loginUser, needAccess);
  if (!canAccess) {
    return <Forbidden />;
  }
  return <>{children}</>;
};

export default Access;

```

```tsx
/* ./src/layouts/BasicLayout/components/Access/index.css */

```

不过还需要对前面的代码进行一些变动。

```ts
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

```

```tsx
// ./src/app/layout.tsx: 应用全局初始, 无论访问什么页面都会执行这段代码(逻辑初始化和渲染初始化和页面权限化)

"use client";

import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import store from "@/stores";
import Access from "@/layouts/BasicLayout/components/Access";

const Init: React.FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  // 设置测试初始逻辑
  const doInit = useCallback(() => {
    console.log("Do init.");
  }, []);

  // 调用一次
  useEffect(() => {
    doInit();
    // 如果有的页面不需要初始化则可以考虑使用 userPathname() 来判断当前路由再根据条件判断进行屏蔽
    // 这里等接口文档服务导入接口后, 就可以书写在用户没有登陆时要求登陆的初始化逻辑
    // eslint-disable-next-line
  }, []);

  return children;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        {/* 引入组件库 */}
        <AntdRegistry>
          {/* 状态管理器 */}
          <Provider store={store}>
            {/* 逻辑初始化 */}
            <Init>
              {/* 渲染初始化 */}
              <BasicLayout>
                {/* 页面权限化 */}
                <Access>{children}</Access>
              </BasicLayout>
            </Init>
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}

```

```tsx
// ./src/layouts/BasicLayout/index.tsx: 基本布局组件

"use client";

import "./index.css";
import { LogoutOutlined } from "@ant-design/icons";
import { ProLayout } from "@ant-design/pro-components";
import { Dropdown } from "antd";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import menus from "../../../menus";
import Footer from "@/layouts/BasicLayout/components/Footer";
import Header from "@/layouts/BasicLayout/components/Header";
import Actions from "@/layouts/BasicLayout/components/Actions";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import accessControlDisplay from "@/access/accessControlDisplay";

interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname(); // 获取当前页面地址

  const loginUser = useSelector((state: RootState) => state.loginUser); // 获取用户登陆状态实例

  return (
    <div
      id="basicLayout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* 核心组件 */}
      <ProLayout
        // 网站标题
        title="work-init-model-frontend"
        // 网站图标
        logo={
          <Image
            src="/assets/logo.svg"
            height={32}
            width={32}
            alt="logo"
            style={{ width: "auto", height: "auto" }} // 解决 Next.js 警告
          />
        }
        // 布局类型, 可选值 top 或 side
        layout="top"
        // 是否高亮
        location={{
          pathname,
        }}
        // 用户数据
        avatarProps={{
          src: loginUser.userAvatar || "/assets/not_login_user.svg",
          size: "small",
          title: loginUser.userName || "未登陆",
          // @ts-ignore
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      icon: <LogoutOutlined />,
                      label: "退出登录",
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        // 监听标题
        // @ts-ignore
        onMenuHeaderClick={(e) => console.log(e)}
        // 菜单数据
        menuDataRender={() => {
          // return menus;
          return accessControlDisplay(loginUser, menus); // 这个函数会自动根据页面权限的设置来过滤菜单项, 以控制对应用户看到对应的菜单项
        }}
        // 菜单跳转
        // @ts-ignore
        menuItemRender={(item, dom) => (
          // 根据菜单进行页面跳转但需要约定路由的实际支持(也就是要编写对应的目录, 并且在这里可以拓展菜单的属性)
          <Link href={item.path || "/"} target={item.target}>
            {dom}
          </Link>
        )}
        // 渲染文档
        // @ts-ignore
        actionsRender={(props) => {
          return <Actions isMobile={props.isMobile} layout={props.layout} />;
        }}
        // 渲染头部
        // @ts-ignore
        headerTitleRender={(logo, title, _) => {
          return <Header logo={logo} title={title} />;
        }}
        // 渲染底部
        // @ts-ignore
        footerRender={() => {
          return <Footer />;
        }}
      >
        {children}
      </ProLayout>
    </div>
  );
}

```

### 4.5.通用组件

> [!CAUTION]
>
> 警告：这一步把一些常见的组件都进行链引入，请根据项目需求进行引入，并且在开发之前确认每个组件都显示正常，否则不要随意引入。

```tsx
// ./src/components/MdEditor/index.tsx: Markdown 编辑器组件(必须客户端渲染)

"use client";

import "./index.css";
import { Editor } from "@bytemd/react";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import "bytemd/dist/index.css";
import "highlight.js/styles/vs.css";

interface Props {
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}

const plugins = [gfm(), highlight()];

const MdEditor = (props: Props) => {
  const { value = "", onChange, placeholder } = props;

  return (
    <div className="md-editor">
      <Editor
        value={value}
        placeholder={placeholder}
        mode="split"
        plugins={plugins}
        onChange={onChange}
      />
    </div>
  );
};

export default MdEditor;

```

```css
/* ./src/components/MdEditor/index.css */

/* 去除 github 图标 */
.bytemd-toolbar-icon.bytemd-tippy.bytemd-tippy-right:last-child {
    display: none;
}

```

```tsx
// ./src/components/MdViewer/index.tsx: Markdown 浏览器组件(必须客户端渲染)

"use client";

import "./index.css";
import { Viewer } from "@bytemd/react";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import "bytemd/dist/index.css";
import "highlight.js/styles/vs.css";

interface Props {
  value?: string;
}

const plugins = [gfm(), highlight()];

const MdViewer = (props: Props) => {
  const { value = "" } = props;

  return (
    <div className="md-viewer">
      <Viewer value={value} plugins={plugins} />
    </div>
  );
};

export default MdViewer;

```

```css
/* ./src/components/MdViewer/index.css */

.md-viewer {

}
```

## 5.项目开发

在了解复制了上面的文件后，还需要了解 `Next.js` 的开发模式以及一些开发约定。`Next.js` 采用 约定式路由（而非 配置性路由），根据文件夹的结构和名称，可以自动将对应的 URL 地址映射到页面文件，但目录下必须带有 `page + .js | .jsx | .ts | .tsx` 文件才能支持。

```shell
# 理解前端路由
$ tree -L 2 -a app/
.
├── src/ # 默认存放项目代码的目录  
│     ├── components/ # 公共复用组件
│     │     ├── index.tsx
│     │     └── index.css
│     └── app/ # 前端应用组件
│          ├── dashboard/
│          │     ├── components/ # 私有复用组件
│          │     ├── page.js # => '/dashboard'
│          │     ├── setting/
│          │     │     ├── components/ # 私有复用组件
│          │     │     ├── page.css
│          │     │     └── page.tsx # => '/dashboard/setting'
│          │     ├── (blog)/
│          │     │     ├── limou/
│          │     │     │     ├── components/ # 私有复用组件
│          │     │     │     ├── page.css
│          │     │     │     └── page.tsx # => '/dashboard/limou'
│          │     │     ├── dimou/
│          │     │     │     ├── components/ # 私有复用组件
│          │     │     │     ├── page.css
│          │     │     │     └── page.tsx # => '/dashboard/dimou'
│          │     │     └── gimou/
│          │     │              ├── components/ # 私有复用组件
│          │     │              ├── page.css
│          │     │              └── page.tsx # => '/dashboard/gimou'
│          │     └── [question]/
│          │           ├── components/ # 私有复用组件
│          │           ├── page.css
│          │           └── page.js # => '/dashboard/[question]/'
│          ├── favicon.ico
│          ├── globals.css
│          ├── layout.tsx
│          ├── robot.txt
│          ├── page.css
│          └── page.tsx # => '/'
├── public/ # 默认存放静态资源的目录
│    └── assets/ # 本项目自定义的静态文件目录(图片、视频、音频)
│          └── logo.png
...

```

> [!IMPORTANT] 
>
> 补充：项目中的每个页面和组件都是单独的文件夹，基于 `Next.js` 的约定式路由，我们每个页面目录内需要添加 `page.tsx` 页面文件和 `page.css` 样式文件。每个组件目录内添加 `index.tsx` 页面文件和 `index.css` 样式文件。并且和路由相关的目录都使用蛇形命名法，和页面和组件相关的都使用大驼峰命名法。
>
> 对于项目中多页面公用的组件，放在 `./src/components` 目录下；对于某个页面私有的组件，放在该页面的 `components` 目录下。

> [!IMPORTANT]
>
> 补充：如果希望使用目录来组织文件，而不是变成路由，则可以使用 `(xxx)` 创建一个路由组，底下的文件夹如果包含 `page` 文件，就不会把路由组也当作路由的一部分。另外 `Next.js` 还支持使用 `[xxx]` 动态路由，也就是不同参数的 `URL` 复用大致相同的路径。

> [!IMPORTANT] 
>
> 补充：为了区分服务端和客户端渲染，每个页面（或组件）都必须在开头显示编写 `"use client"` 或 `"use server"`。

> [!IMPORTANT] 
>
> 补充：定义组件的时候，需要提前使用 `TypeScript` 声明组件属性的类型。开发时要严格注意 `TypeScript` 的类型和编辑器的错误提示，并且定期打包构建。因为 `Next.js` 的构建要求非常严格，稍有不慎就会报错。构建报错的话，注意查看和处理构建中的报错信息。因此在项目中慎用 `window` 等浏览器环境才支持的对象，服务端无法使用。注意保证客户端渲染页面和服务端渲染页面的一致性，否则会出现水合错误。

> [!IMPORTANT]
>
> 补充：每个页面的根元素必须有 `id(小驼峰命名法)`，每个组件的根元素必须有 `className(连字符命名法)`，用于控制样式和快速定位。不过一些布局组件或函数组件可以不要 `id` 或 `className`，但也保留 `index.css` 的书写。

> [!IMPORTANT]
>
> 补充：如果组件只使用一次，推荐直接放在某个页面或某个更大的组件中，而无需提取抽象出来，有需求再进行抽象。

> [!IMPORTANT]
>
> 补充：`Next.js` 允许服务器组件包裹客户端组件，但客户端组件不能包含服务器组件。

> [!IMPORTANT]
>
> 补充：`export default` vs. `export const`
>
> - 默认导出 `export default` 只能导出一个值，它的语法要求必须是表达式，而 `const` 是声明，所以不能 `export default const xxx`
> - 具名导出 `export const` 允许同时声明和导出，因为 `export const` 是 JavaScript 语法本身支持的
>
> 使用默认导出时允许修改被导出表达式的名字，使用具名导出时必须花括被导出表达式的名字。

> [!IMPORTANT]
>
> 补充：项目目录、配置文件使用连字符，核心代码使用驼峰法，其他文件使用下划线。

> [!IMPORTANT]
>
> 补充：`...` 作用是复制对象中的所有字段，如果有多个就可以合并多个字段，并且后面的 `...` 会覆盖重复的字段或添加确实的字段，这种技巧非常好用。

