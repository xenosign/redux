export default function DoneList() {
  const list = [];
  return (
    <section>
      {list.length > 0 && <h1>완료된 목록</h1>}
      <ul>
        {list.map((el) => {
          return <li key={el.id}>{el.text}</li>;
        })}
      </ul>
    </section>
  );
}
