import Profile from "@/components/reder-ui/first-component/Profile.tsx";

const Gallery = () => {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// JavaScript에서는 default와 named export라는 두 가지 방법으로 값을 export 합니다.
// 다만 한 파일에서는 하나의 default export만 존재할 수 있고 named export는 여러 개가 존재할 수 있습니다.
export default Gallery;