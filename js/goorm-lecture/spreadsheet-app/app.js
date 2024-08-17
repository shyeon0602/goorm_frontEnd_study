const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

// 대문자 A-Z 배열, 아스키코드 65 = A
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

// 셀 하나당 객체로 만들기 위해서 클래스 생성
class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

// 람다함수를 사용하면 호이스팅이 안됨
initSpreadsheet();

// 기본 데이터 생성
function initSpreadsheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      let isHeader = false;
      let disabled = false;

      // 첫번째 칼럼은 row 표시
      if (j == 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }
      if (cellData <= 0) cellData = "";
      if (i == 0) {
        cellData = alphabet[j - 1];
        isHeader = true;
        disabled = true;
      }
      // celldata = 'undefined'일 때
      if (!cellData) cellData = "";

      const rowName = i;
      const columnName = alphabet[j - 1];

      const cell = new Cell(
        isHeader,
        disabled,
        cellData,
        rowName,
        columnName,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  drawSheet();
  console.log(spreadsheet);
}

// cell input 생성
function createCellElement(cell) {
  const cellElement = document.createElement("input");
  cellElement.className = "cell";
  cellElement.id = "cell_" + cell.row + cell.column;
  cellElement.value = cell.data;
  cellElement.disabled = cell.disabled;

  if (cell.isHeader) cellElement.classList.add("header");

  // event handler 함수가 전달되기 위해서 익명함수 사용
  cellElement.addEventListener("click", () => handleCellClick(cell));

  return cellElement;
}

// cell row/column 위치 표시
// function handleCellClick(cell) {
//   const columnHeader = spreadsheet[0][cell.column];
//   const rowHeader = spreadsheet[cell.row][0];
//   const columnHeaderElement = getElementFromRowCol(
//     columnHeader.row,
//     columnHeader.column
//   );
//   const rowHeaderElement = getElementFromRowCol(
//     rowHeader.row,
//     rowHeader.column
//   );

//   console.log("Column Header:", columnHeader); // columnHeader 확인
//   console.log("Row Header:", rowHeader); // rowHeader 확인

//   columnHeaderElement.classList.add("active");
//   rowHeaderElement.classList.add("active");

//   console.log("clicked cell", columnHeaderElement, rowHeaderElement);
// }

function handleCellClick(cell) {
  // 알파벳으로 되어있는 값을 숫자로 변환
  const columnIndex = cell.column.charCodeAt(0) - 65 + 1;
  const columnHeader = spreadsheet[0][columnIndex];
  const rowHeader = spreadsheet[cell.row][0];

  if (!columnHeader || !rowHeader) {
    console.error(
      "Invalid cell.row or cell.column values:",
      cell.row,
      cell.column
    );
    return; // 잘못된 값이 있으면 함수 종료
  }

  const columnHeaderElement = getElementFromRowCol(
    columnHeader.row,
    columnHeader.column
  );
  const rowHeaderElement = getElementFromRowCol(
    rowHeader.row,
    rowHeader.column
  );

  columnHeaderElement.classList.add("active");
  rowHeaderElement.classList.add("active");

  console.log("clicked cell", columnHeaderElement, rowHeaderElement);
}

function getElementFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

// cell 렌더링
function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerElement = document.createElement("div");
    rowContainerElement.className = "cell-row";

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerElement.append(createCellElement(cell));
    }
    spreadSheetContainer.append(rowContainerElement);
  }
}
