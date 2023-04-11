import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { ImageWrapperDiv, TodoListWrapper } from "../styles/todolist.style";
import { MdOutlineDescription } from "react-icons/md";
import { Link } from "react-router-dom";

const TodoList = ({ data, handleDelete }) => {
  const [activeId, setActiveId] = useState(null);
  const [dis, setDis] = useState(null);

  const onTitleClick = (id) => {
    setActiveId(id);
  };

  const handleDis = (id) => {
    setDis(id);
  };

  const handleHideDis = (id) => {
    setDis(null);
  };

  return (
    <TodoListWrapper>
      <div className="main-div">
        {data &&
          data.map((ele) => {
            return (
              <div key={ele._id} className="card-div">
                {/* style={{transform:ele._id===dis?"rotateY(180deg)":"rotateY(0deg)"}}  */}
                <div
                  className="upper-card-div"
                  style={{
                    display: dis === ele._id ? "none" : "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div className="title-div">
                    <ImageWrapperDiv stat={ele.status}>
                      <h3>{ele.status.toUpperCase()}</h3>
                      <div className="img-div">
                        <h5>{ele.date}</h5> <h5>{ele.time}</h5>
                      </div>
                    </ImageWrapperDiv>

                    <div className="mid-div">
                      <label>TITLE</label>
                      <h4>{ele.title}</h4>
                      <label>CATEGORY</label>
                      <h4>{ele.category}</h4>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                          paddingTop: "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        <div className="sub-div">
                          <label>SUBTASK</label>
                          <RiArrowDropDownLine
                            onClick={() => onTitleClick(ele._id)}
                            className="drop-d"
                            style={{
                              display: activeId !== ele._id ? "block" : "none",
                            }}
                          />
                          <RiArrowDropUpLine
                            onClick={() => setActiveId(null)}
                            style={{
                              display: ele._id === activeId ? "block" : "none",
                            }}
                            className="drop-u"
                          />
                        </div>
                        <div>
                          <button
                            style={{
                              cursor: "pointer",
                              padding: "8px 0px",
                              backgroundColor: "white",
                              fontWeight: "700",
                              border: "none",
                              fontSize: "14px",
                              fontFamily: "sans-serif",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                            onClick={() => handleDis(ele._id)}
                            className="dis-button"
                          >
                            Description{" "}
                            <MdOutlineDescription
                              style={{
                                fontSize: "18px",
                                color: "rgb(0,117,255)",
                                backgroundColor: "rgb(242,253,255)",
                                borderRadius: "50%",
                                padding: "5px",
                              }}
                            />{" "}
                          </button>
                        </div>
                      </div>

                      <div
                        className="sub-task-mapper"
                        style={{
                          display: ele._id === activeId ? "block" : "none",
                        }}
                      >
                        {ele.sub &&
                          ele.sub.map((data) => (
                            <h4 key={data.id}>{data.subtask.toUpperCase()}</h4>
                          ))}
                        {ele.sub.length === 0 && (
                          <h3 className="alone">
                            <span>You</span> have no Subtask !
                          </h3>
                        )}
                      </div>
                    </div>

                    <div className="btn-wrapp">
                      <button onClick={() => handleDelete(ele._id)}>
                        DELETE
                      </button>
                      <button>
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to={`/todo/${ele._id}`}
                        >
                          UPDATE
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="des-div"
                  style={{ display: ele._id === dis ? "block" : "none" }}
                >
                  <h4>
                    {ele.description
                      ? ele.description
                      : "No description is added."}
                  </h4>
                  <div className="back-btn-wrapper">
                    <button onClick={() => handleHideDis(ele._id)}>Back</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </TodoListWrapper>
  );
};

export default TodoList;
