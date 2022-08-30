import Card from "./Card";

interface ITable {
  header: Array<string>;
  body: Array<any>;
  showColumns: Array<any>;
  setAction: (action: boolean) => void;
  setProfile: (profile: any) => void;
}

const handleEdit = (
  field: any,
  setAction: (action: boolean) => void,
  setProfile: (profile: any) => void
) => {
  setProfile(field);
  setAction(true);
};

const handleDelete = (
  field: any,
  setAction: (action: boolean) => void,
  setProfile: (profile: any) => void
) => {
  const data = { ...field, action: "delete" };

  setProfile(data);
  setAction(true);
};

const mountRow = (
  data: any,
  datas: any,
  setAction: (action: boolean) => void,
  setProfile: (profile: any) => void
) => {
  const row = [data];

  const columnRow = row.map((rowVal: string[]) => {
    return Object.values(rowVal);
  });

  const resultRow = columnRow.map((col: string[]) => {
    const columns = col.map((c) => {
      return <td>{c}</td>;
    });
    return (
      <>
        {columns}
        <td>
          <button
            onClick={() => handleEdit(datas, setAction, setProfile)}
            type="button"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(datas, setAction, setProfile)}
            type="button"
          >
            Deletar
          </button>
        </td>
      </>
    );
  });
  return resultRow;
};

const Table: React.FC<ITable> = ({
  header,
  body,
  showColumns,
  setAction,
  setProfile,
}) => {
  const bodyFields = (bodys: Array<any>) => {
    if (bodys[0]) {
      const field = body[0].map((field: any, key: number) => {
        const filtered = Object.keys(field)
          .filter((key) => showColumns.includes(key))
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: field[key],
            };
          }, {});

        return <tr>{mountRow(filtered, field, setAction, setProfile)}</tr>;
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
          <tbody>{bodyFields(body)}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
