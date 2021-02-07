import Login from "../../components/login/Index";
import "./styles.css";

const LoginPage = ({ api }) => {
  return (
    <div className="loginPage-container">
      <Login api={api} />
    </div>
  );
};

export default LoginPage;
