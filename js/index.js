
// Bài 1
function luong(luongNgay,soNgayLam){
    return luongNgay * soNgayLam;
}

document.getElementById("tinhLuong").onclick=function(){
    let luongNgay=document.getElementById("luongNgay").value*1;
    let soNgayLam=document.getElementById("soNgayLam").value*1;
    let ketQuaLuong = luong(luongNgay,soNgayLam);
    document.getElementById("tienLuongNhanDuoc").innerHTML=`Tiền lương sẽ nhận được là ${ketQuaLuong}`;
}

// Bài 2

function tinhDiemTrungBinh(giaTri1, giaTri2, giaTri3, giaTri4, giaTri5){
    return (giaTri1+giaTri2+giaTri3+giaTri4+giaTri5)/5;
}
document.getElementById("tinhTongDiemTrungBinh").onclick=function(){
    let giaTri1=document.getElementById("soThu1").value*1;
    let giaTri2=document.getElementById("soThu2").value*1;
    let giaTri3=document.getElementById("soThu3").value*1;
    let giaTri4=document.getElementById("soThu4").value*1;
    let giaTri5=document.getElementById("soThu5").value*1;
    let tongDiemTrungBinh = tinhDiemTrungBinh(giaTri1, giaTri2, giaTri3, giaTri4, giaTri5);
    document.getElementById("ketQuaTongDiemTrungBinh").innerHTML=`Giá Trị Trung Bình là ${tongDiemTrungBinh}`
}

//Bài 3

function QuyDoiTienTe(tienUSD){
    return tienUSD*23500;
}

document.getElementById("tinhTienQuyDoi").onclick=function(){
    let tienUSD=document.getElementById("tienUSD").value*1;
    let QuyDoi = QuyDoiTienTe(tienUSD);
    let tienTe = QuyDoi.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    document.getElementById("ketQuaTienQuyDoi").innerHTML=`Gía tiền đã được quy đổi ra là ${tienTe}`
}

// Bài 4

function dienTichHinhChuNhat(dai, rong){
    return dai*rong;
}
function chuViHinhChuNhat(dai, rong){
    return (dai+rong) *2
}
document.getElementById("tinhDienTichChuVi").onclick=function(){
    let chieuDai=document.getElementById("chieuDai").value*1;
    let chieuRong=document.getElementById("chieuRong").value*1;
    let DienTich=dienTichHinhChuNhat(chieuDai,chieuRong);
    let chuVi=chuViHinhChuNhat(chieuDai,chieuRong);
    document.getElementById("ketQuaDienTichChuVi").innerHTML=`Diện tích là ${DienTich}, Chu vi là ${chuVi}`
}

// Bài 5

function hangDonVi(so){
    return so%10;
}
function hangChuc(so){
    return Math.floor(so / 10);
}

document.getElementById("tinhTong2KySo").onclick=function(){
    let soCo2ChuSo=document.getElementById("soCo2ChuSo").value*1;
    let tong2KySoVuaNhap=hangDonVi(soCo2ChuSo)+hangChuc(soCo2ChuSo);
    document.getElementById("ketQuaTong2KySo").innerHTML=`Tính tổng ${tong2KySoVuaNhap}`
}
