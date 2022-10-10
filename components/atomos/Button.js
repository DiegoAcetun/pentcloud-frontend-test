export default function Button({text, evento}){
  return (
    <>
      <button className="px-6 py-1 rounded-full border-4 border-white hover:bg-black" onClick={evento}>
        <p className="text-white md:text-lg">{text}</p>
      </button>
    </>
  );
}