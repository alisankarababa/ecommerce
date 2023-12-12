export default function Circle({size, bgColor }) {

    bgColor = bgColor ? bgColor : "bg-black"

    const eSize = Object.freeze({

        sm: "16px",
        md: "30px",
    })

    size = size ? size : eSize.sm;

    return <div className={`${bgColor} rounded-full`} style={{width: eSize[size], height: eSize[size]}}></div>
}