import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAxios } from "../../../redux/actions/QuanLyPhimActions";

export default function HomePage(props) {
  // lấy props từ reducer về : dùng hook tên là useSelector ứng với mapstatetoprops , useDispatch
  // hàm này giống như mapstatetoprops
  let dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  // thay thế this.props.dispatch
  let dispatch = useDispatch();
  //useState thay thế this.state ứng với react class component
  let [state, setState] = useState({
    dsPhim: [],
  });

  //useEffect chạy sau khi nội dung được render
  // useEffect(()=>{
  //   console.log('useEffect thay thế cho didmount và didupdate');
  // });

  useEffect(() => {
    console.log("useEffect thay thế cho didmount");
    dispatch(layDanhSachPhimAxios());
  }, []);
  let renderPhim = () => {
    return dsPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
            <img className="card-img-top" src={phim.hinhAnh} alt="s" />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  // useEffect(() => {
  //   console.log('Didupdate sẽ thực thi tại đây')
  //   return () => {
  //     console.log('willunmount sẽ thực thi tại đây')
  //   }
  // }, [state.dsPhim])

  return (
    <div className="container">
      <h3 className="">Danh sách phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
