import { useState } from "react";
import "./Collapse.scss";

const Collapse = ({ item }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="collapseContent">
      <div className="collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        {item.title}
        <i
          className={`fa-solid fa-chevron-up ${
            isCollapsed ? "rotateTop" : "rotateBottom"
          }`}
        ></i>
      </div>
      <div className={isCollapsed ? "textClose" : "textOpen"}>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

export default Collapse;
