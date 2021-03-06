import fetch from '@/utils/fetch'

export function login(data) {
  return fetch({
    // url: '/user/login',
    url: '/db/auth/user/signin',
    method: 'POST',
    data
  })
}

export function signup(data) {
  return fetch({
    // url: '/user/signup',
    url: '/db/auth/user/signup',
    method: 'POST',
    data
  })
}

export function getUserInfo() {
  return fetch({
    url: '/user/info',
    method: 'GET'
  })
}

export function logUserOut() {
  return fetch({
    url: 'user/logout',
    method: 'GET'
  })
}
