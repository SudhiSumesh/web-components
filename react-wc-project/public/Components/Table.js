export class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const headers = this.dataset.headers
      .split(",")
      .map((header) => header.trim());
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="Components/Table.css">
    <table>
<thead>
<tr>
${headers
  ?.map(
    (header) => `
    <th>${header}</th>`
  )
  .join("")}

</tr>

</thead>
<tbody><tbody>
    </table>
    `;
  }
  /**
   * @param data {string[][]}
   */
  set data(data) {
    console.log(data);
    const tableBody = this.shadowRoot.querySelector("tbody");
    const rows = data.map((rowData) => {
      const row = document.createElement("tr");
      const cells = rowData?.map((cellData) => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        return cell;
      });
      row.append(...cells);

      return row;
    });
    console.log(rows);
    tableBody.innerHTML = "";
    tableBody.append(...rows);
  }
}
