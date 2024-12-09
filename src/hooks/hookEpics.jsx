import { useState, useEffect } from "react";

export const useFetchEpics = (projectId) => {

    const getEpics = async (projectId) => {

        const url = `http://localhost:3000/api/projects/${projectId}/epics`

        const token = localStorage.getItem("authToken");

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const epics = await response.json();

        return epics;
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
            .catch((error) => {
                console.log(error)
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