import { useState } from "react"
import {useRecoilState} from "recoil";

export const post = (url, body) => {
    const [data, setData] = useRecoilState('apiState')
    options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    fetch(url, options)
    .then(response => {response.json()})
    .then(data => setData({status: "ok", body: data}))
}

export const get = (url) => {
    fetch(url).then(response => {response.json()})
    .then(data => setData({status: "ok", body: data}))
}