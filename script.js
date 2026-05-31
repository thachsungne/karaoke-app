// Chỉ khai báo đúng 1 lần
const supabase = supabase.createClient('https://ihrtbsiusurvopbhtqde.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg');

// Kiểm tra và hiển thị ngay lập tức
function testApp() {
    console.log("Đang chạy...");
    document.body.innerHTML = "<h1 style='color:white; padding:50px;'>WEB ĐANG CHẠY!</h1>";
}

window.onload = testApp;
