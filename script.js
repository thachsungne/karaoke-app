// 1. Khởi tạo Supabase
const supabase = supabase.createClient('https://ihrtbsiusurvopbhtqde.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg');

// 2. State
let STATE = { rooms: [], services: [], invoices: [], serviceUsage: [] };

// 3. Hàm chạy chính
async function initApp() {
    console.log("Đang khởi động KaraokeOS...");
    try {
        const { data: rooms } = await supabase.from('rooms').select('*');
        STATE.rooms = rooms || [];
        document.getElementById('app').innerHTML = `<h1 style="color:white; padding:20px;">Hệ thống đã kết nối! Số phòng: ${STATE.rooms.length}</h1>`;
    } catch (err) {
        document.getElementById('app').innerHTML = `<h1 style="color:red; padding:20px;">Lỗi kết nối! Kiểm tra Console.</h1>`;
        console.error(err);
    }
}

// 4. Kích hoạt
window.onload = initApp;
