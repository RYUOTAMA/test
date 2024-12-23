// ดึงข้อมูลการยืมจาก localStorage ถ้ามี
let borrowRecords = JSON.parse(localStorage.getItem('borrowRecords')) || [];

// ดึงตารางเพื่อจะเพิ่มข้อมูล
const tableBody = document.getElementById('borrow-table').getElementsByTagName('tbody')[0];

// ตรวจสอบว่ามีข้อมูลหรือไม่ ถ้ามีให้แสดงข้อมูลในตาราง
if (borrowRecords.length === 0) {
  const row = tableBody.insertRow();
  const cell = row.insertCell(0);
  cell.colSpan = 3;  // ให้เซลล์นี้ขยายครอบคลุมทั้ง 3 คอลัมน์
  cell.textContent = "ไม่มีข้อมูลการยืม";
} else {
  // เพิ่มข้อมูลการยืมเข้าไปในตาราง
  borrowRecords.forEach(record => {
    const row = tableBody.insertRow();

    // สร้างเซลล์สำหรับแต่ละคอลัมน์
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);


    // ใส่ข้อมูลในเซลล์
    cell1.textContent = record.borrowerName;
    cell2.textContent = record.equipmentName;
    cell3.textContent = record.borrowDate;
  });
}
