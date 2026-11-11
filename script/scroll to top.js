function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hiển thị nút khi người dùng cuộn xuống dưới
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.getElementById("scrollToTopBtn");
    if (!btn) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}