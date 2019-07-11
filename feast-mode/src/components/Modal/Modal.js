import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

import './Modal.css';


const InsideWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`;

const Modal = ({ opened, close, children }) => {
  return ReactDOM.createPortal(
    <>
      {/* <Backdrop close={close} opened={opened} /> */}
      <PureModal className="friends-popup"
            // header="Add Friends"
            // footer={<button>Done</button>}
            onClose={close}
            isOpen={opened}
            // ref="modal"
            close={close}
        >
        <InsideWrapper>{children}</InsideWrapper>
      </PureModal>
    </>,
    document.getElementById('root-modal')
  );
};

export default Modal;


