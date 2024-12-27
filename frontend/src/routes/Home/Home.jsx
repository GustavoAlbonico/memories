import { useEffect, useState } from "react";
import "./Home.css";
import axios from "../../axios/config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Home = () => {
  const [memories, setMemories] = useState([]);

  const loadMemories = async () => {
    try {
      const response = await axios.get("/memories");

      setMemories(response.data)
    } catch (error) {
      toast.error("Erro inesperado ao carregar memórias");
    }
  }

  useEffect(() => {
    loadMemories();
  }, [])

  return (
    <div className="home">
      <h2>Confira as últimas Memórias</h2>
      <div className="memories-container">
        {memories.lenght > 0 && memories.map((memory) => (
          <div className="memory" key={memory._id}>
            <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
            <p>{memory.title}</p>
            <Link className="btn" to={`/memories/${memory._id}`}>
              Comentar
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home