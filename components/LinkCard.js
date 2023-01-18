
export default function LinkCard({title, url}) {
    return (
            <a href={url}
            className="flex items-center p-4
             rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-lg mb-10 bg-purple-400"
            >
            <div className="flex flex-col w-full text-center">
                <h2 className="font-semibold text-lg w-full text-center">{title}</h2>
            </div>
            </a>  
    )
} 