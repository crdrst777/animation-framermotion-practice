import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
// import Variants from "./components/Variants";
// import BasicAnimations from "./components/BasicAnimations";
// import GesturesPartOne from "./components/GesturesPartOne";
// import GesturesPartTwo from "./components/GesturesPartTwo";
// import MotionValues from "./components/MotionValues";
import SVGAnimation from "./components/SVGAnimation";

function App() {
  const x = useMotionValue(0); // box를 드래그할때마다 이 x값은 업데이트될거임. 그치만 컴포넌트가 리랜더링되진 않음. (concole.log가 한번만 뜸)

  const scaleValue = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // (x, 우리가 검토하길 원하는 입력값들, 우리가 얻길 원하는 측력값들)
  useMotionValueEvent(scaleValue, "change", (el) => console.log(el));

  // console.log("scaleValue", scaleValue);
  // useMotionValueEvent(x, "change", (el) => console.log(el)); // 이렇게해야 motionValue값을 알 수 있음

  return (
    <>
      {/* <Variants /> */}
      {/* <BasicAnimations /> */}
      {/* <GesturesPartOne /> */}
      {/* <GesturesPartTwo /> */}
      {/* <MotionValues /> */}
      <SVGAnimation />

      {/* <Wrapper> */}
      {/* <button onClick={() => x.set(200)}></button> */}
      {/* x값을 200으로 세팅해줘서 위치를 바꿔줌 */}
      {/* <Box style={{ x: x, scale: scaleValue }} drag="x" dragSnapToOrigin /> */}
      {/* </Wrapper> */}
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
