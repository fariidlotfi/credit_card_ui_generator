import "./Modal.css";

export default function Modal(params) {
  return (
    <div className="card-app-modal-container">
      <div className="card-app-modal-box">{params.children}</div>
    </div>
  );
}
