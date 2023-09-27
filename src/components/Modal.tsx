interface Props {
    handleActiveForm: () => void;
}

export const Modal = ({ handleActiveForm }:Props) => {
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
                className="block w-1/4 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <form>
                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
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
