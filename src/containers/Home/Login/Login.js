import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAxios } from "../../../redux/actions/QuanLyNguoiDungAction";
// chứa dữ liệu người dùng nhập vào

export default function Login() {
  let [nguoiDung, setNguoiDung] = useState({
    taikhoan: "",
    matKhau: "",
  });
  //   console.log(nguoiDung);
  let handleChange = (e) => {
    //   lấy value và name của input đang thao tác
    let { value, name } = e.target;
    setNguoiDung({
      ...nguoiDung,
      [name]: value,
    });
  };
  let dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dangNhapAxios(nguoiDung));
  };
  return (
    <form className="container">
      <h3>Login</h3>
      <div className="form-group">
        <span>Tài Khoản</span>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <span>Mật Khẩu</span>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success" onClick={handleSubmit}>
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
