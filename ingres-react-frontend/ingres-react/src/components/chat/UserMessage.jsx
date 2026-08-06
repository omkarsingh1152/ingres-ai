export default function UserMessage({ message }) {
  return (
    <div className="flex justify-end mb-6">
      <div className="max-w-[75%] bg-blue-600 text-white px-5 py-3 rounded-3xl rounded-br-md shadow-lg">
        <p className="text-sm leading-7">{message}</p>
      </div>
    </div>
  );
}