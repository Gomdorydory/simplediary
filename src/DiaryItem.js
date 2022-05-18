import {useRef, useState} from "react";

const DiaryItem = ({ onEdit, onRemove, id, author, content, emotion, created_date}) => {

const [isEdit, setIsEdit] = useState(false); //useEdit의 기본값 = false, boolean 값을 저장함.
const toggleIsEdit = () => setIsEdit(!isEdit);

const [localContent, setLocalContent] = useState(content);
const localContentInput = useRef();

const handleRemove = () => {
  if(window.confirm(`${id}번쩨 일기를 정말 삭제하시겠습니까?`)){
    onRemove(id);
  }
}

const handleQuitEdit = () => {
  setIsEdit(false);
  setLocalContent(content);
}

const handleEdit = () => {

  if(localContent.length < 5){
    localContentInput.current.focus();
    return;

  if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){

    onEdit(id, localContent);
    toggleIsEdit();
  };
  }

  onEdit(id,localContent)
}

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocalString()}</span>
      </div>
      <div className="content">
        {isEdit ? <>
          <textarea 
            ref={localContentInput}
            value={localContent} onChange={(e)=>setLocalContent(e.target.value)}/>
        </> : <>{content}</>}
      </div>
      {isEdit ? <>
        <button onClick={handleQuitEdit}> 수정취소 </button>
        <button onClick={handleEdit}>수정완료</button>
      </> : <>
        <button onClick={handleRemove}> 삭제하기 </button>
        <button onClick={toggleIsEdit}>수정하기</button>
      </>}

    </div>
  )
};

//created_date는 인간이 알아볼 수 없는 밀리세컨즈의 시간 표시이다. 그래서 Date함수에 넣고, 그의 기능인 toLocalString을 이용하여 인간이 알아볼 수 있는 시간 표시로 바꾸었다.


export default DiaryItem;