export default function Card({title, body}) {
  return (
    <>
      <div className="card w-96 bg-black shadow-xl m-5">
        <div className="card-body">
          <h2 className="card-title justify-center">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
}