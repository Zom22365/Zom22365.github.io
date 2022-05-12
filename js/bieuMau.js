var nhomBieuMau = document.getElementsByClassName("nhom-bieu-mau");
var nhapThongTin = document.getElementsByClassName("nhap-thong-tin");
var nhanDan = document.getElementsByClassName("nhan-dan");
var bieuMauDangNhap = document.getElementById("bieu-mau-dang-nhap");
var bieuMauDangky = document.getElementById("bieu-mau-dang-ky");


for(let i=0;i<nhapThongTin.length;i++){
    nhapThongTin[i].addEventListener("click", function(){
        nhanDan[i].classList.add("hieu-ung");
        nhomBieuMau[i].style.borderColor= " #64b1bc";
    })
    for(let j=0;j<nhapThongTin.length;j++)
    if(j!=i){
        nhapThongTin[j].addEventListener("click", function(){
            
            if(nhapThongTin[i].value==""){
                nhanDan[i].classList.remove("hieu-ung")
                nhomBieuMau[i].style.borderColor= "#d2d1d4";
            }else{
                nhomBieuMau[i].style.borderWidth= "2px"
                nhomBieuMau[i].style.borderColor= "#64b1bc";
            }
        })
    }
}

for(let i=0;i<nhanDan.length;i++){
    nhanDan[i].addEventListener("click", function(){
        nhanDan[i].classList.add("hieu-ung");
        nhomBieuMau[i].style.borderColor= " #64b1bc";
    })
    for(let j=0;j<nhanDan.length;j++)
    if(j!=i){
        nhanDan[j].addEventListener("click", function(){
            
            if(nhapThongTin[i].value==""){
                nhanDan[i].classList.remove("hieu-ung")
                nhomBieuMau[i].style.borderColor= "#d2d1d4";
            }else{
                nhomBieuMau[i].style.borderWidth= "2px";
                nhomBieuMau[i].style.borderColor= "#64b1bc";
            }
        })
    }
}

bieuMauDangNhap.style.display="none";
bieuMauDangky.style.display="none";

function hienThiBieuMau(){
    var bieutuongND = document.getElementsByClassName("fa-solid fa-user fa-lg");
    var kiemTra1 = document.getElementById("bieu-mau-dang-nhap");
    var kiemTra2 = document.getElementById("bieu-mau-dang-ky");
    if(kiemTra1.style.display=="none" &&  kiemTra2.style.display=="none"){
        kiemTra1.style.display="block";
        bieutuongND [0].style.color= "#64b1bc";
    }else if(kiemTra1.style.display=="none" &&  kiemTra2.style.display=="block"){
        kiemTra1.style.display="none";
        kiemTra2.style.display="none";
        bieutuongND [0].style.color =  "rgba(0, 0, 0, 0.801)";
     }else if(kiemTra1.style.display=="block" &&  kiemTra2.style.display=="none"){
        kiemTra1.style.display="none";
        kiemTra2.style.display="none";
        bieutuongND [0].style.color =  "rgba(0, 0, 0, 0.801)";
     }
}

function bieuMauDK(){
    var kiemTra1 = document.getElementById("bieu-mau-dang-nhap");
    var kiemTra2 = document.getElementById("bieu-mau-dang-ky");
    if(kiemTra2.style.display=="none"){
        kiemTra1.style.display="none";
        kiemTra2.style.display="block";
    }
    
}

function bieuMauDN(){
    var kiemTra1 = document.getElementById("bieu-mau-dang-nhap");
    var kiemTra2 = document.getElementById("bieu-mau-dang-ky");
    if(kiemTra1.style.display=="none"){
        kiemTra1.style.display="block";
        kiemTra2.style.display="none";
    }
    
}