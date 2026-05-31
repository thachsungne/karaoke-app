// main.js
console.log("File main.js đã tải thành công!");
const supabaseUrl = 'https://ihrtbsiusurvopbhtqde.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocnRic2l1c3Vydm9wYmh0cWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMzY5OTcsImV4cCI6MjA5NTgxMjk5N30.JNgO4mqMnqlkTO_vtE46oqK2agkGGNCYUWzL_hu8oIg';

// Kiểm tra xem Supabase đã được load chưa
if (typeof supabase !== 'undefined') {
    const sb = supabase.createClient(supabaseUrl, supabaseKey);
    document.getElementById('app').innerHTML = "<h1 style='color:lime;'>ĐÃ TẢI THÀNH CÔNG MAIN.JS!</h1>";
} else {
    document.getElementById('app').innerHTML = "<h1 style='color:red;'>LỖI: THƯ VIỆN SUPABASE CHƯA ĐƯỢC LOAD!</h1>";
}
