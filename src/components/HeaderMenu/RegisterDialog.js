import { Dialog, TextField } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import _ from 'lodash/fp';
import { useDispatch } from 'react-redux';
import { register } from 'store/actions/auth/register';

const RegisterDialog = (props) => {
  const { control, handleSubmit, errors, watch, setError } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if(watch('confirmPassword') !== watch('password'))
      setError('confirmPassword', {type: 'pattern'})
    else {
      dispatch(register(data, props.handleClose))
    }
  }
  
  return (
    <Dialog 
      open={props.isOpen} 
      onClose={props.handleClose} 
      aria-labelledby="form-dialog-title"
      maxWidth='sm'
      fullWidth
    >
      <StyledRegisterDialog>
        <div className="dialog-content">
          
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className='form'
          >
            <div className="form-title">
              <h4>Register</h4>
            </div>

            <div className="form-item">
              <Controller 
                as={TextField}
                name='email'
                label="Enter your email" 
                variant="outlined"
                control={control}
                defaultValue=''
                rules={{required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }}
                error={_.get("email.type", errors)}
                helperText={
                  _.get("email.type", errors) === 'required' 
                  ? 'This field is required'
                  : _.get("email.type", errors) === 'pattern'
                  ? 'Please enter valid email'
                  : ''
                }
              />
            </div>
    
            <div className="form-item">
              <Controller 
                as={TextField}
                name='password'
                type='password'
                label="Enter your password" 
                variant="outlined"
                control={control}
                defaultValue=''
                rules={{required: true, minLength: 4}}
                error={_.get("password.type", errors)}
                helperText={
                  _.get("password.type", errors) === 'required'
                  ? 'This field is required'
                  : _.get("password.type", errors) === 'minLength'
                  ? 'Password must be at least 4 characters long'
                  : ''
                }
              />
            </div>
            
            <div className="form-item">
              <Controller 
                as={TextField}
                name='confirmPassword'
                type='password'
                label="Confirm password" 
                variant="outlined"
                control={control}
                defaultValue=''
                rules={{ required: true }}
                error={_.get("confirmPassword.type", errors)}
                helperText={
                  _.get("confirmPassword.type", errors) === 'required'
                  ? 'This field is required'
                  : _.get("confirmPassword.type", errors) === 'pattern'
                  ? "Password confirmation does not match"
                  : ''
                }
              />
            </div>

            <div className="form-item">
              <Controller 
                as={TextField}
                name='firstName'
                label="First name" 
                variant="outlined"
                control={control}
                defaultValue=''
                rules={{required: true}}
                error={_.get("firstName.type", errors)}
                helperText={
                  _.get("firstName.type", errors) === 'required'
                  ? 'This field is required'
                  : ''
                }
              />
            </div>

            <div className="form-item">
              <Controller 
                as={TextField}
                name='lastName'
                label="Last name" 
                variant="outlined"
                control={control}
                defaultValue=''
                rules={{required: true}}
                error={_.get("lastName.type", errors)}
                helperText={
                  _.get("lastName.type", errors) === 'required'
                  ? 'This field is required'
                  : ''
                }
              />
            </div>
    
            <div className="action-buttons">
              <button type="submit" className="btn btn-primary" >Login</button>
              <button type="button" className="btn btn-secondary" onClick={props.handleClose} >Cancel</button>
            </div>
          </form>


        </div>
      </StyledRegisterDialog>
    </Dialog>
  )
}

export default RegisterDialog

const StyledRegisterDialog = styled.div`
  .dialog-content {
    display: flex;
    flex-direction: column;
    padding: 32px 48px;
  }

  .form {
    width: 100%;
    
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

    .input-error {
      font-size: 12px;
      color: red;
    }
  }   
`;