import "./Collapse.scss";

import { useState } from "react";

const Collapse = ({ item }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="collapse-content">
      <div className="collapse" onClick={() => setIsCollapsed(!isCollapsed)}>
        {item.title}
        <i
          className={`fa-solid fa-chevron-up ${
            isCollapsed ? "rotate-top" : "rotate-bottom"
          }`}
        ></i>
      </div>
      <div className={isCollapsed ? "text-close" : "text-open"}>
        {Array.isArray(item.content) ? (
          <ul>
            {item.content.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        ) : (
          <p>{item.content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
