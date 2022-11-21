import { useEffect, useState } from "react";
import { Input } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./style.scss";

function Home() {
  const [name, setName] = useState("");
  const nav = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="AppContainer">
      <label className="label">Countries</label>
      <Input
        className="inputbox"
        type={"text"}
        size="large"
        placeholder="Enter country name"
        onPressEnter={handleNameChange}
      />
      {{ name } != null
        ? nav(`/CountryData/${name}`, {
            state: { id: 1, name: name },
          })
        : null}
    </div>
  );
}

export default Home;
