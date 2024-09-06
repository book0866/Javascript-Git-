
let booknoCounter = 1;

function registerBook() {

  const category = document.getElementById('category').value;
  const bookname = document.getElementById('bookname').value;
  const bookprice = document.getElementById('bookprice').value;

  if (!category) {
    alert('카테고리를 선택해주세요.');
    return;
  }

  if (!bookname) {
    alert('도서명을 기입해주세요.');
    return;
  }

  if (!bookprice) {
    alert('가격을 기입해주세요.');
    return;
  }

  if (bookDuplicate(category, bookname)) {
    alert('같은 카테고리 안에 동일한 책이 중복되어 있습니다.');
    return;
  }


  const tableBody = document.getElementById('book-list-tbody');

  let newRow = `
    <tr>
      <td>${booknoCounter++}</td>
      <td>${category}</td>
      <td>${bookname}</td>
      <td>${bookprice + '원'}</td>
      <td><button onclick="deleteList(this)">삭제</button></td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newRow);
}


function bookDuplicate(category, bookname) {
  const tableBody = document.getElementById('book-list-tbody');
  const rows = tableBody.getElementsByTagName('tr');
  
  for (let row of rows) {
    const cell = row.getElementsByTagName('td');
    const registerCategory = cell[1].textContent;
    const registerBookname = cell[2].textContent;

    if (registerCategory == category && registerBookname == bookname) {
      return true;
    }
  }

  alert('도서가 성공적으로 등록되었습니다.');
  return false;
}


function deleteList(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}







function searchBook() {
  const searchBookname = document.getElementById('search-input').value;
    const tableBody = document.getElementById('book-list-tbody');
    const rows = tableBody.getElementsByTagName('tr');
  
    for (let row of rows) {
      const cell = row.getElementsByTagName('td');
      const bookname = cell[2].textContent;
  
      if (bookname.includes(searchBookname)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
};




