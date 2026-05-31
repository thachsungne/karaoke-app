// Dùng var hoặc kiểm tra trước khi khai báo để tránh lỗi trùng lặp
if (typeof supabase === 'undefined') {
    window.supabase = supabase.createClient('https://ihrtbsiusurvopbhtqde.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg');
}

// Chạy hàm kiểm tra thay vì chạy code rải rác
async function startApp() {
    try {
        const { data, error } = await supabase.from('rooms').select('*');
        if (error) throw error;
        document.getElementById('app').innerHTML = `<h1>Hệ thống sẵn sàng: ${data.length} phòng</h1>`;
    } catch (err) {
        document.getElementById('app').innerHTML = "<h1>Lỗi kết nối CSDL</h1>";
        console.error(err);
    }
}

window.onload = startApp;
