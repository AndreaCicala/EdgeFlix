import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../../libs/utils";
import styles from "./style.module.scss";

const YoutubeEmbed = () => {
    const { id } = useParams();
    const [videoKey, setVideoKey] = useState("");
    const ytLink = `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`;

    const getVideosData = async () => {
        const dataVideo = await getVideos(`/${id}`);
        const video = dataVideo.results.find(
          (elem) => elem.type === "Trailer" && elem.official
        );
        setVideoKey(video.key);
      };

      /* eslint-disable */
  useEffect(() => {
    getVideosData();
  }, []);

    return (
    <div>
      <iframe
        className={styles.video_element}
        src={ytLink}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
)};

  export default YoutubeEmbed;