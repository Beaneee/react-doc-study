import Gallery from "@/components/reder-ui/first-component/Gallery.tsx";

const FirstComponent = () => {
  return (
    <div style={{fontSize: '16px', color: '#555', display: 'flex', flexDirection: 'column'}}>
      <span>첫 번째 컴포넌트</span>
      <Gallery />
    </div>

  );
};

export default FirstComponent;
