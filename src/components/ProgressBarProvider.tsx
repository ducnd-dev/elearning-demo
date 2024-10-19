'use client';

import { AppProgressBar } from 'next-nprogress-bar';

const ProgressBar = () => {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBar;