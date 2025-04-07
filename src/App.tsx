import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return () => { // 클로저 함수
      setCount(count + 1);
    }
  }

  return (
    // 이벤트 핸들러 함수를 호출하지 않고 전달만 하면 됩니다.
    <button onClick={handleClick()}>
      {count}
    </button>
  )
}

export default App
