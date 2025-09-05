import { storage } from '../storageConfig'
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const FileLists = () => {
  let params = useParams();
  let paramPath = (params.path === 'undefined') ? '' : params.path;
  const myPathRef = ref(storage, paramPath);  

  const [fileLists, setFileLists] = useState([]);  
  const [renderFlag, setRenderFlag] = useState(false);  

  useEffect(() => {    
    let fileRows = [];
    listAll(myPathRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          fileRows.push(
            <tr key={folderRef.name}>
              <td><NavLink to={`./${folderRef.name}`}>{folderRef.name}</NavLink></td>
              <td></td>
              <td colSpan={2}>폴더명</td>
            </tr> 
          ); 
        });
        res.items.forEach((itemRef) => {
          const deleteRef = ref(myPathRef, itemRef.fullPath);
          getDownloadURL(ref(myPathRef, itemRef.name))
            .then((url)=>{
              const img = document.getElementById(`img_${itemRef.name}`);
              console.log('url', url);
              img.setAttribute('src', url);
              img.setAttribute('width', '200');
            })
            .catch((error)=>{
              console.log("이미지 다운로드 중 에러", error)
            });
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{myPathRef.fullPath}</td>
              <td><img id={`img_${itemRef.name}`} /></td>
              <td>{itemRef.name}</td>
              <td><button type='button' onClick={() => {
                if(window.confirm('삭제할까요?')){
                  deleteObject(deleteRef).then(() => {
                    console.log("파일 삭제 성공");
                    setRenderFlag(!renderFlag);
                  })
                  .catch((error) => {
                    console.log("파일 삭제 실패", error);
                  });
                }
              }}>삭제</button></td>
            </tr> 
          );          
        });
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log('파일 목록 출력중 에러발생', error);
      });
  }, [renderFlag, paramPath]);

  return (<>
    <h2>Storage - 목록보기</h2>
    <p>현재위치 : /{myPathRef.fullPath}</p>
    <table border={1}>
      <tbody>
        <tr>
          <th>경로명</th><th>이미지</th><th colSpan={2}>파일명</th>
        </tr>
        {fileLists}
      </tbody>
    </table>
  </>);
}

export default FileLists;