import { useState, useEffect } from "react"

export const useFetchProjects = () => {

    const getProjects = async () => {
        
        const url = 'https://lamansysfaketaskmanagerapi.onrender.com/api/projects'

        const token = localStorage.getItem("authToken");

        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                auth: token,
            }
        });

        const { data } = await resp.json();

        return data;
    }


    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getProjects()
            .then(projects => {
                setState({
                    data: projects,
                    loading: false,
                })
            })
            .catch(() => {
                setState({
                    data: [],
                    loading: false
                })
            }
            )
    }, [])

    return state;
}