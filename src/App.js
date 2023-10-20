// import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodosProvider, { TodosContext } from "./contexts/todosContext";
import MySnackBar from "./components/MySnackBar";
import { ToastPrevoider } from "./contexts/Toastcontext";

const itodos = [
  {
    id: uuidv4(),
    title: "قراءةكتاب",
    details: "سسسسسسسسسسششب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءةكتاب",
    details: "سسسسسسسسسسشffddشب",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءةكتاب",
    details: "سسسسسسسسسسششب",
    isCompleted: false,
  },
];

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

function App() {
  const [todos, setTodos] = useState(itodos);

  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastPrevoider>
          <div
            className="App"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              background: "#191b1f",
              direction: "ltr",
            }}
          >
              <TodoList />
          </div>
        </ToastPrevoider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
