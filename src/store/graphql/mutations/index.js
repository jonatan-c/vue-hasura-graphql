import gql from "graphql-tag";

export const insert_peliculas = gql`
  mutation insert_peliculas($pelicula: String!) {
    insert_peliculas(objects: { pelicula: $pelicula }) {
      affected_rows
      returning {
        id
        pelicula
        calificacion
        visto
      }
    }
  }
`;

export const inser_peliculas_complete = gql`
  mutation insert_peliculas(
    $calificacion: Int = 10
    $pelicula: String = ""
    $visto: Boolean = false
    $estreno: date = ""
    $opinion: String = ""
    $pais: String = ""
  ) {
    insert_peliculas(
      objects: {
        pelicula: $pelicula
        calificacion: $calificacion
        estreno: $estreno
        opinion: $opinion
        pais: $pais
        visto: $visto
      }
    ) {
      affected_rows
      returning {
        calificacion
        pelicula
        visto
        estreno
        id
        opinion
        pais
      }
    }
  }
`;

export const DELETE_PELICULA = gql`
  mutation MyMutation2($id: Int = 1) {
    delete_peliculas_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_PELICULA = gql`
  mutation PK(
    $id: Int!
    $calificacion: Int!
    $estreno: date!
    $opinion: String!
    $pais: String!
    $pelicula: String!
    $visto: Boolean!
  ) {
    update_peliculas_by_pk(
      pk_columns: { id: $id }
      _set: {
        calificacion: $calificacion
        estreno: $estreno
        opinion: $opinion
        pais: $pais
        pelicula: $pelicula
        visto: $visto
      }
    ) {
      calificacion
      estreno
      id
      opinion
      pais
      pelicula
      visto
    }
  }
`; 
