const ModalWindow = ({ saveComment, editIdx, iWriter, setIWriter, iContents, setIContents }) => {
  const btnTitle = (editIdx === null) ? '작성' : '수정';
  const btnColor = (editIdx === null) ? 'primary' : 'warning';

  return (<>
    <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="commentModalLabel">댓글 {btnTitle}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="commentAuthor" className="form-label">작성자명</label>
              <input type="text" className="form-control" id="commentAuthor" placeholder="이름을 입력하세요"
                value={iWriter} onChange={(e) => setIWriter(e.target.value)} />
            </div>
            <label htmlFor="commentContent" className="form-label">댓글 내용</label>
            <textarea className="form-control" id="commentContent" rows="3" placeholder="댓글을 입력하세요"
              value={iContents} onChange={(e) => setIContents(e.target.value)}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" className={"btn btn-" + btnColor} onClick={saveComment} data-bs-dismiss="modal">{btnTitle}</button>
          </div>
        </div>
      </div>
    </div>
  </>);
};
export default ModalWindow;