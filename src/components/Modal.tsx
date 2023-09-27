import {useForm} from 'react-hook-form'
import {toast} from 'sonner'
interface Props {
    handleActiveForm: () => void;
}

export const Modal = ({ handleActiveForm }:Props) => {

    const {handleSubmit} = useForm()

    const getSubmit = (data:any) => {
        console.log('hola')
        handleActiveForm()
        toast.success('Pedido creado con exito')
    }
    return (
        <div className="fixed top-0 w-screen h-screen backdrop-blur flex items-center justify-center">
            {/* <div classNameName="modal-box bg-white">
                <h3 classNameName="font-bold text-lg">Hello!</h3>
                <p classNameName="py-4">Press ESC key or click the button below to close</p>
                <div classNameName="modal-action">
                    <form method="dialog">
                        <button classNameName="btn" onClick={()=>handleActiveForm()}>Close</button>
                    </form>
                </div>
            </div> */}
            
            <div
                className="block w-2/5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(getSubmit)}>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Pedido</span>
                        </label>
                        <input type="text" placeholder="Escriba el pedido" className="input input-bordered w-" />
                    </div>

                    <div className="flex gap-2">
                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Fecha de inicio</span>
                            </label>
                            <input type="date" placeholder="Escriba el país" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Fecha de implementacion</span>
                            </label>
                            <input type="date" placeholder="" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    
                    <div className="flex gap-2">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Agente</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Seleccione el agente</option>
                                <option>kerciar</option>
                                <option>adriang</option>
                                <option>brianc</option>
                                <option>cristianb</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Segmento</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Seleccione el segmento</option>
                                <option>Star Wars</option>
                                <option>Harry Potter</option>
                                <option>Lord of the Rings</option>
                                <option>Planet of the Apes</option>
                                <option>Star Trek</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Categoría</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Seleccione la categoría</option>
                                <option>Categoría 1</option>
                                <option>Categoría 2</option>
                                <option>Categoría 3</option>
                                <option>Categoría 4</option>
                            </select>
                    </div>

                    <div className="flex gap-2">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">País</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Seleccione el país</option>
                                <option>Argentina</option>
                                <option>Brasil</option>
                                <option>Panamá</option>
                                <option>Uruguay</option>
                                <option>México</option>
                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Vía de solicitud</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Seleccione la via de solicitud</option>
                                <option>Whatsapp</option>
                                <option>Gmail</option>
                                <option>Invgate Arcos</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={() => handleActiveForm()}
                            className="block w-1/2 rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring" type="submit"
                            >Cancelar
                        </button>
                        <button
                            type="submit"
                            className="block w-1/2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Crear
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
