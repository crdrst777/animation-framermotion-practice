import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  // 드래그하는 10초 동안 컬러가 변함.
  drag: { backgroundColor: "rgb(46, 204,113)", transition: { duration: 10 } },
};
// color설정은 rgb나 rgba로만 해야함.
// duration -> 애니메이션을 마칠때까지 걸리는 시간

function GesturesPartOne() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover="hover" // hover 했을떼
        whileTap="click" // click 하고 있을때
        whileDrag="drag" // drag 하고 있을때
      />
    </Wrapper>
  );
}

export default GesturesPartOne;

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
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
