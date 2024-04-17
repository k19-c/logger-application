import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Search from "./Search";
import Logs from "./Logs";
import AddBtn from "./AddBtn";
import AddLogModal from "./AddLogModal";
import EditLogModal from "./EditLogModal";
import AddTechModal from "./AddTechModal";
import TechListModal from "./TechListModal";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <>
        <Search />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </>
    </Provider>
  );
}

export default App;
