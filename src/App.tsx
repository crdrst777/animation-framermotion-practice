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
// import SVGAnimation from "./components/SVGAnimation";
// import BasicAnimatePresence from "./components/BasicAnimatePresence";
// import SliderAnimatePresence from "./components/SliderAnimatePresence";
// import LayoutAnimation from "./components/LayoutAnimation";
import FinalProject from "./components/FinalProject";

function App() {
  return (
    <>
      {/* <Variants /> */}
      {/* <BasicAnimations /> */}
      {/* <GesturesPartOne /> */}
      {/* <GesturesPartTwo /> */}
      {/* <MotionValues /> */}
      {/* <SVGAnimation /> */}
      {/* <BasicAnimatePresence /> */}
      {/* <SliderAnimatePresence /> */}
      {/* <LayoutAnimation /> */}
      <FinalProject />

      {/* <Wrapper></Wrapper> */}
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
