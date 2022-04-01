import React from 'react';

import { ArrowTooltip } from 'assets/svg';

import { Container } from './styles';

export const Tooltip = ({ text }: { text: string }) => {
  return (
    <Container>
      <ArrowTooltip />
      <p>{text}</p>
    </Container>
  );
};
