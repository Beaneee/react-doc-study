function App() {
  const isLoggedIn: number = 0;

  return (
    <div>
      <div>
        {/* JavaScript에서 a && b는 */}
        {/* a가 truthy이면 → b를 반환 */}
        {/* a가 falsy이면 → a를 반환 */}
        {/* 따라서 0을 출력하게 된다. */}
        {isLoggedIn && <></>}
      </div>
    </div>
  )
}

export default App
