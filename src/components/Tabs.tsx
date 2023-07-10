"use client";

import React, { useState } from "react";
import {
  Tabs as ShadTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Tab = {
  value: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultValue: string;
};

const Tabs: React.FC<TabsProps> = ({ defaultValue, tabs }) => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <ShadTabs defaultValue={defaultValue}>
      <TabsList>
        {tabs.map((tab: Tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab: Tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </ShadTabs>
  );
};

export default Tabs;
