import { useState, useEffect } from "react";

export const useFetchEpicById = (epicId) => {

    const getEpicById = async (epicId) => {

        const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}`

        const token = localStorage.getItem("authToken");

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    auth: token,
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const { data } = await response.json();

            return data;
        } catch (error) {
            console.error("Error fetching epics:", error);
            throw error;
        }
    }

    const [state, setState] = useState({
        data: null,
        loading: true
    })
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
    }, [])

    return state;
}

export default useFetchEpicById;