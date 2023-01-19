
export default function LinkCard({title, url}) {
    return (
            <a href={url}
            className="flex items-center p-4
             rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-lg mb-7 bg-purple-400"
             target={"_blank"}
             rel="noopener noreferrer"
            >
            <div className="flex flex-col w-full text-center">
                <h2 className="font-semibold text-lg w-full text-center text-white">{title}</h2>
            </div>
            </a>  
    )
} 