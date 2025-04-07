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
    // 컴포넌트는 여러 개의 JSX 태그를 반환할 수 없습니다.
    // <div>...</div> 또는 빈 <>...</> 래퍼와 같이 공유되는 부모로 감싸야 합니다.
    <div>
      <h1>Welcome to my app</h1>
      {/* JSX에서는 <br />같이 태그를 닫아야 합니다. */}
      <MyButton/>
    </div>
  )
}

export default App
