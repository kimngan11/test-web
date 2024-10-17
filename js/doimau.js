// Lấy tất cả các phần tử trong trang
const elements = document.querySelectorAll('*');

// Duyệt qua từng phần tử
elements.forEach((element) => {
    // Kiểm tra nếu màu nền của phần tử là xanh
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if (bgColor === 'rgb(20, 30, 210)') { // Kiểm tra mã màu xanh
        element.style.backgroundColor = 'rgb(7, 28, 44)'; // Đổi thành đen
    }

    const bg1Color = window.getComputedStyle(element).backgroundColor;
    if (bg1Color === 'rgb(160, 210, 255)') { // Kiểm tra mã màu xanh
        element.style.backgroundColor = 'rgb(120,138,152)'; // Đổi thành đen
    }
    
    //Kiểm tra nếu màu chữ của phần tử là xanh
    const color = window.getComputedStyle(element).color;
    if (color === 'rgb(20, 30, 210)' ) { // Kiểm tra mã màu xanh
        element.style.color = 'rgb(7,28,44)'; // Đổi thành trắng cho dễ đọc
    }
});
