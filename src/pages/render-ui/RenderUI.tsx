import { Outlet } from "react-router-dom";

const RenderUI = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '12px', fontWeight: 'bold', fontSize: '18px' }}>
        UI 표현하기
      </div>
      <Outlet />
    </div>
  );
};

export default RenderUI;
