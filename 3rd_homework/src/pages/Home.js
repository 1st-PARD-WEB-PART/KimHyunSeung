import React from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";

const data = {
    Home: {
      name: 'Home'
    },
    People : {
      name : 'People'
    },
    Game: {
      name: 'Game'
    },
  };

function Home(){
      // "useParams" 훅을 사용하여 URL에서 전달된 username 파라미터를 가져옵니다.
  const params = useParams();
  console.log(useParams());

  // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 가져옵니다.
  const hom = data[params.username];
    return(
        <div>
            <Layout/>
            <h1 className="homepage">{hom.name}</h1>

        </div>
        
    );
};

export default Home;