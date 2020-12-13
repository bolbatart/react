import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Fade as Hamburger } from 'hamburger-react'
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/actions/auth/logout';

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.authReducer.loggedIn)
  const [open, setOpen] = useState();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  const navRef = useRef();

  useEffect(() => {
    if (navRef.current !== undefined && open !== undefined) {
      navRef.current.classList.toggle('expanded')
    }
  }, [open]);

  return (
    <StyledHeaderMenu>
        <LoginDialog isOpen={isLoginOpen} handleClose={() => setIsLoginOpen(false)} />
        <RegisterDialog isOpen={isRegisterOpen} handleClose={() => setIsRegisterOpen(false)} />
        {/* LOGO */}
        <div className="hm-logo">
          <h1>LOGO</h1>
        </div>

        {/* BURGER */}
        <div className="hm-burger">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>

        <div className="hm-links-buttons" ref={navRef} >
          {/* LINKS */}
          <nav className='hm-nav-links'>
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="#">Post a project</a>
          </nav>
          {/* BUTTONS */}
          <div className="hm-buttons">
            {loggedIn ? (
                <button 
                className="btn btn-primary" 
                type="submit" 
                onClick={() => dispatch(logout())} 
              >
                Logout
              </button>
            ) : (
              <>
                <button 
                  className="btn btn-primary" 
                  type="submit" 
                  onClick={() => setIsLoginOpen(true)} 
                >
                  Login
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-primary" 
                  onClick={() => setIsRegisterOpen(true)} 
                >
                    Register
                </button>
              </>
            )
            
            }
          </div>

        </div>

    </StyledHeaderMenu>
  )
}

export default HeaderMenu

const StyledHeaderMenu = styled.div`
  padding: 10px 80px;
  background-color: rgba(0, 39, 79, 0.8);
  color: #fff;
  height: 100px;
  width: 100%;
  .hm-logo {
    margin: 0 64px 0 0;
  }

  &,
  .hm-links-buttons {
    display: flex;
    justify-items: center;
    align-items: center;
  }

  .hm-links-buttons {
    flex: 1;
    justify-content: space-between;
    
    .hm-nav-links {
      display: flex;
      a:hover {
        color: white;
      }
    }

    .hm-buttons {
      button:first-child {
        margin: 0 16px 0 0;
      }
    }
  }

  .hm-burger {
    display: none;
  }

  @media (max-width: 800px) {
    flex: 1;
    justify-content: space-between;
    position: relative;

    .hm-burger{
      display: block;
    }

    .hm-links-buttons {
      display: none;

      .hm-nav-links,
      .hm-buttons {
        width: 100%;
        padding: 24px;
      }

      .hm-nav-links {
        display: flex;
        flex-direction: column;
      }

      .hm-buttons {
        display: flex;
        flex-direction: column;
        
        button {
          width: 100%;
          &:first-child {
            margin: 0 0 16px;
          }
        }
      }
      /* PEREDELATJ STILISTIKU POTOMU CTO OTVRATITELNO VYGLIADIT */
      &.expanded {
        position: absolute;
        top: 100px;
        right: 0;
        bottom: 0;
        z-index: 100;
        width: 200px;
        height: calc(100vh - 100px);
        background: rgba(0, 39, 79, 0.8);
        display: flex;
        flex-direction: column;  
        justify-content: flex-start;
        align-items: center; 
      }  
    } 
  }
`;