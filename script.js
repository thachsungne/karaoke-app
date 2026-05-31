// 1. Chỉ khai báo supabase 1 lần duy nhất
const supabase = supabase.createClient('https://ihrtbsiusurvopbhtqde.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg');

// 2. State
let STATE = { rooms: [], services: [], invoices: [], serviceUsage: [] };

// 3. Khởi động app
async function initApp() {
    console.log("Đang tải dữ liệu...");
    try {
        const { data: rooms } = await supabase.from('rooms').select('*');
        STATE.rooms = rooms || [];
        document.getElementById('app').innerHTML = `<h1>Chào mừng! Đã kết nối với ${STATE.rooms.length} phòng.</h1>`;
    } catch (err) {
        document.getElementById('app').innerHTML = "<h1>Lỗi kết nối Supabase!</h1>";
        console.error(err);
    }
}

// 4. Gọi hàm khi trang load xong
window.onload = initApp;
