import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { PHOTOS_GET } from "../../api";
import styles from "./FeedPhotos.module.css";
import useMedia from "../../Hooks/useMedia";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  
  let mobile = useMedia("(max-width: 40rem)");
  const total = mobile ? 8 : 6;
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      console.log(json)
      if(response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page, setInfinite, mobile]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          );
        })}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
