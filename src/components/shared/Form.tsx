interface IForm {
  children: any;
  closeModal?: () => void;
  handleSubmit: any;
  formType?: string;
}

const Form: React.FC<IForm> = ({
  children,
  closeModal,
  handleSubmit,
  formType,
}) => {
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} encType={formType}>
          {children}
        </form>
        <div className="form-footer">
          <div className="form-footer-buttons">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
