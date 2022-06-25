import Card from "./Card";

interface ITable {
  header: Array<string>;
  body: Array<any>;
}

const handleEdit = (e: any) => {
  e.preventDefault();
  console.log(e.target);
};

const handleDelete = (e: any) => {
  e.preventDefault();
  console.log(e.target);
};

const mountRow = (data: Array<string>) => {
  const row = [data];

  const columnRow = row.map((rowVal: string[], key: number) => {
    return Object.values(rowVal);
  });

  console.log(columnRow);
  const resultRow = columnRow.map((col: string[]) => {
    col.shift();
    const columns = col.map((c) => {
      return <td>{c}</td>;
    });
    return (
      <>
        {columns}
        <td>
          <button onClick={handleEdit} type="button">
            Editar
          </button>
          <button onClick={handleDelete} type="button">
            Deletar
          </button>
        </td>
      </>
    );
  });
  return resultRow;
};

const Table: React.FC<ITable> = ({ header, body }) => {
  const bodyFIelds = (bodys: Array<any>) => {
    if (bodys[0]) {
      const field = body[0].map((field: any) => {
        return <tr>{mountRow(field)}</tr>;
      });
      return field;
    }
  };

  return (
    <Card title="Perfil">
      <div className="table">
        <table>
          <thead>
            {header.map((head, key) => {
              return <th key={key}>{head}</th>;
            })}
          </thead>
          <tbody>{bodyFIelds(body)}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
