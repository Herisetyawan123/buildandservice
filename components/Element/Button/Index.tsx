import Link from "next/link"

const Button = ({ 
    children,
    link,
    isLoading,
    onClick,
    } : { 
        children:   React.ReactNode,
        link?: string,
        isLoading?: boolean,
        onClick?: () => void
    }) => {
        console.log(isLoading)
    if (isLoading){
        return (
            <span className="inline-block cursor-not-allowed px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal">
                Loading...
            </span>
        )
    }
    if (link) {
        return (
            <Link href={link} className="inline-block px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal">{children}</Link>
        )
    }

    return (
        <button onClick={onClick} className="px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal">{children}</button>
    )

}

export default Button