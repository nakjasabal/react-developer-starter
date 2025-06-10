import { useState, useEffect } from "react";
import BoardView from './components/BoardView';
import CommentBtn from './components/CommentBtn';
import CommentList from './components/CommentList';
import ModalWindow from './components/ModalWindow';

function App() {
  const [boardData, setBoardData] = useState([]);
  const [iWriter, setIWriter] = useState('');
  const [iContents, setIContents] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [nextVal, setNextVal] = useState(2); 

  useEffect(() => {
    const savedData = localStorage.getItem('boardData');
    const savedSeq = localStorage.getItem('nextVal');
    if (savedData) {
      setBoardData(JSON.parse(savedData));
      setNextVal(Number(savedSeq) || 2);
    } 
    else {
      const initialData = [{ idx: 1, writer: '낙자쌤', postdate: '2025-05-15 09:30', 
        contents: '댓글 작성을 구현해봅니다.', likes: 0 }];
      setBoardData(initialData);
      localStorage.setItem('boardData', JSON.stringify(initialData));
      localStorage.setItem('nextVal', '2');
    }
  }, []);

  const updateStorage = (data, seq) => {
    localStorage.setItem('boardData', JSON.stringify(data));
    localStorage.setItem('nextVal', String(seq));
  };

  const saveComment = () => {
    if (editIdx === null) {
      const sysdate = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const newData = {
        idx: nextVal,
        writer: iWriter,
        postdate: sysdate,
        contents: iContents,
        likes: 0
      };
      const updateData = [...boardData, newData];
      setBoardData(updateData);
      setNextVal(nextVal + 1);
      updateStorage(updateData, nextVal + 1);
    } 
    else {
      const updateData = boardData.map(row =>
        row.idx === editIdx ? { ...row, writer: iWriter, contents: iContents } : row
      );
      setBoardData(updateData);
      updateStorage(updateData, nextVal);
    }
    setIWriter('');
    setIContents('');
  };

  const plusLike = (idx) => {
    const updateData = boardData.map(row =>
      row.idx === idx ? { ...row, likes: row.likes + 1 } : row
    );
    setBoardData(updateData);
    updateStorage(updateData, nextVal);
  };

  const deleteComment = (idx) => {
    if (confirm('댓글을 삭제할까요?')) {
      const updateData = boardData.filter(row => row.idx !== idx);
      setBoardData(updateData);
      updateStorage(updateData, nextVal);
    }
  };

  const editComment = (idx) => {
    const editData = boardData.find(row => row.idx === idx);
    if (editData) {
      setIWriter(editData.writer);
      setIContents(editData.contents);
      setEditIdx(idx);
    }
  };

  const newOpenModal = () => {
    setIWriter('');
    setIContents('');
    setEditIdx(null);
  };

  return (<>
    <div className="container mt-4">
      <BoardView />
      <CommentBtn newOpenModal={newOpenModal} />
      <ModalWindow saveComment={saveComment} editIdx={editIdx}
        iWriter={iWriter} setIWriter={setIWriter}
        iContents={iContents} setIContents={setIContents} />
      <CommentList boardData={boardData} plusLike={plusLike}
        deleteComment={deleteComment} editComment={editComment} />
    </div>
  </>);
}

export default App;