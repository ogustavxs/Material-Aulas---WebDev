import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostUsuario() {
    const parametros = useParams()
    
    const [post, setPosts] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${parametros.id}/posts`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
    }, []);

    return (
        <div className="flex flex-wrap gap-3">
            {post.map((p)=>(
                <div className="bg-slate-300 max-w-2/6 min-w-1/6 flex-1 shadow-md hover:shadow-lg hover:border-slate-500 transition-all p-3 border-1 border-slate-400 rounded-lg">
                    <h1 className="font-bold text-center text-lg">{p.title}</h1>
                    <p>{p.body}</p>
                </div>
            ))}
        </div>
    )
}