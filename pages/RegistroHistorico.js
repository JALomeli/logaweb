import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import Popup from "@/components/Popup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';




//peticion a la api
//export async function getServerSideProps(){
//    const res = await axios.get('http://localhost:3000/api/bdVHistorico');
//    const data = await res.data;
//    return{
//        props:{
//            data
//        }
//    }
//}

export default function RegistroHistorico() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState("");
  const [kiloReposteria, setKiloReposteria] = useState("");
  const [mediokiloReposteria, setMediokiloReposteria] = useState("");
  const [cuartokiloReposteria, setCuartokiloReposteria] = useState("");
  const [apellido, setApellido] = useState("");
  const [diaPedido, setDiaPedido] = useState("");
  const [diaEntrega, setDiaEntrega] = useState("");
  const [ciudadEntrega, setCiudadEntrega] = useState("");
  const [open, setOpen] = useState(false);
  const [ventas, setVentas] = useState({});
const { data: session } = useSession();
  const router = useRouter();
  const isAdmin = session && session.user.roles.includes('admin');
  const isUser = session && session.user.roles.includes('user');
  useEffect(() => {
    console.log("isAdmin:", isAdmin);
    console.log("session:", session);
  
    if (router.pathname === '/RegistroHistorico') {
      if (session === null || isUser ) {
        console.log("Redirigiendo a /");
        router.push('/');
      }
    }
    getData();
  }, [session, router]);

  const getData = async () => {
    try {
      const res = await axios.get("/api/bdVHistorico");
      const fetchedData = await res.data;
      setData(fetchedData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };
  const sendData = async () => {
    setLoading(true);
    console.log("sendData");
    console.log(nombre,kiloReposteria,mediokiloReposteria,cuartokiloReposteria ,apellido, diaPedido, diaEntrega, ciudadEntrega);
    if (
      nombre === "" ||
      apellido === "" ||
      kiloReposteria === "" ||
      mediokiloReposteria === "" ||
      cuartokiloReposteria === "" ||
      diaPedido === "" ||
      diaEntrega === "" ||
      ciudadEntrega === ""
    ) {
      toast.error("Llena todos los campos");
      setLoading(false);
      return;
    }

    try {
      const resultado = await axios.post("/api/bdVHistorico", {
        nombre: nombre,
        apellido: apellido,
        kiloReposteria: kiloReposteria,
        mediokiloReposteria: mediokiloReposteria,
        cuartokiloReposteria: cuartokiloReposteria,
        diaPedido: diaPedido,
        diaEntrega: diaEntrega,
        ciudadEntrega: ciudadEntrega,
      });
      toast.success("Datos enviados");
      console.log(resultado);
      getData();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  const eliminarData = async (id) => {
    console.log("eliminarData", id);
  
    // Asegúrate de que `id` esté definido antes de hacer la llamada a la API
    if (!id) {
      console.error("ID está indefinido");
      toast.error("Error al eliminar los datos");
      return;
    }
  
    try {
      // Imprime el valor de id para asegurarte de que sea correcto
      console.log("ID a eliminar:", id);
  
      const resultado = await axios.delete(`/api/bdVHistorico?id=${id}`);
      console.log(resultado.data); // Asegúrate de que la respuesta sea manejada correctamente
      toast.success("Datos eliminados con éxito");
      getData();
    } catch (error) {
      console.error(error);
      toast.error("Carnal pasó algo");
    }
  };
  
  return (
    <>
      <Toaster />
      <Header />

      <Popup open={open} setOpen={setOpen} ventas={ventas} getData={getData} />

      <div className="flex flex-col justify-center items-center p-5 bg-pink-100">
        {/* Formulario */}
        <h1 className="flex justify-center text-center text-3xl italic text-black mt-2 p-1 font-bold ">
          Registros Historicos 2020-2024
        </h1>
        <h1 className="flex justify-center  text-center text-black mt-2 p-3 font-bold">
          Por favor inserta los datos que deseas guardar en la base de datos
        </h1>
        <div className="flex justify-center items-center flex-col border border-black p-4 rounded-lg bg-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center  ">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="input-field mx-auto flex justify-center items-center text-center border border-black border-1"
              onChange={(e) => setNombre(e.target.value)}
            />
            <label className="block text-sm font-semibold text-gray-600 flex justify-center ">
              Apellido
            </label>
            <input
              type="text"
              placeholder="Apellido"
              className="input-field mx-auto flex justify-center text-center border border-black border-1"
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center  ">
              Kilogramos Vendidos 
            </label>
            <input
              type="number"
              placeholder="Kilo (pz)"
              className="input-field mx-auto flex justify-center items-center text-center border border-black border-1"
              onChange={(e) => setKiloReposteria(e.target.value)}
            />
            <label className="block text-sm font-semibold text-gray-600 flex justify-center ">
            Medio Kilo Vendidos 
            </label>
            <input
              type="number"
              placeholder="Medio kilo (pz)"
              className="input-field mx-auto flex justify-center text-center border border-black border-1"
              onChange={(e) => setMediokiloReposteria(e.target.value)}
            />

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center  ">
            Cuarto Kilo Vendidos
            </label>
            <input
              type="number"
              placeholder="Cuarto kilo (pz)"
              className="input-field mx-auto flex justify-center items-center text-center border border-black border-1"
              onChange={(e) => setCuartokiloReposteria(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center">
              Dia del pedido
            </label>
            <input
              type="date"
              className="input-field mx-auto flex justify-center text-center border border-black border-1 mr-10"
              onChange={(e) => setDiaPedido(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center">
              Dia de entrega
            </label>
            <input
              type="date"
              className="input-field mx-auto flex justify-center text-center border border-black border-1 mr-10"
              onChange={(e) => setDiaEntrega(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <label className="block text-sm font-semibold text-gray-600 flex justify-center p-2 mr-5">
              Ciudad de entrega
            </label>
            <select
              id="ciudadEntrega"
              name="ciudadEntrega"
              className="input-field mx-auto"
              onChange={(e) => setCiudadEntrega(e.target.value)}
            >
              <option value="" disabled selected>
                Selecciona la ciudad
              </option>
              <option value="chihuahua">Chihuahua</option>
              <option value="delicias">Delicias</option>
              <option value="juarez">Juarez</option>
              <option value="local">Local</option>
            </select>
          </div>
        </div>

        {loading ? (
          <button
            className="bg-red-500 text-white py-2 px-4 mt-4 rounded-md border border-black"
            disabled
          >
            Detener
          </button>
        ) : (
          <button
            className="bg-green-500 text-white py-2 px-4 mt-4 rounded-md border border-black hover:bg-green-700 transition duration-300"
            onClick={sendData}
          >
            Iniciar
          </button>
        )}
      </div>

      <main className="h-screen bg-white p-4">
        <h1 className="text-center text-3xl font-bold text-black mt-2 p-1 bg-gray-700 text-white"> Lista de Ventas Historicas Reposteria</h1>
        {data.map((ventas, i) => (
          <div
            className="flex flex-col items-center justify-center border border-black border-2 py-2 md:flex-row bg-gray-200"
            key={i}
          >
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4 border-2 p-2  ">
              Nombre: {ventas.nombre}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2">
              Apellido: {ventas.apellido}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2 ">
              Kilogramo: {ventas.kiloReposteria}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2 ">
              Medio Kilogramo: {ventas.mediokiloReposteria}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2 ">
              Cuatro kilogramo: {ventas.cuartokiloReposteria}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2">
              Dia del pedido: {ventas.diaPedido}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2">
              Dia de la Entrega: {ventas.diaEntrega}
            </div>
            <div className="text-black font-bold mb-2 md:mb-0 mr-0 md:mr-4  border-2 p-2 ">
              Ciudad de Entrega: {ventas.ciudadEntrega}
            </div>

            {/* Botones para eliminar y editar */}
            <div className="flex mt-2 md:mt-0">
              <button
                className="bg-red-500 text-white font-bold px-2 py-1 hover:bg-red-800 transition duration-300 mr-2 border border-black"
                onClick={() => {
                  console.log(ventas); // Registrar el objeto ventas
                  eliminarData(ventas._id);
                }}
              >
                Eliminar
              </button>

              <button
                className="bg-blue-500 text-white font-bold px-2 py-1 hover:bg-blue-800 transition duration-300 border border-black mr-2 ml-2"
                onClick={() => (setVentas(ventas), setOpen(true))}
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
