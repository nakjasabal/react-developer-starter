import {useLocation, useSearchParams} from "react-router-dom";

const RouterHooks = ()=>{
  const location = useLocation();  
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const pageNum = searchParams.get('pageNum');
  
  const changeMode = () => {
    const nextMode = (mode==='list') ? 'view' : 'list';
    setSearchParams({ 
      mode : nextMode, 
      pageNum
    });
  }
        
  const nextPage = () => {
    let pageTemp = (pageNum===null || isNaN(pageNum)) 
                    ? 1 : parseInt(pageNum) + 1;
    setSearchParams({
      mode, 
      pageNum : pageTemp
    });
  }
  const prevPage = () => {
    let pageTemp = (pageNum===null || isNaN(pageNum)) 
                    ? 1 : parseInt(pageNum) - 1;
    setSearchParams({
      mode, 
      pageNum : pageTemp
    });
  }
  
  return (<>
    <h2>라우터 관련 Hook</h2>
    <div>
      <ul>
        <li>URL : {location.pathname}</li>
        <li>쿼리스트링 : {location.search}</li>
        <li>mode : {mode}</li>
        <li>pageNum : {pageNum}</li>
      </ul>
      <button onClick={changeMode}>mode변경</button>
      <button onClick={prevPage}>이전Page</button>
      <button onClick={nextPage}>다음Page</button>
    </div>
  </>);
}

export default RouterHooks;