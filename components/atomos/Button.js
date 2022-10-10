export default function Button({text}){
  return (
    <>
      <button className="px-6 py-1 rounded-full border-4 border-white hover:bg-black">
        <p className="text-white md:text-lg">{text}</p>
      </button>
    </>
  );
}