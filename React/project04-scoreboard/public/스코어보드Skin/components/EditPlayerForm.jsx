export default function EditPlayerForm() {
  return (<>
    <form className="editform" 
      onSubmit={(e)=>{
        e.preventDefault();
      }
    }>
      <input type="text" name="player" className="editInput" 
        placeholder="이름을 추가하세요" value={"홍길동"} 
        onChange={()=>{}} />
      <input type="submit" className="editInput" value="수정하기" />
    </form>
  </>);
}

