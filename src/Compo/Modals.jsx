import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { MyContext } from "./Context";
import "../Styles/Modals.css";

const Modals = () => {
  const {
    question,
    setquestion,
    answer,
    setanswer,
    show,
    setShow,
    show2,
    show3,
    del,
    del2,
    handleEdit,
    handleClose,
  } = useContext(MyContext);
  const handleShow = () => {
    setquestion("");
    setanswer("");
    setShow(true);
  };

  return (
    <>
      <Modal
        className="modal"
        show={show}
        onHide={del2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <h5>Create FAQ</h5>
        <input
          className="inp1"
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setquestion(e.target.value)}
        />
        <input
          className="inp2"
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setanswer(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="primary" mb-3 onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show3}
        onHide={del2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <h5>Edit your FAQ</h5>
        <input
          className="inp1"
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setquestion(e.target.value)}
        />
        <input
          className="inp2"
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setanswer(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        claasName="modal"
        show={show2}
        onHide={del2}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <h5>Do you want to delete this?</h5>

        <Modal.Footer>
          <Button variant="danger" onClick={(e) => del(e)}>
            Yes
          </Button>
          <Button variant="primary" onClick={del2}>
            NO
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;
