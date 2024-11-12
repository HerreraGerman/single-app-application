import { useState, useEffect } from "react";

export const useFetchEpics = (projectId) => {

    const getEpics = async (projectId) => {

        const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}/epics`

        const token = localStorage.getItem("authToken");

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
    }

    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        if (projectId) {
            getEpics(projectId)
            .then(project => {
                setState({
                    data: project,
                    loading: false
                })
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false
                });
            });
        } else {
            setState({
                data: [],
                loading: false
            })
        };
    }, [projectId])

    return state;
}

export default useFetchEpics;