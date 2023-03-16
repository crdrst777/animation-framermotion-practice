import styled from "styled-components";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
// import Variants from "./components/Variants";
// import BasicAnimations from "./components/BasicAnimations";
// import GesturesPartOne from "./components/GesturesPartOne";
// import GesturesPartTwo from "./components/GesturesPartTwo";

function App() {
  const x = useMotionValue(0); // box를 드래그할때마다 이 x값은 업데이트될거임. 그치만 컴포넌트가 리랜더링되진 않음. (concole.log가 한번만 뜸)
  const motionValue = useMotionValueEvent(x, "change", (i) => {
    console.log(i);
  }); // 이렇게해야 motionValue값을 알 수 있음
  console.log(motionValue);

  return (
    <>
      {/* <Variants /> */}
      {/* <BasicAnimations /> */}
      {/* <GesturesPartOne /> */}
      {/* <GesturesPartTwo /> */}
      <Wrapper>
        <button onClick={() => x.set(200)}></button>
        {/* x값을 200으로 세팅해줘서 위치를 바꿔줌 */}
        <Box
          style={{ x: x }}
          drag="x" // x축으로만 이동 가능
          dragSnapToOrigin // 놓으면 원점으로 돌아감
        />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
