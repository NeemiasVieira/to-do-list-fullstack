import { faPenToSquare, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { ModalEdicaoStyle } from './ModalEdicaoStyle';
import { editTodo } from '../../api/UseCases/Todos/editTodo';
import { Icon } from './ModalEdicaoStyle';

export const formatToDdMmYyyy = (isoDate) => {
  const date = new Date(isoDate);

  const utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

  const day = utcDate.getUTCDate().toString().padStart(2, '0');
  const month = (utcDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const year = utcDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

export const convertToISODate = (inputDate) => {
  const parts = inputDate.split('/'); 
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);  
  const isoDate = new Date(year, month - 1, day).toISOString().split('T')[0];  
  return isoDate;
}

Modal.setAppElement('#root'); 

const ModalEdicao = (props) => {
  const id = props.id;
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState(props.descriptionstatus);
  const [deadline, setDeadline] = useState(convertToISODate(props.deadlinestatus));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const submit = async(e) => {
    e.preventDefault();
    console.log(props);
    await editTodo(id, description, formatToDdMmYyyy(deadline), setIsLoading);    
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Icon><button onClick={openModal}><FontAwesomeIcon icon={faPenToSquare} className="bookIcon" /></button></Icon>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Formulário"
        style={{
          content: {
            maxWidth: "60%",
            maxHeight: "47%",
            margin: "auto"
          }
        }}
      >
        {/* Aqui você pode renderizar o formulário */}
        <ModalEdicaoStyle>
        <button onClick={closeModal} className='closeButton'><FontAwesomeIcon icon={faRectangleXmark} /></button>
        <form>

          <label>
            Description
            <textarea name="" id="" cols="35" rows="4" placeholder={""} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <label>
            Deadline<br />
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)}/>
          </label>
          
          <button className='save' onClick={async(e) => {   
            closeModal();     
            await submit(e)            
            window.location.reload();
            
            }}>Save</button>
          
        </form>
        </ModalEdicaoStyle>
      </Modal>
    </div>
  );
};

export default ModalEdicao;