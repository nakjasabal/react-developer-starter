const ReceiveMessage = (props) => {
  let id = props.chatData.id;
  let message = props.chatData.message;
  let date = props.displayDateTime(props.chatData.date);
  let imgUrl = props.chatData.imgUrl;
  let profileSrc = (imgUrl===undefined) ? '/imgs/ava6-bg.webp' : imgUrl;
  return (<>
    <div className="d-flex justify-content-between">
      <p className="small mb-1">{id} [{date}]</p>
      <p className="small mb-1 text-muted"></p>
    </div>
    <div className="d-flex flex-row justify-content-start">
      <img src={profileSrc} style={{'width':'45px','height':'100%'}}/>
      <div>
        <p className="small p-2 ms-3 mb-3 rounded-3" style={{'backgroundColor':'#f5f6f7'}}>
          {message}
        </p>        
      </div>
    </div>
  </>);
}

export default ReceiveMessage;