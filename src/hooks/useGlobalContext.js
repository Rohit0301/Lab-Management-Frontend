import { useContext } from "react"
import { globalContext } from "../context"

export const useGlobalContext = () => {
    return useContext(globalContext)
}