import React from 'react';
import './style/Login.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    width: '460px',
    height: '496px',
    background: '#fff',
    borderRadius: '10px',
  },
  overlay: { zIndex: 1000 },
};

Modal.setAppElement('#root');

export const Login = (props) => {
  const { modalIsOpen, setIsOpen } = props;

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={150}
      contentLabel='Login'
    >
      <div className='login-title'>
        <button>X</button>
        <h2>Log In To SkipTheDishes</h2>
      </div>
    </Modal>
  );
};
