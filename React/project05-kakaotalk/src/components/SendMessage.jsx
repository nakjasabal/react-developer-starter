const SendMessage = (props) => {
  let id = props.chatData.id;
  let message = props.chatData.message;
  let date = props.displayDateTime(props.chatData.date);
  let imgUrl = props.chatData.imgUrl;
  let profileSrc = (imgUrl===undefined) ? '/imgs/ava1-bg.webp' : imgUrl;
  return (<>
    <div className="d-flex justify-content-between">
      <p className="small mb-1 text-muted"></p>
      <p className="small mb-1">[{date}] {id}</p>
    </div>
    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
      <div>
        <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">{message}</p>
      </div>
      <img src={profileSrc} style={{'width':'45px','height':'100%'}} />
    </div>
  </>);
}

export default SendMessage;