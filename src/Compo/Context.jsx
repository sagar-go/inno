import React, { useEffect } from "react";
import { Children } from "react";
import { useState } from "react";
import Axios from "axios";

import { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");
  const [arr, setarr] = useState([]);
  const [id, setid] = useState(0);

  const call = async () => {
    let resp = await Axios.get(
      "https://617a3c9fcb1efe001700fd1a.mockapi.io/api/faqs"
    );
    setarr(resp.data);
  };

  async function handleClose() {
    const obj = {
      question: question,
      answer: answer,
    };
    await Axios.post(
      "https://617a3c9fcb1efe001700fd1a.mockapi.io/api/faqs",
      obj
    );
    call();
    setShow(false);
    console.log("clicked");
  }

  async function del(e) {
    setShow2(true);

    console.log("id is ", id);
    console.log("yes is ", e.target.outerText);

    if (e.target.outerText == "Yes") {
      await Axios.delete(
        `https://617a3c9fcb1efe001700fd1a.mockapi.io/api/faqs/${id}`
      );
      call();
      setShow2(false);
    } else {
      setShow2(false);
    }
  }

  function del2() {
    setShow2(false);
    setShow(false);
    setShow3(false);
  }

  function handleEdit2(e) {
    setquestion(e.question);
    setanswer(e.answer);
    setid(e.id);
    setShow3(true);
  }

  async function handleEdit() {
    console.log(" current id is", id);
    const obj = {
      question: question,
      answer: answer,
    };
    await Axios.put(
      `https://617a3c9fcb1efe001700fd1a.mockapi.io/api/faqs/${id}`,
      obj
    );
    call();
    setShow3(false);
  }

  const [logged, setlogged] = useState(false);

  return (
    <MyContext.Provider
      value={{
        logged,
        setlogged,
        handleEdit,
        handleEdit2,
        del2,
        del,
        call,
        handleClose,
        show,
        setShow,
        show2,
        setShow2,
        show3,
        setShow3,
        question,
        setquestion,
        answer,
        setanswer,
        arr,
        setarr,
        id,
        setid,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Context;
