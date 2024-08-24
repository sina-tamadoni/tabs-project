import { useEffect, useState } from "react";
import mainCourseIcon from "../assests/icons/burger-solid.svg";
import appetizersIcon from "../assests/icons/plate-wheat-solid.svg";
import beveragesIcon from "../assests/icons/mug-hot-solid.svg";
import MainCourse from "./MainCourse";
import Appetizers from "./Appetizers";
import Beverages from "./Beverages";

const tabs = [
  { title: "MAIN COURSE", icon: mainCourseIcon },
  { title: "APPETIZERS", icon: appetizersIcon },
  { title: "BEVERAGES", icon: beveragesIcon },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(getFromLocal() || tabs[0].title);
  useEffect(() => {
    saveToLocal(activeTab);
  }, [activeTab]);

  const clickHandler = (tab) => {
    setActiveTab(tab);
  };
  function determinePage(activeTab) {
    switch (activeTab) {
      case "MAIN COURSE":
        return <MainCourse activeTab={activeTab} />;
      case "APPETIZERS":
        return <Appetizers activeTab={activeTab} />;
      case "BEVERAGES":
        return <Beverages activeTab={activeTab} />;
    }
  }
  function saveToLocal(title) {
    localStorage.setItem("activeTab", title);
  }
  function getFromLocal() {
    return localStorage.getItem("activeTab");
  }
  return (
    <div className="main-container">
      <ul>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`menu-item-container ${
              activeTab === tab.title && "selectedTab"
            }`}
            onClick={() => clickHandler(tab.title)}
          >
            <span className="icon">
              <img src={tab.icon} alt="" />
            </span>
            <li>{tab.title}</li>
          </div>
        ))}
      </ul>
      <div className="container">{determinePage(activeTab)}</div>
    </div>
  );
}

export default Tabs;
