export default function Button({text, evento, clase=""}){
  return (
    <>
      <button
        className={`px-6 py-1 rounded-full border-4 border-white hover:bg-black block ${clase}`}
        onClick={evento}
      >
        <p className="text-white md:text-lg">{text}</p>
      </button>
    </>
  );
}