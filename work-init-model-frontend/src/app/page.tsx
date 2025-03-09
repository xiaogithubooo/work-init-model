// ./src/app/page.tsx: 主页页面

"use client";

import { Button } from "antd";
import MdEditor from "@/components/MdEditor";
import MdViewer from "@/components/MdViewer";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>("");

  return (
    <main
      id="mainPage"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Button type="primary">Antd UI Button</Button>
      <MdEditor value={text} onChange={setText} />
      <MdViewer value={text} />
    </main>
  );
}
