import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Error";
import { PHOTOS_GET } from "../../api";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      // console.log(json);
    }
    fetchPhotos();
  }, [request]);

  // console.log(data);

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
