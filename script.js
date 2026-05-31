// Chỉ khai báo một lần duy nhất
const supabase = supabase.createClient(
    'https://ihrtbsiusurvopbhtqde.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg'
);

async function initApp() {
    try {
        const app = document.getElementById('app');
        app.innerHTML = "Đang kết nối Database...";
        
        const { data, error } = await supabase.from('rooms').select('*');
        if (error) throw error;
        
        app.innerHTML = `<h1 style="color:green;">Kết nối thành công! Có ${data.length} phòng.</h1>`;
    } catch (e) {
        document.getElementById('app').innerHTML = `<h1 style="color:red;">Lỗi: ${e.message}</h1>`;
    }
}

// Chờ trang load xong mới chạy
window.onload = initApp;
