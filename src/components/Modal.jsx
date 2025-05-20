export const Modal = ({ title, setModal }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        {title}
        <div className="modal-buttons">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={() => setModal(false)}>Save</button>
        </div>
      </div>
    </div>
  );
};
