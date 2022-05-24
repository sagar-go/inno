import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { useContext } from "react";
import "../Styles/Main.css";
import Modals from "./Modals";
import { MyContext } from "./Context";
import { FiPlusCircle } from "react-icons/fi";
import { BiLoaderCircle } from "react-icons/bi";

export default function Main() {
  const {
    arr,
    setid,
    setShow,
    setShow2,
    handleEdit2,
    call,
    setanswer,
    setquestion,
  } = useContext(MyContext);

  useEffect(() => {
    call();
  }, []);

  const handleShow = () => {
    setShow(true);
    setquestion("");
    setanswer("");
  };

  return (
    <>
      {arr.length ? (
        <div className="main">
          <div className="icon ">
            {" "}
            <FiPlusCircle
              onClick={handleShow}
              className="faq"
              fontSize={"40px"}
            />
            <span>Add a new FAQ</span>
          </div>

          <h3>Let's Explore the FAQ's</h3>
          {arr.map((e) => {
            return (
              <div key={e.id} className="arr">
                <h4>
                  #{e.id} {e.question}
                </h4>
                <h4>{e.answer}</h4>
                <div>
                  <button onClick={() => handleEdit2(e)}>Edit</button>
                  <button
                    onClick={() => {
                      setid(e.id);
                      setShow2(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="main2">
          {" "}
          <div class="lds-dual-ring"></div>
        </div>
      )}

      <Modals handleshow={handleShow} />
    </>
  );
}
