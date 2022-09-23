import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './reducers/searchReducer'
import modalReducer from './reducers/modalReducer'
import carrinhoReducer from './reducers/carrinhoReducer'
import carReducer from './reducers/carReducer'
import pedidoReducer from './reducers/pedidoReducer'
import pedidoInfosReducer from './reducers/pedidoInfosReducer'
import outrosPedidosReducer from './reducers/outrosPedidosReducer'
import usuarioReducer from './reducers/usuarioReducer'
import darkReducer from './reducers/darkReducer'


export const store = configureStore({
  reducer: {
    search: searchReducer,
    modal: modalReducer,
    car: carrinhoReducer,
    car2: carReducer,
    pedido: pedidoReducer,
    pedidoInfos: pedidoInfosReducer,
    outrosPedidos: outrosPedidosReducer,
    endereco: usuarioReducer,
    theme: darkReducer
  }
})

export type rootState = ReturnType<typeof store.getState>