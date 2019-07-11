import React from 'react';


const Backdrop = ({ opened, close }) => {
  return <div onClick={close} opened={opened} />;
};

export default Backdrop;