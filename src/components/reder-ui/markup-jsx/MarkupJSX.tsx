const MarkupJSX = () => {

  return (
    <>
      {/*1. 하나의 루트 엘리먼트로 반환하기*/}
      <div>
        <h1>Hedy Lamarr's Todos</h1>
        {/*3. 거의 대부분 캐멀 케이스로!*/}
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          {/*2. 모든 태그는 닫아주기*/}
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
      </div>
    </>
  )
}

export default MarkupJSX;