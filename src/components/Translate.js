import React, { useState } from "react";
import Dropdown from "./dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "hindi",
    value: "hi",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter a Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>

      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        title="Select a Language"
      />
      <hr />
      <h3 className="ui header">Out Put</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
