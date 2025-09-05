const CommentBtn = ({ newOpenModal }) => {
  return (<>
    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#commentModal" onClick={() => newOpenModal()}>
      댓글 작성
    </button>
  </>);
};
export default CommentBtn;
