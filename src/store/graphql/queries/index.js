import gql from "graphql-tag";


export const GET_ALL = gql`
        query {
          peliculas {
          calificacion
          id
          pelicula
          visto
          estreno
          opinion
          pais
        }
          } 
`;
