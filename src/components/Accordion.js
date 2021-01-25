import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();
  useEffect(() => {
    const onDropClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setActiveIndex(null);
    };
    document.body.addEventListener("click", onDropClick);
    return () => {
      document.body.removeEventListener("click", onDropClick);
    };
  }, []);
  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <div key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="ui styled accordion" ref={ref}>
        {" "}
        {renderedItems}
      </div>
      <h1>{activeIndex}</h1>
    </React.Fragment>
  );
};

export default Accordion;
