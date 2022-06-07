import { useState } from "react"
import {useRecoilState} from "recoil";

export const Post = (url, body) => {
    const [data, setData] = useRecoilState('apiState')
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    fetch(url, options)
    .then(response => {response.json()})
    .then(data => setData({status: "ok", body: data}))
}

export const Get = (url) => {
    const [data, setData] = useRecoilState('apiState')
    fetch(url).then(response => {response.json()})
    .then(data => setData({status: "ok", body: data}))
}