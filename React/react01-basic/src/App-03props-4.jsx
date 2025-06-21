function MyComponent({p1, p3}) {
  return (<>
    <h2>프롭스 구조분해할당</h2>
    <p>
      {p1}, {p3}
    </p>
  </>)
}

function App() {
  return (<>
    <MyComponent p1={'HTML5'} p2={'CSS3'} p3={'Javascript'} p4={'jQuery'} />
  </>)
}

export default App