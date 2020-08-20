import axios from "axios";
import { layDanhSachPhim } from "../type/QuanLyPhimType";
export const layDanhSachPhimAxios = () => {
  return (dispatch) => {
    axios({
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((res) => {
        //sau khi lấy dữ liệu từ api về => setState danh sách phim
        dispatch({
          type: layDanhSachPhim,
          dsPhim: res.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
