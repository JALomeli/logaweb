import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function BtnLogin() {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (status === "loading") {
    return <div>Cargando...</div>;
  }

  if (session) {
    return (
      <div className="flex items-center relative">
        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
          <img src={session.user.image} alt={session.user.name} className="rounded-full h-12 w-12" />
          <div className="ml-2">
            <div className="text-center">

              {session.user.email}
            </div>
          </div>
        </div>

        {dropdownOpen && (
          <div className="absolute z-10 top-10 right-0 bg-white border rounded shadow-md p-2">
            <button
              className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
              onClick={() => signOut()}
            >
              Salir de la Sesión
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button className="border border-black rounded px-10 py-1 text-black hover:bg-red-500 hover:border-black-500 m-1 flex items-center justify-center no-underline md:px-3 md:py-1 " onClick={() => signIn()}>
      Iniciar Sesión
    </button>
  );
}
