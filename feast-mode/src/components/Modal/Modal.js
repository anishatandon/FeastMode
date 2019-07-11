import React from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';


const Modal = ({ opened, close, children }) => {
    return(
        <div></div>
    )
//   return ReactDOM.createPortal(
//     <div>
//       <Backdrop close={close} opened={opened} />
//       <div>{children}</div>
//     </div>,
//     document.getElementById('root-modal')
//   );
};

export default Modal;