interface Props {
    className: string,
    migrationData: number | undefined,
    displayData: number | undefined,
    displayPending: number | undefined,
    migrationPending: number | undefined
}

export const RestData = ({ className, migrationData, displayData, displayPending, migrationPending }: Props) => {
    return (
        <section className={`${className} flex flex-col justify-start gap-2 bg-white p-2 rounded-lg border-2 border-gray-150`}>
            <article
                className="flex flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-4"
            >
                <p className="w-full text-xs text-gray-500 w-full">Cambios/Nuevas pantallas</p>
                <div className="w-full flex justify-between items-center">
                    <p className="text-2xl font-medium text-gray-900">{displayData}</p>
                    <div className="inline-flex gap-2 rounded bg-blue-100 p-1 text-blue-600">
                        <span className="text-xs font-medium">{`${displayPending} ${(displayPending && displayPending > 1) ? 'Pendientes' : 'Pendiente'}`}</span>
                    </div>
                </div>

            </article>
            <article
                className="flex flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-4"
            >
                <p className="w-full text-xs text-gray-500 w-full">Nuevos Restaurantes</p>
                <div className="w-full flex justify-between items-center">
                    <p className="text-2xl font-medium text-gray-900">{migrationData}</p>
                    <div className="inline-flex gap-2 rounded bg-blue-100 p-1 text-blue-600">
                        <span className="text-xs font-medium">{`${migrationPending} ${(migrationPending && migrationPending > 1) ? 'Pendientes' : 'Pendiente'}`}</span>
                    </div>
                </div>
            </article>
            <article
                className="flex flex-col items-end justify-between rounded-lg border border-gray-100 bg-white p-4"
            >
                <p className="w-full text-center text-xs text-gray-500 w-full">Total Restaurantes</p>
                <div className="w-full flex flex-col gap-2 justify-between items-center">
                    <p className="text-2xl font-medium text-gray-900">30</p>
                    <div className="inline-flex gap-2 rounded bg-yellow-100 p-1 text-yellow-600">
                        <a href="https://www.google.com" className='text-xs font-medium'>Distribución de contenidos</a>
                    </div>
                </div>
            </article>
        </section>
  )
}
