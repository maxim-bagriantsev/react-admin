import {useStore} from "react-admin";

export const useDebug = () => {
    const [debug, setDebug] = useStore('debug', false);

    return {debug, setDebug}
}