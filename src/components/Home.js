import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../assets/loading.gif";
import { Link } from "react-router-dom";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

    const req = axios.get(URL);

    req.then((res) => {
      setImages(res.data);
    });
    
  }, []);

  if(images.length === []) {
		return <Loading/>;
	}

  return (
    <>
      <HeadingWrapper>
        <h1>Selecione o filme</h1>
      </HeadingWrapper>
      <MovieWrapper>
          {images.map(image => (
            <Link to={`/sessoes/${image.id}`} key={image.id}>
              <img src={image.posterURL} alt={image.title}/>
            </Link>
          ))}
      </MovieWrapper>
    </>

  );
}

const HeadingWrapper = styled.div`
  width: 375px;
  height: 110px;
  position: absolute;
  top: 67px;

  h1 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    text-align: center;
    line-height: 90px;
    letter-spacing: 0.04em;
  }
`;

const MovieWrapper = styled.div`
  position: fixed;
  width: 375px;
  top: 150px;
  display: flex;
  flex-wrap: wrap;
  img {
    width: 129px;
    height: 193px;
    position: relative;
    left: 38px;
    top: 25px;
    margin: 0 46px 27px 0;
  }
`;