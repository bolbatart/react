import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from 'store/actions/auth/login';

const LoginDialog = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors, control } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data, props.handleClose));
  }


  return (
    <Dialog 
      open={props.isOpen} 
      onClose={props.handleClose} 
      aria-labelledby="form-dialog-title"
      maxWidth='sm'
      fullWidth
    >
      <StyledLoginDialog>
        <div className="dialog-content">
          
          <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="form-title">
              <h4>Login</h4>
            </div>

            <div className="form-item">
              <Controller
                as={TextField} 
                name='email' 
                id='email' 
                label="Enter your email" 
                variant="outlined"
                control={control}
              />
            </div>
    
            <div className="form-item">
              <Controller
                as={TextField}
                name='password'
                id='pass' 
                type='password' 
                label="Enter your password" 
                variant="outlined"
                control={control}
               />
            </div>
    
            <div className="action-buttons">
              <button type='submit' className="btn btn-primary" onClick={props.handleClose} >Login</button>
              <button type="button" className="btn btn-secondary" onClick={props.handleClose} >Cancel</button>
            </div>
          </form>


        </div>
      </StyledLoginDialog>
    </Dialog>
  )
}

export default LoginDialog

const StyledLoginDialog = styled.div`
  .dialog-content {
    display: flex;
    flex-direction: column;
    padding: 32px 48px;
  }

  .form {
    &-title {
      margin: 0 0 32px;
    }
    &-item {
      > div {
        width: 100%;
      }
      margin: 0 0 24px;
    }
    .action-buttons {
      display: flex;
      justify-content: flex-end;
      margin: 0 -8px;
      button {
        width: 80px;
        margin: 0 8px;
      }
    }
  }


`;