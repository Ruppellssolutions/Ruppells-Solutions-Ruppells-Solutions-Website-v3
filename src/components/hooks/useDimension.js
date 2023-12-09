import { useState } from 'react'
import { useEffect } from 'react'


const useDimension = () => {
    const [dimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const resizeHandler = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    return dimension
}

export default useDimension