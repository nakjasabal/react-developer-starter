import { useState } from 'react';
import { storage } from '../storageConfig';
import { ref, uploadBytes } from "firebase/storage";

const FileUpload = () => {  
  const imageRef = ref(storage, 'images/myFile.jpg');    
  console.log('경로/파일명', imageRef.fullPath, imageRef.name); 
  console.log('parent경로', imageRef.parent.fullPath);
  console.log('root경로', imageRef.root.fullPath);

  const [folder, setFolder] = useState('');
  const storageRef = ref(storage, (folder==='') ? '':'/'+folder);  
  return (<>
    <h2>Storage - 업로드</h2>
    <p>파일을 선택하면 즉시 업로드 됩니다.</p>
    폴더명 : <input type="text" name="folder" value={folder} 
                onChange={(e)=>setFolder(e.target.value)} /> <br />
    <input type="file" name="myfile" onChange={(e) => { 
      const uploadRef = ref(storageRef, e.target.files[0].name);     
      uploadBytes(uploadRef, e.target.files[0]).then((snapshot) => {
        console.log('업로드성공', snapshot);
      });
    }} />
  </>);
}

export default FileUpload;