import {useState, useEffect} from 'react';

function RandomUser(props){
  const [myJSON, setMyJSON] = useState({results:[]});  
  
  useEffect(function(){
    fetch("https://api.randomuser.me?results=10")
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        setMyJSON(json);
      });
  }, []);

  let trTag = myJSON.results.map((data) => {
    return (
      <tr key={data.login.md5}>
        <td><img src={data.picture.thumbnail} alt={data.login.username} /></td>
        <td><a href='/' onClick={(e)=>{
            e.preventDefault();
            props.onProfile(data);
          }}>{data.login.username}</a>
        </td>
        <td>{data.name.title} {data.name.first} {data.name.last}</td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
      </tr>
    );
  });
  
  return (
    <div>
       <table border='1'>
        <thead>
          <tr>
            <th>사진</th><th>로그인</th><th>이름</th>
            <th>국가</th><th>Email</th>
          </tr>
        </thead>
        <tbody>{trTag}</tbody>
       </table>
    </div>
  );
}

function ExternalApiFetcher() {
  return (<>
    <h2>외부 서버 통신</h2>
    <RandomUser onProfile={(sData)=>{
      console.log(sData);
      let info = `전화번호:${sData.cell}
성별:${sData.gender}
username:${sData.login.username}
password:${sData.login.password}`;
      alert(info);
    }}></RandomUser>
  </>);
}

export default ExternalApiFetcher;
