/*eslint-disable */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','연신내고독한늑대썰']);
  let [따봉,따봉변경]=useState(0);
  
  let [modal,modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);

  let posts = '강남 고기 맛집';
  
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0]="여자코트추천";
    글제목변경(newArray);
  }
  function openCloseModal(){
    modal===true
    ? modal변경(false)
    :modal변경(true)
  }

  function 반복된UI(){
    var 어레이 = [];
    for(var i=0;i<3;i++){
      어레이.push(<div>ㅎㅇㅎㅇ</div>)
    }
    return 어레이
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue',fontSize:'30px'}}>개발 Blog</div>
      </div>
      <button onClick={제목바꾸기}>버튼</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉 + 1) }}>👍</span>{따봉} </h3>
        <p>4월4일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>4월4일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3 onClick={()=>{modal변경(true)}}>{글제목[2]}</h3>
        <p>4월4일 발행</p>
        <hr/>
      </div>
      {
        반복된UI()
      }
      {
        글제목.map((a,i)=>{
          return (
          <div className='list'>
            <h3  onClick={()=>{누른제목변경(i)}}>{a} <span onClick={()=>{ 따봉변경(따봉 + 1) }}>👍</span>{따봉} </h3>
            <p>4월4일 발행</p>
            <hr/>
          </div>
          )
        })
      }
      
      {/* <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button> */}

      {/* <button onClick={openCloseModal}>모달창버트</button> */}
      <button onClick={()=>{modal변경(!modal)}}>모달창버트</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }
     
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
    <h2>{props.글제목[props.누른제목]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
