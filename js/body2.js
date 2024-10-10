document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.getElementById('dropdownMenu4');
    var dropdownMenu = document.querySelector('.dropdown-iwant-select');

    dropdownBtn.addEventListener('click', function() {
        // Toggle hiển thị của dropdown
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    // Đóng dropdown nếu nhấn ra ngoài
    document.addEventListener('click', function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
