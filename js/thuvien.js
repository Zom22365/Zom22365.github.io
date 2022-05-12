document.getElementById("hien-thi-gio-hang").style.display= "none";


var gioHang = new Array();

var tongHoaDon = 0;
function themvaogiohang(x){
    var lopSanPham = x.parentElement.children;
    
    var anhSP = lopSanPham[0].src;
    var tenSP = lopSanPham[1].innerHTML;
    var giaSP = lopSanPham[2].innerHTML;
    var kichCoSP = lopSanPham[3].value;
    var soLuong = parseInt(lopSanPham[4].value);

  
    var sanPham = new Array(anhSP,tenSP,giaSP,kichCoSP,soLuong);

    var kiemTra=0;
    for (let i = 0; i< gioHang.length; i++) {
      if(gioHang[i][1]== tenSP){
          kiemTra =1;
          soLuong+=parseInt( gioHang[i][4]);
          gioHang[i][4]=soLuong;
          break;
      }
       
    }

    if(kiemTra==0){
        gioHang.push(sanPham);
        document.getElementById("gio-hang-trong").style.display="none";
        document.getElementById("hien-thi-gio-hang").style.display="none";
    }

    sessionStorage.setItem("gioHang", JSON.stringify(gioHang));
    

    hienThiSoSP();


}

function hienThiSoSP(){
    document.getElementById("dem-san-pham-trong-gio").innerHTML=gioHang.length;
}

function hienThiBangGioHang(){
    var thongTinGH ="";
    for (let i=0;i< gioHang.length;i++){
        var tongGia = gioHang[i][2] * gioHang[i][4];
        var gia = parseInt(gioHang[i][2]);
        gia = gia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
       tongGia = tongGia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        thongTinGH+='<tr>'+
        '<td data-th="Sản phẩm" class="bang-gio-hang-cot bang-gio-hang-cot-sp">'+
         '   <div class="o-gio-hang-thong-tin-sp">'+
            '      <div class="o-gio-hang-anh-sp">'+
             '       <a href="/html/chitiensanpham.html"><img src="'+gioHang[i][0]+'" alt=""></a>'+
                '  </div>'+
                '<div>'+
                 '   <div class="o-gio-hang-ten-sp">'+
                  '      <a href="/html/chitiensanpham.html">'+gioHang[i][1]+'</a>'+
                   ' </div>'+
                    '<div class="o-gio-hang-kich-co-sp">'+
                     '   <span class="xem-lua-chon chu">Kích cỡ: '+gioHang[i][3]+''+
                      '  </span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="bang-gio-hang-cot bang-gio-hang-cot-gia">'+
            '<span class="gia-san-pham">'+gia+'</span>'+
       ' </td>'+
       '<td data-th="Số lượng" class="bang-gio-hang-cot bang-gio-hang-cot-so-luong">'+
           ' <div class="cart-item-qty">'+
                   ' <input  type="number"  readonly="readonly"  class="o-gio-hang-nhap-so-luong-sp" value="'+gioHang[i][4]+'" >'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="bang-gio-hang-cot bang-gio-hang-cot-tong-tien">'+
                    ' <span class="tong-gia">'+tongGia+'</span>'+
                    ' <button onclick="delProduct(this)" class="nut-xoa">'+
                    'X'+
                    '</button >'+
                    '   </td>'+
                    ' </tr>';
    }
    document.getElementById("than-bang").innerHTML=thongTinGH;
 
}

function delProduct(x){
    // xoa tr
    var tr = x.parentElement.parentElement;
    var tenSP = tr.children[0].children[0].children[1].children[0].innerText;
    tr.remove();
    //xoa mang
    for (let i = 0; i < gioHang.length; i++) {
        if(gioHang[i][1]==tenSP){
            gioHang.splice(i,1);
            if(gioHang.length==0){
                var bieuTuongGH = document.getElementsByClassName("fa-solid fa-bag-shopping fa-lg");
                var kiemTra1 = document.getElementById("gio-hang-trong");
                var kiemTra2 = document.getElementById("hien-thi-gio-hang")
                if(kiemTra2.style.display=="block"){
                        kiemTra2.style.display="none";
                        kiemTra1.style.display="block";
                        bieuTuongGH[0].style.color= "#64b1bc";
            }
        }
        
    }
    hienThiBangGioHang();
    hienThiSoSP();
    datHang();
   
    sessionStorage.setItem("gioHang", JSON.stringify(gioHang));

    
}}

