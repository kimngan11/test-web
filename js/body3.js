document.addEventListener('DOMContentLoaded', function() {
    const homeSpList = document.querySelector('.home-sp-list'); // Lấy danh sách sản phẩm
    const scrollLeftButton = document.querySelector('.scroll-left'); // Nút cuộn trái
    const scrollRightButton = document.querySelector('.scroll-right'); // Nút cuộn phải

    // Sự kiện cho nút cuộn trái
    scrollLeftButton.addEventListener('click', function() {
        homeSpList.scrollBy({
            top: 0,
            left: -385, // Giá trị âm để cuộn sang trái
            behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
        });
    });

    // Sự kiện cho nút cuộn phải
    scrollRightButton.addEventListener('click', function() {
        homeSpList.scrollBy({
            top: 0,
            left: 385, // Giá trị dương để cuộn sang phải
            behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
        });
    });
});
