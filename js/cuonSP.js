
var  danhMucSP = document.getElementsByClassName("anh-danh-muc-sp");
var chuyenAnh = document.getElementById("cuon-danh-muc-sp");

function nutTruoc(){
    chuyenAnh.prepend(danhMucSP[danhMucSP.length-1]);
   
}

function nutSau(){
    chuyenAnh.appendChild(danhMucSP[0]);
   
}

var cuonSP = document.getElementById("cuon-danh-sach-san-pham");
var sanPham = document.getElementsByClassName("thong-tin-san-pham");

function trai(){
    
    cuonSP.prepend(sanPham[sanPham.length-1]);
}

function phai(){
   
    cuonSP.appendChild(sanPham[0]);
}