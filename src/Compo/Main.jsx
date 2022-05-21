import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";

import Modals from "./Modals";
import { MyContext } from "./Context";

export default function Main() {
  const { arr, setid, setShow, setShow2, handleEdit2, call } =
    useContext(MyContext);

  useEffect(() => {
    call();
  }, []);

  const handleShow = () => setShow(true);

  return (
    <>
      <Modals handleshow={handleShow} />
      {arr.map((e) => {
        return (
          <div key={e.id}>
            <h4>{e.question}</h4>
            <h4>{e.answer}</h4>
            <button
              onClick={() => {
                setid(e.id);
                setShow2(true);
              }}
            >
              Delete
            </button>
            <button onClick={() => handleEdit2(e)}>Edit</button>
          </div>
        );
      })}
    </>
  );
}
