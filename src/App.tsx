const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {

  return (
    <div>
      {/* 중괄호를 사용하면 코드에서 일부 변수를 삽입하여 사용자에게 표시할 수 있도록
      자바스크립트로 “이스케이프 백(Escape Back)” -> 자바스크립트 표현식을 삽입할 수 있습니다.*/}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        // style={{}}은 특별한 문법이 아니라 style={ } JSX 중괄호 안에 있는 일반 {} 객체입니다.
        // 스타일이 자바스크립트 변수에 의존하는 경우 style 어트리뷰트를 사용할 수 있습니다.
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  )
}

export default App
