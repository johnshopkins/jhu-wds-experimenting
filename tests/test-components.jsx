import React from 'react';

const ModalComponent = () =>
  <div className="jhu-modal" id="modal1" role="dialog">
    <div className="modal-content">
      <a href="https://www.jhu.edu">jhu.edu</a>
    </div>
  </div>

const ButtonComponent = () =>
  <button aria-controls="modal1" data-open-modal>
    Open Modal
  </button>


export { ButtonComponent, ModalComponent };