function dieuKhienHienThi(){
    var bieuTuongGH = document.getElementsByClassName("fa-solid fa-bag-shopping fa-lg");
    if(gioHang.length==0){
        var kiemTra = document.getElementById("gio-hang-trong");
        if(kiemTra.style.display=="block"){
                kiemTra.style.display="none";
                bieuTuongGH[0].style.color =  "rgba(0, 0, 0, 0.801)";
     }else{
        kiemTra.style.display="block";
        bieuTuongGH[0].style.color= "#64b1bc";
     }
    }
    else{
        var kiemTra = document.getElementById("hien-thi-gio-hang");
        if(kiemTra.style.display=="block"){
               kiemTra.style.display="none";
               bieuTuongGH[0].style.color =  "rgba(0, 0, 0, 0.801)";
        }else{
           kiemTra.style.display="block";
           hienThiBangGioHang();
           bieuTuongGH[0].style.color= "#64b1bc";
           
        }
    }
    
}


function hienThiGH(){
    var gh = sessionStorage.getItem("gioHang");
    var gioHang = JSON.parse(gh);
    tongHoaDon = 0;
    var thongTinGH ="";
    for (let i=0;i< gioHang.length;i++){
        var tongGia = gioHang[i][2] * gioHang[i][4];
        tongHoaDon +=parseInt(tongGia);
        var gia = parseInt(gioHang[i][2]);
        
        gia = gia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        tongGia = tongGia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        thongTinGH+='<tr>'+
        '<td data-th="Sản phẩm" class="bang-gio-hang-cot bang-gio-hang-cot-sp">'+
         '   <div class="o-gio-hang-thong-tin-sp">'+
            '      <div class="o-gio-hang-anh-sp">'+
             '       <a href="/html/chitiensanpham.html"><img src="'+gioHang[i][0]+'" alt=""></a>'+
                '  </div>'+
                '<div>'+
                 '   <div class="o-gio-hang-ten-sp">'+
                  '      <a href="/html/chitiensanpham.html">'+gioHang[i][1]+'</a>'+
                   ' </div>'+
                    '<div class="o-gio-hang-kich-co-sp">'+
                     '   <span class="xem-lua-chon chu">Kích cỡ: '+gioHang[i][3]+''+
                      '  </span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="bang-gio-hang-cot bang-gio-hang-cot-gia">'+
            '<span class="gia-san-pham">'+gia+'</span>'+
       ' </td>'+
        '<td data-th="Số lượng" class="bang-gio-hang-cot bang-gio-hang-cot-so-luong">'+
           ' <div class="o-gio-hang-so-luong-sp">'+
               ' <button onclick="chonSL()" type="button" class="nut-so-luong nut-so-luong-tru">'+
                   ' <span>-</span>'+
                   '</button >'+
                   ' <input  type="number"  readonly="readonly"  class="o-gio-hang-nhap-so-luong-sp" value="'+gioHang[i][4]+'" >'+
                   ' <button  onclick="chonSL()" class="nut-so-luong nut-so-luong-cong">'+
                   ' <span>+</span>'+
                    ' </button >'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="bang-gio-hang-cot bang-gio-hang-cot-tong-tien">'+
                    ' <span class="tong-gia">'+tongGia+'</span>'+
                    ' <button onclick="delProduct(this)" class="nut-xoa">'+
                    'X'+
                    '</button >'+
                    '   </td>'+
                    ' </tr>';
    }
         
    document.getElementById("than-bang").innerHTML=thongTinGH;
}

