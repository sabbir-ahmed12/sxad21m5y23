import { useState } from "react";
import { Alert } from "react-bootstrap";
import { FaExclamationTriangle } from "react-icons/fa";

const AltertBox = ({ variant, alertHead, alertText, isDismissable }) => {
  const [show, setShow] = useState(true);
  const value =
    alertHead === null ? <FaExclamationTriangle size={20} /> : alertHead;

  return (
    <>
      {show ? (
        <Alert
          className="my-2"
          variant={variant}
          dismissible={isDismissable}
          onClose={() => setShow(false)}
        >
          <span className="me-1 fw-bold">{value}</span>
          <span>{alertText}</span>
        </Alert>
      ) : null}
    </>
  );
};

export default AltertBox;
