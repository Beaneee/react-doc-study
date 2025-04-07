function App() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  return (
    <ul>
      {products.map(product =>
        // 목록의 각 항목에 대해, 형제 항목 사이에서 해당 항목을 고유하게 식별하는 문자열 또는 숫자를 전달해야 합니다.
        // React는 나중에 항목을 삽입, 삭제 또는 재정렬할 때 어떤 일이 일어났는지 알기 위해 key를 사용합니다.
        <li key={product.id}>
          {product.title}
        </li>
      )}
    </ul>
  )
}

export default App
