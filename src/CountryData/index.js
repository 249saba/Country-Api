import { useEffect, useState } from "react";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import { Spin, Alert } from "antd";

function CountryData(props) {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    //   console.warn("country", location.state.name);
    fetch(`https://restcountries.com/v3.1/name/${location.state.name}`).then(
      (result) => {
        result
          .json()
          .then((resp) => {
            setData(resp);
          })
          .catch(() => {
            window.alert("Incorrect Country Name");
          });
      }
    );
  }, []);
  if (!data.length) {
    return <Spin tip="Loading..."></Spin>;
  }
  const [item = {}] = data;
  return (
    <div className="App">
      <div className="container">
        <div className="countryname">
          <p>{item.name.common}</p>
          <p>{item.name.nativeName.eng.official}</p>
        </div>

        <div className="countryname">
          <img src={item.flags.png}></img>
        </div>
      </div>
      <table>
        <tr>
          <td className="outercolumn">
            <td className="innercolumn">
              <label>Capital</label>
            </td>
            <td className="innercolumn">{item.capital}</td>
          </td>

          <td className="outercolumn">
            <td className="innercolumn">
              <label>Area</label>
            </td>
            <td className="innercolumn">{item.area}</td>
          </td>
        </tr>
        <tr>
          <td className="outercolumn">
            <td className="innercolumn">
              <label>Population</label>
            </td>
            <td className="innercolumn">{item.population}</td>
          </td>

          <td className="outercolumn">
            <td className="innercolumn">
              <label>Region</label>
            </td>
            <td className="innercolumn">{item.region}</td>
          </td>
        </tr>{" "}
        <tr>
          <td className="outercolumn">
            <td className="innercolumn">
              <label>Languages</label>
            </td>
            <td className="innercolumn">{item.languages.eng}</td>
          </td>

          <td className="outercolumn">
            <td className="innercolumn">
              <label>LatLng</label>
            </td>
            <td className="innercolumn">{item.latlng.toString()}</td>
          </td>
        </tr>
      </table>
      ;
    </div>
  );
}

export default CountryData;
