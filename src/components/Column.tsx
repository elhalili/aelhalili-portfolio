import Cell from './Cell';

const Column = (data: MyCustomTypes.ColumnEntry) => {
  return (
    <section className="column">
      <h2>{data.title}</h2>
      {data.cells.map((e, i) => {
        return (
          <Cell
            key={i}
            title={e.title}
            description={e.description}
            link={e.link}
          />
        );
      })}
    </section>
  );
};

export default Column;
