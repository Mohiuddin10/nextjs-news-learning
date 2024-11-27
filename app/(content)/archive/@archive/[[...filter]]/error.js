"use client"

export default function FilterError ({error}) {
    return <div id="error">
        <h1>Error found !</h1>
        <p>{error.message} !</p>
    </div>
}