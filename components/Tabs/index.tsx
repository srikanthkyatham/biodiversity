import React, { useState } from "react";

interface TabsProps {
  children: any;
}

interface TabProps {
  children: any;
  activeTab: any;
  currentTab: any;
  setActiveTab: any;
  component: any;
}

export function Tabs({ children }: TabsProps) {
  function findActiveTab(a: any) {
    return a.reduce((accumulator: any, currentValue: any, i: any) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab: any) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-center p-2">
        {children.map((item:any, i: number) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  component=''
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item:any, i:number) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`} key={i.toString()}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab, component }: TabProps) {
  return (
    <>
      <div
        className={`px-5 py-3 rounded cursor-pointer
      ${activeTab === currentTab ? "bg-red-500 text-white" : "bg-black text-white"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";