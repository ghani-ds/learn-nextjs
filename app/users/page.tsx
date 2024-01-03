interface User {
  id: number;
  name: string;
}
const users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-white">Users</h1>
      <p className="text-lg font-semibold text-gray-400 my-2 mx-auto">
        {new Date().toLocaleTimeString()}
      </p>
      <ul className="list-decimal pl- bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="border-b border-gray-200 p-2 mx-2 hover:bg-gray-100 hover:text-black  text-gray-600 cursor-pointer"
            >
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default users;
