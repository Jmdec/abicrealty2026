"use client";

import React, { useMemo, useState } from "react";
import ContactSection from "../home/contactsection";
import { whatsnewData } from "./data";
import {
  Tabs,
  Tab,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";

export default function WhatsNewPage() {
  const [selectedTab, setSelectedTab] = useState<string>(
    whatsnewData[0].key.toString()
  );

  const selectedTitle = useMemo(() => {
    return (
      whatsnewData.find((item) => item.key.toString() === selectedTab)
        ?.title ?? "Select"
    );
  }, [selectedTab]);

  return (
    <section className="flex flex-col items-center w-full">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col">

          {/* Tabs – desktop */}
          <div className="hidden lg:block">
            <Tabs
              aria-label="What's New Tabs"
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key.toString())}
            >
              {whatsnewData.map((data) => (
                <Tab key={data.key.toString()} title={data.title}>
                  {data.content}
                </Tab>
              ))}
            </Tabs>
          </div>

          {/* Dropdown – mobile */}
          <div className="block lg:hidden w-full">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="justify-between">
                  {selectedTitle} <ChevronDown className="h-5 w-5" />
                </Button>
              </DropdownTrigger>

              <DropdownMenu
                aria-label="What's New Tabs Dropdown"
                selectedKeys={[selectedTab]}
                onAction={(key) => setSelectedTab(key.toString())}
              >
                {whatsnewData.map((data) => (
                  <DropdownItem key={data.key.toString()}>
                    {data.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <div className="mt-4 w-full">
              {
                whatsnewData.find(
                  (data) => data.key.toString() === selectedTab
                )?.content
              }
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </section>
  );
}