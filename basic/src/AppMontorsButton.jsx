import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'update', prev, current });
  };

  const handleAdd = () => {
    const addName = prompt(`멘토의 이름은?`);
    const addTitle = prompt(`멘토의 직함은?`);
    dispatch({ type: 'add', addName, addTitle });
  };

  const handleDelete = () => {
    const delName = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'delete', delName });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토의 이름을 바꾸기' onClick={handleUpdate}/>
      <Button text='추가하기' onClick={handleAdd}/>
      <Button text='삭제하ㅅ기' onClick={handleDelete}/>
    </div>
  );
}

function Button({ text, onClick }) {
  const result = calculateSomething();
  console.log('Button', text, 're-rendering 😜');
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
}

function calculateSomething(){
  for(let i =0; i<100 ;i ++){
    console.log('gg')
  }
  return 10;
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
