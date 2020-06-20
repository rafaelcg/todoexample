import React, { useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

const ListaBonita = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 50px;
`;

const ListaBonitaItem = styled.li`
  background: #353535;
  color: #f8f8f8;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

const Lista = () => {
  const [items, setItems] = React.useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/lista")
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.lista);
        }
      })
      .catch((error) => console.error("Ocorreu uma cagada: " + error));
  }, []);

  return (
    <ListaBonita>
      {items ? (
        items.map((item, key) => {
          return <ListaBonitaItem key={key}>{item}</ListaBonitaItem>;
        })
      ) : (
        <ListaBonitaItem>Carregando</ListaBonitaItem>
      )}
    </ListaBonita>
  );
};

export default Lista;
