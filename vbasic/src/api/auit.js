import request from '@/utils/request'

export function auitList(params) {
  return request({
    url: '/web/organizerManager/organizerPage',
    method: 'get',
    params: { pageNo: params.pageNo,organizerName: params.organizerName }
  })
}

export function addJournal(data) {
  return request({
    url: '/web/journalCount/addJournal',
    method: 'post',
    data
  })
}
export function beforeAddJournal() {
  return request({
    url: '/web/journalManager/beforeAddJournal',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
