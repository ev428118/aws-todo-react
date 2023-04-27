import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  // 追加タグの文字表示
  const [todoText, setTodoText] = useState("");
  // 未完了のTODOの文字表示
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  // 完了したTODOの文字表示
  const [completeTodos, setcompleteTodos] = useState([]);
  // TODOを入力欄の入力変化を更新
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // 削除ボタン処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタン処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, newIncompleteTodos[index]];
    setcompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    newIncompleteTodos.splice(index, 1);
  };
  //　削除ボタン処理
  const onClickBack = (index) => {
    const backCompleteTodos = [...completeTodos];
    const backInCompleteTodos = [...incompleteTodos, backCompleteTodos[index]];
    setIncompleteTodos(backInCompleteTodos);
    setcompleteTodos(backCompleteTodos);
    backCompleteTodos.splice(index, 1);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個です。消化してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
