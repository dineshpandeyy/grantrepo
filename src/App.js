import logo from './logo.svg';
import './App.css';
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import {UserData} from './Data';
import {useState} from "react";

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#FF4500",
          "#FFD700",
          "#BA55D3",
          "#4287f5"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{width: 700}}>
        <BarChart chartData={userData}/>
        <PieChart chartData={userData}/>
        <LineChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
