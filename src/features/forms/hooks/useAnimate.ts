import { useEffect, useState } from 'react';

export const useAnimate = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return { show };
};
