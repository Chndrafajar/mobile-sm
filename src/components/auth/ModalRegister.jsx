import React from 'react';

import Input from '../Input';
import Button from '../Button';

export default function ModalRegister() {
  return (
    <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center fs-5" id="registerModalLabel">
              CREATE ACCOUNT
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div>
                <Input type="text" placeholder="First Name" />
              </div>
              <div className="mt-3">
                <Input type="text" placeholder="Last Name" />
              </div>
              <div className="mt-3">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <Input type="password" placeholder="Password" />
              </div>
              <div className="mt-3">
                <Button variant="black" style={{ textTransform: 'uppercase', fontSize: '14px' }}>
                  Create
                </Button>
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <a style={{ fontSize: '14px' }}>Already have account?</a>
                <a href="" style={{ fontSize: '14px', textDecoration: 'underline', color: '#000', fontWeight: '500' }} data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
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
