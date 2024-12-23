function saveBorrowData() {
  // ดึงข้อมูลจากฟอร์ม
  const borrowerName = document.getElementById('borrower-name').value;
  const equipmentName = document.getElementById('equipment-name').value;
  const borrowDate = document.getElementById('borrow-date').value;

  // ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบถ้วน
  if (!borrowerName || !equipmentName || !borrowDate) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  // สร้างข้อมูลการยืม
  const borrowData = {
    borrowerName,
    equipmentName,
    borrowDate
  };

  // ดึงข้อมูลการยืมที่เก็บไว้ใน localStorage (ถ้ามี)
  let borrowRecords = JSON.parse(localStorage.getItem('borrowRecords')) || [];

  // เพิ่มข้อมูลการยืมใหม่เข้าไปในตาราง
  borrowRecords.push(borrowData);

  // บันทึกข้อมูลการยืมกลับไปยัง localStorage
  localStorage.setItem('borrowRecords', JSON.stringify(borrowRecords));

  // เปลี่ยนหน้าไปยังหน้ารายการการยืม
  window.location.href = 'index.html';
}
