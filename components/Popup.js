import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import axios from "axios";

export default function Popup({ open, setOpen, ventas, getData }) {
  const [nombre, setNombre] = useState(ventas.nombre);
  const [apellido, setApellido] = useState(ventas.apellido);
  const [diaPedido, setDiaPedido] = useState(ventas.diaPedido);
  const [diaEntrega, setDiaEntrega] = useState(ventas.diaEntrega);
  const [ciudadEntrega, setCiudadEntrega] = useState(ventas.ciudadEntrega);

  console.log("ventas", ventas);

  useEffect(() => {
    setNombre(ventas.nombre);
    setApellido(ventas.apellido);
    setDiaPedido(ventas.diaPedido);
    setDiaEntrega(ventas.diaEntrega);
    setCiudadEntrega(ventas.ciudadEntrega);
  }, [ventas]);


const cancelButtonRef = useRef(null);

const sendData = async () => {
  setLoading(true);
  console.log("sendData");
  console.log(nombre, apellido, diaPedido,  diaEntrega,  ciudadEntrega);
  if (
    nombre === "" ||
    apellido === "" ||
    diaPedido === "" ||
    diaEntrega === ""||
    ciudadEntrega === ""

  ) {
    toast.error("Llena todos los campos");
    return;
  }
  try {
    const resultado = await axios.put("/api/bdVHistorico", {
      nombre: nombre,
      apellido: apellido,
      diaPedido: diaPedido,
      diaEntrega: diaEntrega,
    ciudadEntrega: ciudadEntrega,
      id: ventas.id,
    });
    toast.success("ventas editado");
    getData();
    setOpen(false);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Edita la venta
                      </Dialog.Title>
                      <div className="mt-2">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  

                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto pointer-events-none"
                    onClick={() => sendData()}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

