import React from 'react';

import Input from '../Input';
import Button from '../Button';

export default function ModalResetPass() {
  return (
    <div className="modal fade" id="resetModal" tabindex="-1" aria-labelledby="resetModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title text-center fs-5" id="resetModalLabel">
              RESET YOUR PASSWORD
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form action="">
              <div style={{ border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                <p className="text-center" style={{ marginBottom: '0px', fontSize: '15px' }}>
                  We will send you an email to reset your password.
                </p>
              </div>
              <div className="mt-3">
                <Input type="email" placeholder="Email" />
              </div>
              <div className="mt-3">
                <Button variant="black" style={{ textTransform: 'uppercase', fontSize: '14px' }}>
                  Submit
                </Button>
              </div>
              <div style={{ paddingBottom: '20px' }}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
