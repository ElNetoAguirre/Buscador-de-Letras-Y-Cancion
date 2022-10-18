import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {

  const {alerta, letra, cargando} = useLetras()

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Formulario/>

      <main>
        {alerta ? <Alerta>{alerta}</Alerta> :
          letra ? <Letra>{letra}</Letra> :
          cargando ? <Spinner/> :
          <p className="text-center">Busca letras de tus Artistas favoritos</p>
        }
      </main>
    </>
  )
}

export default AppLetras