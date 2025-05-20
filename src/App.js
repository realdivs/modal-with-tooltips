import "./styles.css";
import { Modal } from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="container">
      <h1>Modal Component with Tooltips</h1>
      {!showSignoutModal && (
        <div className="tooltip-container">
          <button onClick={() => setShowSignoutModal(true)} className="btn">
            Signout
          </button>
          <span className="tooltip-text">Click to sign out</span>
        </div>
      )}
      {showSignoutModal && (
        <Modal
          title="Are you sure you want to signout?"
          setModal={setShowSignoutModal}
        />
      )}

      {!showDeleteModal && (
        <div className="tooltip-container">
          <button onClick={() => setShowDeleteModal(true)} className="btn">
            Delete
          </button>
          <span className="tooltip-text">Click to delete data</span>
        </div>
      )}
      {showDeleteModal && (
        <Modal
          title="Are you sure you want to delete all data?"
          setModal={setShowDeleteModal}
        />
      )}
    </div>
  );
}
