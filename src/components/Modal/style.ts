import styled from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);

  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 99;

  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled(motion.div)`
  background: var(--white);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: var(--gray-900);
  border-radius: 4px;

  width: clamp(400px, 90vw, 850px);
  height: 80vh;
  z-index: 100;

  display: flex;
  overflow: scroll;
`;

export const CloseModalButton = styled(RiCloseCircleFill)`
  color: var(--white);
  cursor: pointer;

  height: 32px;
  padding: 0;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 32px;
  z-index: 10;
`;
