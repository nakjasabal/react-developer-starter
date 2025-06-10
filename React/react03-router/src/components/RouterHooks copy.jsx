import {useLocation, useSearchParams} from "react-router-dom";


/**
/intro/router 경로가 요청되었을때 Outlet에 렌더링되는 컴포넌트 

useLocation 훅
  : React Router를 통해 라우팅된 페이지에서 현재 URL과 관련된 정보를 
  얻는데 사용된다. URL경로, 쿼리스트링 등의 관련정보를 제공한다.
useSearchParams 훅
  : 현재 URL의 쿼리스트링을 얻어오거나 조작할때 사용한다. 
 */
const RouterHooks = ()=>{
  const location = useLocation();  
  //쿼리스트링의 정보를 얻어오기 위한 변수와 변경을 위한 함수까지 정의 
  const [searchParams, setSearchParams] = useSearchParams();
  /** 쿼리스트링에서 파라미터를 얻어온다. 첫 진입시에는 둘다 null이된다.
  JSP의 request.getParameter()와 기능적으로 동일하다.  */
  const mode = searchParams.get('mode');
  const pageNum = searchParams.get('pageNum');
  
  //파라미터 mode의 값을 토글시켜주는 함수 정의 
  const changeMode = () => {
    //삼항연산자를 통해 list/view를 토글한다. 
    const nextMode = (mode==='list') ? 'view' : 'list';
    /** 파라미터 변경을 위한 setXX() 함수를 통해 값을 변경시킨다. 
    pageNum의 경우 값이 지정되지 않았으므로 기존의 값을 그대로 유지한다. */
    setSearchParams({ 
      mode : nextMode, 
      pageNum
    });
  }
        
  //다음페이지로 이동하기 위한 파라미터 조작 
  const nextPage = () => {
    //페이지번호가 없는 상태라면 1페이지로 지정하고, 아니면 +1 시킨다.
    let pageTemp = (pageNum===null || isNaN(pageNum)) 
                    ? 1 : parseInt(pageNum) + 1;
    //mode는 고정된 상태에서 pageNum만 변경한다. 
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
        {/* useLocation 훅을 통해 얻을 수 있는 정보 */}
        {/* pathname : 쿼리스트링을 제외한 경로까지를 반환 */}
        <li>URL : {location.pathname}</li>
        <li>쿼리스트링 : {location.search}</li>
        <li>mode : {mode}</li>
        <li>pageNum : {pageNum}</li>
      </ul>

      {/* 버튼에 함수 연결시 이벤트 리스너에 함수명만 기술하면된다.  */}
      <button onClick={changeMode}>mode변경</button>
      <button onClick={prevPage}>이전Page</button>
      <button onClick={nextPage}>다음Page</button>
    </div>
  </>);
}

export default RouterHooks;