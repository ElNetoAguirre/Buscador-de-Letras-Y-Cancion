import { useState, createContext } from "react"
import axios from "axios"

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {

  const [alerta, setAlerta] = useState("")
  const [letra, setLetra] = useState("")
  const [cargando, setCargando] = useState(false)

  const busquedaLetra = async (busqueda) => {
    setCargando(true)
    try {
      // Por el momento no funciona Lyrics
      const {artista, cancion} = busqueda
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const {data} = await axios(url)
      setLetra(data.lyrics)
      setAlerta("")

      // Otra opción la cual requiere loguearse para obtener los datos de los headers...
    //   const options = {
    //     method: "GET",
    //     url: `https://lyrics-plus.p.rapidapi.com/lyrics/${busqueda.cancion}/${busqueda.artista}`,
    //     headers: {
    //       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    //       "X-RapidAPI-Host": "lyrics-plus.p.rapidapi.com"
    //     }
    //   };
    //   const {data} = await axios.request(options).then(function (response) {
    //     setLetra(response.data.lyrics)
    //     setAlerta("")
    //     console.log(response.data.lyrics);
    //   })
    //   console.log(url)
    } catch (error) {
      setAlerta("Canción no encontrada")
      setLetra("")
      console.error(error);
    }
    setCargando(false)
  }
  
  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando
      }}
    >
      {children}
    </LetrasContext.Provider>
  )
}

export {
  LetrasProvider
}

export default LetrasContext