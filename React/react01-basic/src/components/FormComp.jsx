let FormComp = function() {
  return (<>
    <form>
      <select name="gubun">
        <option value="front">프런트앤드</option>
        <option value="back">백앤드</option>
      </select>
      <input type="text" name="title" />
      <input type="submit" value="추가" />
    </form>  
  </>);
}

export default FormComp;