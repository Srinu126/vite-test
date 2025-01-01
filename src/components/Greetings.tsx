export const Greetings = ({ name }: { name?: string }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello, {name || "World!"}</h1>
    </div>
  );
};
