import React from 'react';

import Input from '../Input';
import Button from '../Button';

export default function ModalLogin() {
  return (
    <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center fs-5" id="loginModalLabel">
              LOGIN
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div>
                <Input type="text" placeholder="Email" />
              </div>
              <div className="mt-3">
                <Input type="password" placeholder="Password" />
              </div>
              <div className="mt-3">
                <Button variant="black" style={{ textTransform: 'uppercase', fontSize: '14px' }}>
                  Login
                </Button>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <a style={{ fontSize: '14px', cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target="#resetModal">
                  Forgot your password?
                </a>
                <a style={{ fontSize: '14px', textDecoration: 'underline', color: '#000', cursor: 'pointer', fontWeight: '500' }} data-bs-toggle="modal" data-bs-target="#registerModal">
                  Create account
                </a>
              </div>
              <div style={{ paddingBottom: '5px' }}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
