import React, {createContext, useState, useContext} from "react";

interface ModalContext {
  isModal: boolean,
  isShowModal: () => void
}

interface ModalProviderProps {
  children: React.ReactNode
}

const ModalFormContext = createContext<ModalContext>({} as ModalContext);

export const useModalFormProvider = () => useContext(ModalFormContext);

export const ModalFormProvider: React.FC<ModalProviderProps> = ({children}) => {
  const [isModal, setIsModal] = useState(false)

  const isShowModal = () => {
    setIsModal(!isModal)
  }

  return (
    <ModalFormContext.Provider value={{isModal, isShowModal}}>
      {children}
    </ModalFormContext.Provider>
  );
};