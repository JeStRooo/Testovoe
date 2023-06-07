import React, {useState} from 'react';

import {Formik} from "formik";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CheckBox from "../CheckBox/CheckBox";
import RegistrationInputs from "./RegistrationInputs/RegistrationInputs";

import {initialValues, validationSchema} from "../../../mockData/patterns";

import {RegistrationType} from "../../../types/registrationType";

import classes from "./ModalForm.module.scss";

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  padding: '15px'
};

interface MuiModalProps {
  open: boolean,
  handleModal: () => void
}

const ModalForm: React.FC<MuiModalProps> = ({open, handleModal}) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
      <Modal
        open={open}
        onClose={handleModal}
      >
        <Box sx={style} className={classes.registration}>
          <h1 className={classes.registration__title}>
            Регистрация
          </h1>
          <Formik<RegistrationType>
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
                values,
                touched,
                errors,
                isValid,
                dirty,
                handleChange,
                handleBlur,
              }) => (
              <div className={classes.registration__form}>
                <RegistrationInputs
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <div className={classes.registration__checkbox}>
                  <CheckBox
                    onChange={() => setIsChecked(!isChecked)}
                    checked={isChecked}
                  />
                  <p>Я принимаю Условия обслуживания и прочитал Политику конфиденциальности</p>
                </div>
                <button
                  type="submit"
                  className={classes.registration__submit}
                  disabled={!isValid || !isChecked || !dirty}
                >
                  Зарегестрироваться
                </button>
                <p className={classes.auth}>
                  У вас уже есть учетная запись?
                  <a href="#" className={classes.auth__signup}>
                    Авторизоваться
                  </a>
                </p>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
  );
}

export default ModalForm;