import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "./redux/actions/logActions";
import TechSelectOptions from "./TechSelectOptions";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState([]);
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      //text you want to display, put in the html property
      M.toast({ html: "Please enter a message" });
    } else {
      // console.log(message, tech, attention);

      //creating new object
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      //in our redux action, we are passing newLog
      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });
      setMessage([]);
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-light btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

//we are not bringing mapStateToProps
export default connect(null, { addLog })(AddLogModal);
