// Dùng hàm tự thực thi để bảo vệ biến supabase
(function() {
    // Kiểm tra nếu chưa có supabase thì mới tạo
    if (typeof window.supabase === 'undefined') {
        window.supabase = supabase.createClient(
            'https://ihrtbsiusurvopbhtqde.supabase.co', 
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg'
        );
    }
})();

// Dùng sự kiện để đảm bảo code chạy sau khi HTML load xong
window.addEventListener('DOMContentLoaded', () => {
    const appEl = document.getElementById('app');
    if (appEl) {
        appEl.innerHTML = "<h1>HỆ THỐNG ĐÃ SẴN SÀNG</h1>";
    }
    console.log("App đã load thành công!");
});
