interface ITable {
  header: Array<string>;
  body: Array<any>;
}

const Table: React.FC<ITable> = ({ header, body }) => {
  const bodyFIelds = (bodys: Array<any>) => {
    if (bodys[0]) {
      const fields = bodys[0].map((arrayFields: any) => {
        return Object.values(arrayFields);
      });

      const field = fields.map((field: any) => {
        return (
          <tr>
            {field.map((r: any) => {
              return <td>{r}</td>;
            })}
          </tr>
        );
      });
      return field;
    }
  };

  return (
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
  );
};

export default Table;
