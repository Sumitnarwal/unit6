
// enter rfc
import React, { useEffect } from 'react'

import axios from "axios"

export default function useSearch(query, pageNumber) {

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://openlibrary.org/search.json",
            params: { q: query, page: pageNumber }
        }).then(res => {
            console.log(res.data)
        })
    }, [query, pageNumber])
    return null
}
