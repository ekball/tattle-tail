import React from 'react';

import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

function NavTabs({ currentPage, handlePageChange }) {
  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

    <div className='bg-sky-700 p-5'>

    <ul className="nav nav-tabs flex justify-evenly">

      <li>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Puppy
          </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >

                    <a
                      href="#puppy"
                      onClick={() => handlePageChange('puppy')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Puppy' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>General</MenuItem>

                    </a>

                    <a
                      href="#pottytrain"
                      onClick={() => handlePageChange('PottyTrain')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Puppy' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>Potty Training</MenuItem>

                    </a>

                    <a
                      href="#biting"
                      onClick={() => handlePageChange('Biting')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Puppy' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>Teething and Biting</MenuItem>
                    
                    </a>

                    <a
                      href="#socialize"
                      onClick={() => handlePageChange('Socialize')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Puppy' ? 'nav-link active' : 'nav-link'}
                    >
                      
                      <MenuItem onClick={handleClose}>Socializing</MenuItem>

                    </a>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </li>

      {/* <li className='hover:text-orange-400 text-xl'>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Commands
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <a
                      href="#commands"
                      onClick={() => handlePageChange('commands')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Commands' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>Overview</MenuItem>

                    </a>

                    <a
                      href="#hey"
                      onClick={() => handlePageChange('Hey')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Commands' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>Getting Attention</MenuItem>

                    </a>

                    <a
                      href="#sit"
                      onClick={() => handlePageChange('Sit')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Commands' ? 'nav-link active' : 'nav-link'}
                    >
                      <MenuItem onClick={handleClose}>Sit</MenuItem>
                    
                    </a>

                    <a
                      href="#watch"
                      onClick={() => handlePageChange('Watch')}
                      // when the puppy button is clicked, re-render the page with the info from the puppy component
                      // if the current page is the puppy page, set the value of nav-link to active, otherwise, leave false
                      className={currentPage === 'Commands' ? 'nav-link active' : 'nav-link'}
                    >
                      
                      <MenuItem onClick={handleClose}>Keeping Focus</MenuItem>

                    </a>
                    
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </li> */}

      {/*  navigation tab to the references section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#references"
          onClick={() => handlePageChange('References')}
          // when the references button is clicked, re-render the page with the info from the references component
          // if the current page is the references page, set the value of nav-link to active, otherwise, leave false
          className={currentPage === 'References' ? 'nav-link active' : 'nav-link'}
        >
          References
        </a>
      </li>

      

      {/*  navigation tab to the contact section */}
      <li className='hover:text-orange-400 text-xl'>
        <a
          href="#contact"
          // when the contact button is clicked, re-render the page with the info from the contact component
          // if the current page is the contact page, set the value of nav-link to active, otherwise, leave false
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

      </li>
    </ul>

    </div>
  );
}

export default NavTabs;
