import './App.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [titleValue, setTitleValue] = useState('');
  const [detailValue, setDetailValue] = useState('');
  const [list, setList] = useState([]);

  const addCard = () => {
    const newList = {
      id: uuid(),
      title: titleValue,
      detail: detailValue,
      isDone: false,
    };

    setList([...list, newList]);
    setTitleValue('');
    setDetailValue('');
  };

  const deleteHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const doneHandler = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <header>
        <div>
          제목
          <input
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
        </div>

        <div>
          내용
          <input
            value={detailValue}
            onChange={(e) => {
              setDetailValue(e.target.value);
            }}
          />
        </div>
        <button onClick={addCard}>추가하기</button>
      </header>

      <section className="working">
        <p>working</p>
        {list
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                detail={item.detail}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
                isDone={item.isDone}
              />
            );
          })}

        <p>done</p>
        {list
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                detail={item.detail}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
                isDone={item.isDone}
              />
            );
          })}
      </section>
    </div>
  );
}

export default App;
