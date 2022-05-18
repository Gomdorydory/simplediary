import DiaryItem from "./DiaryItem";

const DiaryList = ( {onEdit, onRemove, diaryList} ) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it)=> (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} /> // it이라는 객체에 있는 모든 데이터가 DiaryItem의 prop으로 전달이 된다.
          ))} 
      </div>
    </div>
    
  );
};

DiaryList.defaultProps={
  diaryList:[], 
}

export default DiaryList;