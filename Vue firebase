import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    idUser: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    role: null || localStorage.getItem('role')
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
      state.idUser = payload.id
      state.role = payload.role
    },
    REMOVE_TOKEN (state) {
      state.user = null
      state.token = null
      state.idUser = null
      state.role = null
    }
  },
  actions: {
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        if (error.response.status === 401) {
          if (error.response.data.message === 'Invalid Token') {
            localStorage.clear()
            context.commit('REMOVE_TOKEN')
            Vue.swal.fire({
              title: 'Error!',
              text: `${error.response.data.message}`,
              icon: 'error',
              confirmButtonText: 'Relogin'
            })
            router.push('/')
          } else if (error.response.data.message === 'Token Expired') {
            localStorage.clear()
            context.commit('REMOVE_TOKEN')
            Vue.swal.fire({
              title: 'Error!',
              text: `${error.response.data.message}`,
              icon: 'error',
              confirmButtonText: 'Relogin'
            })
            router.push('/')
          }
        }
        return Promise.reject(error)
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, payload)
          .then(res => {
            const result = res.data.result
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            localStorage.setItem('role', result.role)
            context.commit('SET_USER', result)
            context.dispatch('interceptorRequest')
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/register`, payload)
          .then(res => {
            const result = res.data
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    Logout (context, payload) {
      localStorage.clear()
      context.commit('REMOVE_TOKEN')
      Vue.swal.fire(
        'Success!',
        'you have successfully logged out',
        'success'
      )
      router.push('/')
    },
    createUsers (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/users/create`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Create user successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },
    updateUsers (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users/update`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Update users successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },
    confirmUsers (context, payload) {
      return new Promise((resolve, reject) => {
        Vue.swal.fire({
          title: 'confirm this user?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, confirm it!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post(`${process.env.VUE_APP_BASE_URL}/users/confirmed`, payload)
              .then((result) => {
                Vue.swal.fire(
                  'Success!',
                  'user successfully confirmed.',
                  'success'
                )
                resolve('success')
              })
          }
        })
      })
    },

    createLabels (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/labels/create`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Create label successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },
    updateLabels (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/labels/update`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Update label successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },

    createTodos (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/todos/create`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Create task successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    },
    updateTodos (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/todos/update`, payload)
          .then((result) => {
            Vue.swal.fire({
              title: 'Success',
              text: 'Update task successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            resolve(result.data.result)
          })
          .catch((error) => {
            reject(error.response)
          })
      })
    }
  },
  modules: {
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    isRoleLogin (state) {
      return state.role
    }
  }
})
