import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5, // 애니메이션을 마칠때까지 걸리는 시간
      bounce: 0.5,
      delayChildren: 0.5, // 딜레이 시간(초) 후에 하위 애니메이션이 시작
      staggerChildren: 0.2, // 하위 컴포넌트의 애니메이션에 지속 시간(초)만큼 시차를 둘 수 있음
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10, // y나 x는 Motion에만 국한되는거고 대부분은 css임
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Variants = () => {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
};

export default Variants;

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
