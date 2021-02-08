import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const Index = () => {
  let history = useHistory();

  return (
    <div className="header__left">
      <SearchIcon />
      <input
        onChange={() => {
          history.push("/player");
        }}
        placeholder="Search for Players, Evalutations, Criterions..."
        type="text"
      />
    </div>
  );
};

export default Index;
