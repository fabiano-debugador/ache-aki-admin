interface ICard {
  title: string;
  children: any;
}

const Card: React.FC<ICard> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <label>{title}</label>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
