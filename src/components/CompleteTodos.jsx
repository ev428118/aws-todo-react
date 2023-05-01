export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
      <div className="complete-area">
        <p className="title">完了したtodo</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                <div key={todo} className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  