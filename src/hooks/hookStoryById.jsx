import { useState, useEffect } from "react";

export const useFetchStoryById = (storiesId) => {

    const getStoryById = async (storiesId) => {

        const url = `https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${storiesId}`;

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
    };

    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(() => {
        getStoryById(storiesId)
            .then(story => {
                setState({
                    data: story,
                    loading: false
                });
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false
                });
            });
    }, [storiesId]);

    return state;
};

export default useFetchStoryById;