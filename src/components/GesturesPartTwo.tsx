import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function GesturesPartTwo() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          // drag="x" // x축으로만 이동 가능
          drag
          dragSnapToOrigin // 놓으면 원점으로 돌아감
          dragElastic={0.5} // 드래그로 당기는 힘 0~1
          // dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
          dragConstraints={biggerBoxRef} // 이 범위 안에서만 이동 가능
          variants={boxVariants}
          whileHover="hover" // hover 했을떼
          whileTap="click" // click 하고 있을때
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default GesturesPartTwo;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
