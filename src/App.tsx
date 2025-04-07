function App() {
  const isLoggedIn: boolean = false;

  return (
    <div>
      <div>
        {isLoggedIn ? (
          <span>로그인 했음!</span>
        ) : (
          <span>로그인 해야됨!</span>
        )}
      </div>
    </div>
  )
}

export default App