function chonSL(){
    var nutTru = document.getElementsByClassName("nut-so-luong-tru");
    var nutCong = document.getElementsByClassName("nut-so-luong-cong");
    var nhapSL = document.getElementsByClassName("o-gio-hang-nhap-so-luong-sp");
    var temp=0;
    var tongGia = document.getElementsByClassName("tong-gia");
    var gh = sessionStorage.getItem("gioHang");
    var gioHang = JSON.parse(gh);
  
    for (let i=0;i<gioHang.length;i++){
        nutTru[i].onclick = function() {
            if (parseInt( gioHang[i][4])>1){
             temp =parseInt( gioHang[i][4])-1;
             gioHang[i][4]= temp;
                nhapSL[i].value= gioHang[i][4];
            var temp1 = parseInt(gioHang[i][2])*temp;

                temp1 =temp1.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                })
                tongGia[i].innerHTML =temp1;
                tongHoaDon -=parseInt(gioHang[i][2]);
            }
            datHang();
            
        }

       nutCong[i].onclick = function() {
            if (parseInt( gioHang[i][4])<10){
                temp =parseInt( gioHang[i][4])+1;
                gioHang[i][4]= temp;
                nhapSL[i].value= gioHang[i][4];

                var temp1 = parseInt(gioHang[i][2])*temp;

                temp1 =temp1.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                })
                tongGia[i].innerHTML =temp1;
                tongHoaDon +=parseInt(gioHang[i][2]);
            }
            datHang();
         }
        
    }
      
}

function datHang(){
    var thongTinDonHang ="";
    var phiVanChuyen=40000;
    var tongDonHang=tongHoaDon;

    
    if(tongHoaDon>400000){
        phiVanChuyen = 0;
        tongDonHang+=phiVanChuyen;
    }else{
        tongDonHang+=phiVanChuyen;
    }

    var tongHoaDons=tongHoaDon;
    var phiVanchuyens=phiVanChuyen;
    var tongDonHangs=tongDonHang;

    tongHoaDons = tongHoaDons.toLocaleString('vi-VN',{
        style: 'currency',
        currency: 'VND'
    })

    phiVanchuyens = phiVanchuyens.toLocaleString('ni-VN',{
        style:'currency',
        currency:'VND'
    })

   tongDonHangs = tongDonHangs.toLocaleString('ni-VN',{
        style:'currency',
        currency:'VND'
    })
    thongTinDonHang +='<tr>'+
                '    <th>Giá gốc</th>'+
                '    <td>'+tongHoaDons+'</td>'+
                '</tr>'+
                '<tr>'+
                '    <th>Phí vận chuyển</th>'+
                '    <td>'+phiVanchuyens+'</td>'+
                '</tr>'+
                '<tr>'+
                '    <th>Tổng tiền thanh toán</th>'+
                '    <td>'+tongDonHangs+'</td>'+
                '</tr>';
               
    document.getElementById("tong-tien-thanh-toan").innerHTML=thongTinDonHang;
 
}

function hienThiChiTietGH(){
    var gh = sessionStorage.getItem("gioHang");
    var gioHang = JSON.parse(gh);
    tongHoaDon = 0;
    var thongTinGH ="";
    for (let i=0;i< gioHang.length;i++){
        var tongGia = gioHang[i][2] * gioHang[i][4];
        tongHoaDon +=parseInt(tongGia);
        var gia = parseInt(gioHang[i][2]);
        
        gia = gia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
       tongGia = tongGia.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        thongTinGH+='<tr>'+
        '<td data-th="Sản phẩm" class="bang-gio-hang-cot bang-gio-hang-cot-sp">'+
         '   <div class="o-gio-hang-thong-tin-sp">'+
            '      <div class="o-gio-hang-anh-sp">'+
             '       <a href="/html/chitiensanpham.html"><img src="'+gioHang[i][0]+'" alt=""></a>'+
                '  </div>'+
                '<div>'+
                 '   <div class="o-gio-hang-ten-sp">'+
                  '      <a href="/html/chitiensanpham.html">'+gioHang[i][1]+'</a>'+
                   ' </div>'+
                    '<div class="o-gio-hang-kich-co-sp">'+
                     '   <span class="xem-lua-chon chu">Kích cỡ: '+gioHang[i][3]+''+
                      '  </span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="bang-gio-hang-cot bang-gio-hang-cot-gia">'+
            '<span class="gia-san-pham">'+gia+'</span>'+
       ' </td>'+
        '<td data-th="Số lượng" class="bang-gio-hang-cot bang-gio-hang-cot-so-luong">'+
           ' <div class="o-gio-hang-so-luong-sp">'+
                   '<span>x'+gioHang[i][4]+'</span>'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="bang-gio-hang-cot bang-gio-hang-cot-tong-tien">'+
                    ' <span class="tong-gia">'+tongGia+'</span>'+
                    '   </td>'+
                    ' </tr>';
    }
         
    document.getElementById("than-bang").innerHTML=thongTinGH;
}
