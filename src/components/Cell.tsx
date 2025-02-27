const Cell = (cell: MyCustomTypes.CellEntry) => {
  return (
    <div className="cell">
      <h3>
        <a href={cell.link} target="_blank">
          {cell.title}
          <span basic-icon="" data-icon="arrow-up-right"></span>
        </a>
      </h3>
      <p>{cell.description}</p>
    </div>
  );
};

export default Cell;
