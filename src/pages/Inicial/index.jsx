import Banner from "../../componentes/Banner"
import styles from "./Inicial.module.css"
import { register } from "swiper/element/bundle"

register()

import { useEffect, useState } from "react"
import Area from "../../componentes/Area"
import CardVideo from "../../componentes/Area/CardVideo"
import ModalEditarVideo from "../../componentes/ModalEditarVideo"

const Inicial = () => {

  const [videos, setVideos] = useState([])
  const [frontendVideo, setFrontendVideo] = useState([])
  const [backendVideo, setBackendVideo] = useState([])
  const [mobileVideo, setMobileVideo] = useState([])
  const [videoSelecionado, setVideoSelecionado] = useState(null)

  useEffect(() => {
    async function conectApi() {
      const videosApi = await fetch('https://my-json-server.typicode.com/jefersonssant/aluraflix-api/videos') 
      //Para perceber as funcionalidades de Post, Delete e Put, troque o link do fetch por "http://localhost:3000/videos" e abra novo terminal e rode o comando "npm start" ou "json-server --watch db.json" fecth original do my json serve (https://my-json-server.typicode.com/jefersonssant/aluraflix-api/videos) para Post, Delete e Put não está funcionando.
      const videosApiData = await videosApi.json()
      setVideos(videosApiData)
    }
    conectApi()
  }, [])

  useEffect(() => {
    if (videos.length > 0) {
      const frontendVideos = (videos.filter(video => video.area === "frontend"));
      const backendVideos = (videos.filter(video => video.area === "backend"));
      const mobileVideos = (videos.filter(video => video.area === "mobile"));

      setFrontendVideo(frontendVideos);
      setBackendVideo(backendVideos);
      setMobileVideo(mobileVideos);
    }
  }, [videos]);

  const atualizarVideoDeletado = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  }

  const atualizarAposPut = async () => {
    const response = await fetch('http://localhost:3000/videos');
    const updatedVideos = await response.json();
    setVideos(updatedVideos);
    setVideoSelecionado(null);
  }

  return (
    <div className={styles.incialBg}>
      <Banner>
      </Banner>
      <Area titulo="FRONT END" tituloColor="#6BD1FF" videoBorderColor="#6BD1FF" btnColor="#6BD1FF">
          {frontendVideo.map((video) => (
            <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
          ))}
      </Area>
      <Area titulo="BACK END" tituloColor={"#00C86F"} videoBorderColor={"#00C86F"} btnColor={"#00C86F"}>
          {backendVideo.map((video) => (
            <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
          ))}
      </Area>
      <Area titulo="MOBILE" tituloColor={"#FFBA05"} videoBorderColor={"#FFBA05"} btnColor={"#FFBA05"}>
        {mobileVideo.map((video) => (
          <CardVideo key={video.id} video={video} aoDeletar={atualizarVideoDeletado} aoVideoSelecionado={video=> setVideoSelecionado(video)} />
        ))}
      </Area>
      <ModalEditarVideo videos={videos} video={videoSelecionado} aoFechar={() => setVideoSelecionado(null)} aoAtualizar={atualizarAposPut} />
    </div>
  )
}

export default Inicial