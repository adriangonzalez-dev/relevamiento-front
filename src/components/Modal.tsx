import {SubmitHandler, useForm} from 'react-hook-form'
import {toast} from 'sonner'
import { ErrorMessage } from './ErrorMessage';
import { createData } from '../services/dataServices';
import { useData } from '../hooks/useData';
import { useMetadata } from '../hooks/useMetadata';
import { useState } from 'react';
interface Props {
    handleActiveForm: () => void;
}
export interface CreateDataDto {
    request: string,
    request_date: Date | number,
    country: number,
    implementation_date: Date | number,
    agent:number,
    segment:number,
    type:number,
    via:number
}

const getUNIXtimestamp = (fecha:Date | number) => {
    return new Date(fecha).getTime() / 1000
}

export const Modal = ({ handleActiveForm }:Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const {updatedData} = useData()
    const {segmentos, isLoading, via} = useMetadata()
    
    const {handleSubmit, register, formState:{errors}} = useForm<CreateDataDto>()

    const getSubmit:SubmitHandler<CreateDataDto> = async (data:CreateDataDto) => {
        setLoading(true)
        const dia = 86400
        const dataToSend = {
            request:data.request,
            country:+data.country,
            agent:+data.agent,
            segment:+data.segment,
            type:+data.type,
            via:+data.via,
            request_date: getUNIXtimestamp(data.request_date) + dia,
            implementation_date:getUNIXtimestamp(data.implementation_date) + dia
        }
        try {
            const newData = await createData(dataToSend)
            updatedData(newData)
            handleActiveForm()
            toast.success('Pedido creado con exito')
        } catch (error) {
            toast.error('Error al crear el pedido')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed top-0 w-screen h-screen backdrop-blur flex items-center justify-center">

            <div
                className="block w-2/5 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(getSubmit)}>
                    {/* Campo Pedido */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text">Pedido</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Escriba el pedido" 
                        className="input input-bordered w-full" 
                        {...register('request', {
                            required: {
                                value: true,
                                message: 'Este campo es requerido'
                            }
                        })}/>
                        {
                            errors.request && <ErrorMessage message={String(errors.request?.message)}/>
                        }
                    </div>

                    <div className="flex gap-2">
                        {/* Campo request_date */}
                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Fecha de inicio</span>
                            </label>
                            <input 
                            type="date" 
                            placeholder="Escriba el país" 
                            className="input input-bordered w-full max-w-xs" 
                            {...register('request_date', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}/>
                            {
                                errors.request_date && <ErrorMessage message={String(errors.request_date?.message)}/>
                            }
                        </div>
                        
                        {/* Campo date_implementation */}
                        <div className="form-control w-full max-w-xs mb-2">
                            <label className="label">
                                <span className="label-text">Fecha de implementacion</span>
                            </label>
                            <input 
                            type="date" 
                            placeholder="" 
                            className="input input-bordered w-full max-w-xs" 
                            {...register('implementation_date', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}/>
                            {
                                errors.implementation_date && <ErrorMessage message={String(errors.implementation_date?.message)}/>
                            }
                        </div>
                    </div>
                    
                    {/* Campo agente */}
                    <div className="flex gap-2">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Agente</span>
                            </label>
                            <select 
                            className="select select-bordered"
                            {...register('agent', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}>
                                <option selected disabled>Seleccione el agente</option>
                                <option value={1059}>kerciar</option>
                                <option value={1740}>adriang</option>
                                <option value={161}>brianc</option>
                                <option value={423}>cristianb</option>
                            </select>
                            {
                                errors.agent && <ErrorMessage message={String(errors.agent?.message)}/>
                            }
                        </div>

                        {/* Campo segment */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Segmento</span>
                            </label>
                            <select 
                            className="select select-bordered"
                            {...register('segment', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}>
                                <option selected disabled>Seleccione el segmento</option>
                                {
                                    isLoading ?
                                    <option value="" disabled>Cargando...</option>
                                    :
                                    <>
                                        <option value={segmentos.find(item=>item.name == 'Mostrador')?.id}>Mostrador</option>
                                        <option value={segmentos.find(item=>item.name == 'MCCafe')?.id}>McCafé</option>
                                        <option value={segmentos.find(item=>item.name == 'CDP')?.id}>CDP</option>
                                        <option value={segmentos.find(item=>item.name == 'Automac')?.id}>Automac</option>
                                        <option value={segmentos.find(item=>item.name == 'Crewroom')?.id}>Crewroom</option>
                                        <option value={segmentos.find(item=>item.name == 'Varios')?.id}>Varios</option>
                                    </>
                                }

                            </select>
                            {
                                errors.segment && <ErrorMessage message={String(errors.segment?.message)}/>
                            }
                        </div>
                    </div>

                    {/* Campo type */}
                    <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Categoría</span>
                            </label>
                            <select 
                            className="select select-bordered"
                            {...register('type', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}>
                                <option selected disabled>Seleccione la categoría</option>
                                <option value={366}>Nuevo contenido contingencia (JPEG)</option>
                                <option value={185}>Nueva/Cambio de pantalla</option>
                                <option value={130}>Nuevo/Cambio de contenido - Integración de precios</option>
                                <option value={140}>Novo registro de filial</option>
                                <option value={142}>Novo conteúdo - integração de preços</option>
                                <option value={557}>Alta Nueva Sucursal</option>
                                <option value={138}>Nuevo Contenido - Integracion de precios</option>
                                <option value={171}>Registro de nova tela</option>
                            </select>
                            {
                                errors.type && <ErrorMessage message={String(errors.type?.message)}/>
                            }
                    </div>

                    <div className="flex gap-2">
                        {/* Campo country */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">País</span>
                            </label>
                            <select 
                            className="select select-bordered"
                            {...register('country', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}>
                                <option selected disabled>Seleccione el país</option>
                                <option value={30}>Argentina</option>
                                <option value={47}>Brasil</option>
                                <option value={57}>Panamá</option>
                                <option value={59}>Uruguay</option>
                                <option value={53}>México</option>
                                <option value={61}>Colombia</option>
                            </select>
                            {
                                errors.country && <ErrorMessage message={String(errors.country?.message)}/>
                            }
                        </div>

                        {/* Campo via */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Vía de solicitud</span>
                            </label>
                            <select 
                            className="select select-bordered"
                            {...register('via', {
                                required: {
                                    value: true,
                                    message: 'Este campo es requerido'
                                }
                            })}>
                                <option selected disabled>Seleccione la via de solicitud</option>
                                <option value={via.find(item=>item.name == 'Whatsapp')?.id}>Whatsapp</option>
                                <option value={via.find(item=>item.name == 'Email')?.id}>Gmail</option>
                                <option value={via.find(item=>item.name == 'Invgate Arcos')?.id}>Invgate Arcos</option>
                            </select>
                            {
                                errors.via && <ErrorMessage message={String(errors.via?.message)}/>
                            }
                        </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <button
                            onClick={() => handleActiveForm()}
                            className="block w-1/2 rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring" type="submit"
                            disabled={loading}
                            >Cancelar
                        </button>
                        <button
                            type="submit"
                            className="block w-1/2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            disabled={loading}
                            >
                            {loading ? 'Creando...' : 'Crear'}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
