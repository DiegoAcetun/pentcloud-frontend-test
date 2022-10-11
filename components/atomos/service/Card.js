export default function Card({icono, titulo}){
  return (
    <>
      <div className="card w-36 bg-base-100 shadow-xl m-5">
        {/* <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure> */}
        <div className="text-9xl text-dark flex justify-center">
          {icono}
        </div>
        <div className="card-body p-0">
          <h2 className="card-title justify-center">{titulo}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        </div>
      </div>
    </>
  );
}