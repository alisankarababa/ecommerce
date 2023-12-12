export function Card({children, ...rest}) {

    return (
        <div {...rest}>
            {children}
        </div>
    );
}

function Heading({children, headingLevel, ...rest}) {

    const Title = `h${headingLevel}`

    return <Title {...rest}>{children}</Title>
}


export function CardTitle({children, titleLevel, ...rest}) {

    return <Heading headingLevel={titleLevel} {...rest}>{children}</Heading>
}

export function CardSubTitle({children, titleLevel, ...rest}) {

    return <Heading headingLevel={titleLevel} {...rest}>{children}</Heading>
}

export function Price({children, ...rest}) {
    
    return <span {...rest}>{children}</span>
}

export function CardImg({urlImg, altImg, ...rest}) {

    return <img {...rest} src={urlImg} alt={altImg}/>
}


