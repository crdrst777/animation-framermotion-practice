import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

function MotionValues() {
  const x = useMotionValue(0); // box를 드래그할때마다 이 x값은 업데이트될거임. 그치만 컴포넌트가 리랜더링되진 않음. (concole.log가 한번만 뜸)
  // (x, 우리가 검토하길 원하는 입력값들, 우리가 얻길 원하는 측력값들)
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const { scrollY, scrollYProgress } = useScroll(); // 픽셀값, 스크롤 진행도
  // useMotionValueEvent(scrollY, "change", (el) => console.log("scrollY", el));
  useMotionValueEvent(
    scrollYProgress,
    "change",
    (el) => console.log("scrollYProgress", el) // 이렇게해야 scrollYProgress값을 알 수 있음
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x: x, rotateZ: rotateZ, scale }} // scale: scale -> scale 동일함
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default MotionValues;

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
