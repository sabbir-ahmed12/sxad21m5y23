import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastNotification = ({ message }) => {
  const [show, setShow] = useState(true);
  return (
    <ToastContainer className="p-3 text-center" position="top-center">
      <Toast
        bg="warning"
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Body className="text-highlight">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
