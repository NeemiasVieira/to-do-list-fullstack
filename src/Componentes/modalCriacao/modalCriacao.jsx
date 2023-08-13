import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalCriacaoStyle } from './modalCriacao';
import { formatToDdMmYyyy, convertToISODate } from '../ModalEdicao/ModalEdicao';
import { createTodo } from '../../api/UseCases/Todos/createTodo';
import { CreateButton } from './modalCriacao';
import { ModalEstilizado } from './modalCriacao';

Modal.setAppElement('#root');

const convertToISO = (date) => {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } else {
    console.error('Erro ao registrar data atual');
  }
};



export const ModalCriacao = () => {
  const today = convertToISO(new Date());
  // alert(today)
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(today);
  const [done, setDone] = useState(false);
  const username = sessionStorage.getItem("username");
  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalEstilizado>
      <CreateButton>
      <button onClick={openModal} className="createTodo">Create To Do</button>
      </CreateButton>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes"
        className="ModalEstilizado"
        style={{
          content: {
            maxWidth: "70%",
            maxHeight: "70%",
            margin: "auto",
          }
        }}
      >
        
        <ModalCriacaoStyle>
        <h2>Create To-Do</h2>
        <button onClick={closeModal} className='closeButton'><FontAwesomeIcon icon={faRectangleXmark} /></button>
        <textarea
          type="text"
          rows="5"
          cols="40"
          placeholder="Write the task here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="inputWithLabel">
        <label>Deadline</label> 
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        </div>
        <label>
          Done
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
          />
        </label>
        <button onClick={async() => {
          closeModal();
          await createTodo(description, username, formatToDdMmYyyy(deadline), done);
          window.location.reload();
        }} className='saveButton'>Create</button>
        </ModalCriacaoStyle>
      </Modal>
    </ModalEstilizado>
  );
}
