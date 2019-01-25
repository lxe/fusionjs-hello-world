import React from 'react';
import App from 'fusion-react';

import { styled } from 'fusion-plugin-styletron-react';

const Panel = styled('div', props => ({
  backgroundColor: props.$bg || 'silver'
}));

function RootComponent() {
  return <Panel $bg="gold"> Welcome to Fusion</Panel>;
}

const root = <RootComponent />;

export default function start() {
  const app = new App(root);
  return app;
}
