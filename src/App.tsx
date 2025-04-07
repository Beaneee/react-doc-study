function App() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // 이벤트 핸들러 함수를 호출하지 않고 전달만 하면 됩니다.
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

export default App
