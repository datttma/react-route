import React, { Component } from "react";
import NguoiDung from "./NguoiDung";
import SanPham from "./SanPham";
import WidthModal from "./widthModal";

let FormModal = WidthModal(SanPham);

export default class HOC extends Component {
  render() {
    return (
      <div>
        <FormModal />
      </div>
    );
  }
}
