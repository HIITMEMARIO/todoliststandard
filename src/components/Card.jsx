import React from 'react';

function Card({ id, title, detail, deleteHandler, doneHandler, isDone }) {
  return (
    <div key={id}>
      <div>{title}</div>
      <div>{detail}</div>
      <button onClick={() => deleteHandler(id)}>삭제하기</button>
      <button onClick={() => doneHandler(id)}>
        {isDone ? '취소' : '완료'}
      </button>
    </div>
  );
}
export default Card;
