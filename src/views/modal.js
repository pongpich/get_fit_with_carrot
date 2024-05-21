import React, { Component } from 'react';
import './modal.scss'; // นำเข้าไฟล์ CSS ของ Modal





class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>คุณแน่ใจที่จะดำเนินการต่อหรือไม่?</p>
          <button onClick={this.props.onConfirm}>ยืนยัน</button>
          <button onClick={this.props.onCancel}>ยกเลิก</button>
        </div>
      </div>
    );
  }
}

export default Modal;