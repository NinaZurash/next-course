export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-24 m-3 shadow-md border border-gray-300 border-width-1 flex justify-center items-center">
      {children}
    </div>
  );
}
