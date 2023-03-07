import { GET_ALL } from "./graphql/queries";
import { apolloClient } from '@/main';
import { DELETE_PELICULA, inser_peliculas_complete, UPDATE_PELICULA } from "./graphql/mutations";

const peliculasStore = {
    namespaced: true,
    state: {
        peliculas: [],
        pelicula :{
            id: 1,
            pelicula: '',
            calificacion: 10,
            visto: false,
            estreno: '',
            opinion: '',
            pais: ''
        },
        isLoading: false
    },
    mutations: {
        getAllMoviesMutation(state, peliculas) {
            this.isLoading = true;
            state.peliculas = peliculas;
   
            
        },
        addMovie(state, movie) {
            state.peliculas.push(movie);
        },
        deleteMovieMut (state, id) {
            state.peliculas = state.peliculas.filter(movie => movie.id !== id);
        },
        updateMovieMut (state, movie) {
             state.peliculas.find(item => item.id === movie.id);
              
        },
        tarea(state, payload) {
            state.pelicula = state.peliculas.find(item => item.id === payload);
 
        },
        update (state, payload) {
            state.peliculas = state.peliculas.map(item => item.id === payload.id ? payload : item)
         }
    },
    actions: {
        async getAllMoviesActions(context) {
    
            const { data } = await apolloClient.query({
                query: GET_ALL
            });
            context.commit('getAllMoviesMutation', data.peliculas);
   
            
        },
        async addMovieComplete1(context, movie) {
         
            const dataForMutation = {
               mutation : inser_peliculas_complete,
                variables : {
                    pelicula: movie.pelicula,
                    calificacion: movie.calificacion,
                    visto: movie.visto,
                    estreno: movie.estreno,
                    opinion: movie.opinion,
                    pais: movie.pais
                }
            }
           
            const { data } = await apolloClient.mutate(dataForMutation);
             context.commit('addMovie', data.insert_peliculas.returning[0]);
        },
        async deleteMovieComplete1(context, id) {
             const dataForMutation = {
                mutation : DELETE_PELICULA,
                variables : {
                    id: id
                }
            }
             const { data } = await apolloClient.mutate(dataForMutation);
            context.commit('deleteMovieMut', id);
        },
        async updateMovieComplete1(context, movie) {
             const dataForMutation = {
                mutation : UPDATE_PELICULA,
                variables : {
                    id: movie.id,
                    pelicula: movie.pelicula,
                    calificacion: movie.calificacion,
                    visto: movie.visto,
                    estreno: movie.estreno,
                    opinion: movie.opinion,
                    pais: movie.pais
                }
            }
             const { data } = await apolloClient.mutate(dataForMutation);
            context.commit('updateMovieMut', movie);
        },
        setTarea({ commit }, id) {


            commit('tarea', id)
            // router.push('/agregar/' + id)

            
        },
        async updateMovie ({ commit }, movie) {
            const dataForMutation = {
                mutation : UPDATE_PELICULA,
                variables : {
                    id: movie.id,
                    pelicula: movie.pelicula,
                    calificacion: movie.calificacion,
                    visto: movie.visto,
                    estreno: movie.estreno,
                    opinion: movie.opinion,
                    pais: movie.pais
                }
            }
 
            const { data } = await apolloClient.mutate(dataForMutation);
             commit('update', movie)
 
        }

    },
    getters: {
    }
}

export default peliculasStore;