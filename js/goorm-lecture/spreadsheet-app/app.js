const spreadSheetContainer = document.querySelector("#spreadsheet-container");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

// 대문자 A-Z 배열, 65 = A
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

// 셀 하나당 객체로 만들기 위해서 클래스 생성
class Cell {
  constructor(isHeader, disabled, data, row, column, active = false) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
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
      // 첫번째 칼럼은 row 표시
      if (j == 0) cellData = i;
      if (cellData <= 0) cellData = "";
      if (i == 0) cellData = alphabet[j - 1];
      // celldata = 'undefined'일 때
      if (!cellData) cellData = "";

      const cell = new Cell(false, false, cellData, i, j, false);
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

  return cellElement;
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
