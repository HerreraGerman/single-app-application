import { useState, useEffect } from "react";

export const useFetchEpicById = (epicId) => {

    const getEpicById = async (epicId) => {

        const url = `http://localhost:3000/api/epics/${epicId}`

        const token = localStorage.getItem("authToken");

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const epics = await response.json();

        return epics;
    }

    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        getEpicById(epicId)
            .then(epic => {
                setState({
                    data: epic,
                    loading: false
                })
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false
                })
            })
    }, [epicId])

    return state;
}

export default useFetchEpicById;