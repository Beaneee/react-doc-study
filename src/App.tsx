// React 컴포넌트의 이름은 항상 대문자로 시작해야 하고 HTML 태그는 소문자로 시작해야 합니다.
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  )
}

export default App
