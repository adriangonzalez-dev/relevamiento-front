import { useMetadata } from "../hooks/useMetadata"
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  const { agentes, isLoading } = useMetadata()
  const inactiveLink = 'block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700';
  const activeLink = 'block rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700';
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white w-1/6">
      <div className="px-4 py-6">
        <span
          className="grid h-10 w-34 place-content-center rounded-lg bg-gray-100 text-xl font-bold text-gray-600"
        >
          Equipo MCD!
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
              General
            </NavLink>
          </li>
          {/* PAISES */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Paises </span>

                <span
                  className="shrink-0 transition duration-300 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <NavLink
                    to={`/paises/30`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    Argentina
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/paises/47`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    Brasil
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/paises/53`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    México
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/paises/57`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    Panamá
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/paises/589`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    Puerto Rico
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/paises/59`}
                    className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                  >
                    Uruguay
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          {/* AGENTES */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Agente </span>

                <span
                  className="shrink-0 transition duration-300 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                {
                  isLoading ? (
                    <p>cargando...</p>
                  ) : (
                    agentes?.map((agente) => (
                      <li key={agente.id}>
                        <NavLink
                          to={`/agentes/${agente.id}`}
                          className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
                        >
                          {agente.name}
                        </NavLink>
                      </li>
                    ))
                  )
                }
              </ul>
            </details>
          </li>
          {/* RECURSOS */}
          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium"> Recursos </span>

                <span
                  className="shrink-0 transition duration-300 group-open:-rotate-180"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">

                <li>
                  <a
                    href='https://mcd.dexmanager.com/DexFrontEnd/#!/network'
                    target="_blank"
                    className={inactiveLink}
                  >
                    Dex Manager
                  </a>
                </li>
                <li>
                  <a
                    href='https://rmmcd.dexmanager.com/MagicInfo/login'
                    target="_blank"
                    className={inactiveLink}
                  >
                    Magic Info
                  </a>
                </li>
                <li>
                  <a
                    href='http://rm.dexmanager.com:7001/MagicInfo/login.htm?cmd=INIT'
                    target="_blank"
                    className={inactiveLink}
                  >
                    Magic Info SIA
                  </a>
                </li>
                <li>
                  <a
                    href='https://siaint.cloud.invgate.net/incident/list/index/default_filter/1#list'
                    target="_blank"
                    className={inactiveLink}
                  >
                    Invgate SIA
                  </a>
                </li>
                <li>
                  <a
                    href='https://arcosdorados.cloud.invgate.net/incident/list/index/default_filter/7'
                    target="_blank"
                    className={inactiveLink}
                  >
                    Invgate ARCOS
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}
