import React, { useState, useEffect } from "react";
import { getTodos, deleteTodo } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import { AllTodoWrapper } from "../styles/alltodos.style";
import TodoList from "./TodoList";
import { NavLink } from "../styles/alltodos.style";
import { useLocation, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
const AllTodos = () => {
  const User = JSON.parse(localStorage.getItem("profile")) || "";
  const token = User.token;
  const [Todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const [totalPages, setTotalPages] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { isLoading } = useSelector((state) => {
    return {
      isLoading: state.AppReducer.isLoading,
      Todos: state.AppReducer.todoList,
    };
  });

  useEffect(() => {
    if (token) {
      const payload = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          category: searchParams.getAll("category"),
          status: searchParams.getAll("status"),
          order: searchParams.getAll("sortBy"),
        },
      };
      dispatch(getTodos(payload, currentPage)).then((res) => {
        setTodos(res.payload.todos);
        setTotalPages(res.payload.totalPages);
      });
    }
  }, [location.search, currentPage]);

  const handleDelete = (id) => {
    if (token) {
      const payload = {
        data: { Authorization: `Bearer ${token}` },
        id: id,
      };
      dispatch(deleteTodo(payload))
        .then((res) => {
          toast.success(res.payload.mesg, {
            position: "top-center",
            autoClose: 0.9,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .then(() => {
          const payload = {
            headers: { Authorization: `Bearer ${token}` },
            params: {
              category: searchParams.getAll("category"),
              status: searchParams.getAll("status"),
              order: searchParams.getAll("sortBy"),
            },
          };
          dispatch(getTodos(payload, currentPage)).then((res) => {
            setTodos(res.payload.todos);
            setTotalPages(res.payload.totalPages);
          });
        });
    }
  };

  const handlePageChange = (current) => {
    setCurrentPage(current);
  };

  return (
    <>
      <Navbar />
      {isLoading ? <Loading/> : (
        <AllTodoWrapper>
          <Filter />

          {Todos?.length > 0 ? (
            <TodoList handleDelete={handleDelete} data={Todos} />
          ) : (
            <h3
              style={{
                margin: "auto",
                marginTop: "70px",
                textAlign: "center",
                fontFamily: "sans-serif",
                letterSpacing: "0.7px",
              }}
            >
              You don't have any todo...
              <br /> <NavLink to="/">Create Now !</NavLink>
            </h3>
          )}
        </AllTodoWrapper>
      )}
      <div
        style={{
          margin: "auto",
          marginTop: "40px",
          marginBottom: "50px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pagination
          total={totalPages}
          current={currentPage}
          onChange={handlePageChange}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default AllTodos;
