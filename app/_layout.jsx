/* eslint-disable import/no-duplicates */
import { Slot } from "expo-router";
import Header from "../src/components/Header";
import { usePathname } from "expo-router";

export default function Layout() {

    const path = usePathname();

    const getPathName = {
        "/":"INICIO",
        "/Usuario": "USUARIO",
        "/Empleado":"EMPLEADO"
    }

    return(
        <>
            <Header path={getPathName[path]} />
            <Slot/>
        </>
    )
}