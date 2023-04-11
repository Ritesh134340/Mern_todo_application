import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById, updateTodos } from "../Redux/AppReducer/action";
import { EditTodoWrapper } from "../styles/edittodo.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";

const EditTodo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const User = JSON.parse(localStorage.getItem("profile")) || "";
  const token = User.token;
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const { isLoading } = useSelector((state) => {
    return { isLoading: state.AppReducer.isLoading };
  });

  console.log(data);

  const handleUpdate = (e) => {
    const id = params.id;
    e.preventDefault();

    if (
      title !== data.title ||
      status !== data.status ||
      category !== data.category
    ) {
      const payload = {
        data: { Authorization: `Bearer ${token}` },
        updat: { title: title, status: status, category: category },

        id: id,
      };
      dispatch(updateTodos(payload)).then((res) => {
        const id = params.id;
        const payload = {
          data: { Authorization: `Bearer ${token}` },
          id: id,
        };

        dispatch(getById(payload))
          .then((res) => {
            setData(res.payload.data);
          })
          .catch((err) => {
            console.log(err);
          });

        toast.success("Updated Successfully !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    }
  };

  useEffect(() => {
    const id = params.id;
    const payload = {
      data: { Authorization: `Bearer ${token}` },
      id: id,
    };

    dispatch(getById(payload))
      .then((res) => {
        setData(res.payload.data);
        setTitle(res.payload.data.title);
        setStatus(res.payload.data.status);
        setCategory(res.payload.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  console.log(category);
  return (
    <>
      <Navbar />
      {isLoading ? (
        <div
          style={{
            width: "100%",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100vh",
          }}
        >
          <img
            src="https://createwebsite.net/wp-content/uploads/2015/09/GD.gif"
            style={{ display: "block", height: "100px", width: "100px" }}
            alt="loading"
          ></img>
        </div>
      ) : (
        <EditTodoWrapper>
          <div className="main-edit-div">
            <div className="form-div">
              <form className="edit-form">
                <label className="editTitle">Title</label>
                <br />
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                <br />
                <div className="status-wrapper-div">
                  <label className="editTitle">Status</label>
                  <br />
                  <div>
                    <input
                      value="pending"
                      name="stat"
                      type="radio"
                      onChange={(e) => setStatus(e.target.value)}
                      checked={status === "pending"}
                    />
                    <label>Pending</label>

                    <input
                      value="progress"
                      name="stat"
                      type="radio"
                      onChange={(e) => setStatus(e.target.value)}
                      checked={status === "progress"}
                    />
                    <label>Progress</label>

                    <input
                      value="completed"
                      name="stat"
                      type="radio"
                      onChange={(e) => setStatus(e.target.value)}
                      checked={status === "completed"}
                    />
                    <label>Completed</label>
                  </div>
                </div>
                <div className="checkWrapper-edit">
                  <label>Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="official">Official</option>
                    <option value="personal">Personal</option>
                    <option value="home">Home</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </form>
            </div>

            <button onClick={handleUpdate} className="edit-button">
              Save Changes
            </button>
          </div>
        </EditTodoWrapper>
      )}
      <ToastContainer />
    </>
  );
};

export default EditTodo;
