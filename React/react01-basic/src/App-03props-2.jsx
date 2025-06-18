function MyComponent(props) {
  return (<>
    <h2>props 객체 사용</h2>
    <p>
      {props.p1}, {props.p2}, {props.p3}, {props.p4}
    </p>
  </>)
}
function App() {
  return (<>
    <MyComponent p1={'HTML5'} p2={'CSS3'} p3={'Javascript'} p4={'jQuery'} />
  </>)
}

export default App