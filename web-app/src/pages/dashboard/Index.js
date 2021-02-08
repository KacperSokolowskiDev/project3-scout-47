import "./styles.css";
import ColumnChart from "../../components/Charts/ColumnChart";
import LineChart from "../../components/Charts/LineChart";
const Index = () => {
  return (
    <>
      <div className="dashboard-page-content">
        <h1 className="dashboard-title">DASHBOARD</h1>
        <div className="charts">
          <ColumnChart />
          <LineChart />
        </div>
      </div>
    </>
  );
};
export default Index;
