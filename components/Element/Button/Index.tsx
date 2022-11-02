import Link from "next/link"

const Button = ({ 
    children,
    link,
    isLoading,
    className,
    onClick,
    type
    } : { 
        children:   React.ReactNode,
        link?: string,
        isLoading?: boolean,
        className?: string,
        type?: string
        onClick?: () => void
    }) => {
    if (isLoading){
        return (
            <span className={`inline-block cursor-not-allowed px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal ${className} ${type}`}>
                Loading...
            </span>
        )
    }
    if (link) {
        return (
            <Link href={link} className={`inline-block px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal ${className} ${type}`}>{children}</Link>
        )
    }

    return (
        <button onClick={onClick} className={`px-4 py-1.5 rounded-md bg-blue-600 text-white font-normal ${className}  ${type}`}>{children}</button>
    )

}

export default Button