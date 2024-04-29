import { useState, useEffect } from "react";
import styled from "styled-components";
import Photos from "../Gallery/Photos";
import closeIcon from "/icons/close.png";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Dialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export default function ZoomModal({ photo, closeModal, onFavoriteChange }) {
  return (
    <>
      {photo && (
        <>
          <Overlay />
          <Dialog open={true}>
            <Photos
              photo={photo}
              expand={true}
              onFavoriteChange={onFavoriteChange}
            />
            <form method="dialog">
              <IconButton onClick={closeModal} formMethod="dialog">
                <img src={closeIcon} alt="Botão de fechar imagem" />
              </IconButton>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
}
