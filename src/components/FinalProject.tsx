import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function FinalProject() {
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
          // layoutId는 string이어야함
        ))}
      </Grid>
      <AnimatePresence>
        {/* id가 존재하면 Overlay가 나타나게할거임 */}
        {id ? (
          <Overlay // Grid 위에 놓일 Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
        {/* 이 element가 사라질때 어떤 애니메이션을 발생시킬지를 정함 */}
      </AnimatePresence>
    </Wrapper>
  );
}

export default FinalProject;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute; // 모든것의 위로 감 -> 중요
  display: flex;
  justify-content: center;
  align-items: center;
`;
