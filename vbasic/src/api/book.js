import request from '@/utils/request'

export function bookList(data) {
  return request({
    url: '/web/journalManager/journalPages',
    method: 'get',
    params: { pageNo: data.pageNo,journalName: data.journalName,organizerlds: data.organizerlds }
  })
}

export function subjectList(data) {
  return request({
    url: '/web//subjectMamager/subjectPage',
    method: 'get',
    params: { pageNo: data.pageNo }
  })
}

export function updateOrganizer(data) {
  return request({
    url: '/web/organizerManager/updateOrganizer',
    method: 'post',
    data
  })
}
export function addOrganizer(data) {
  return request({
    url: '/web/organizerManager/addOrganizer',
    method: 'post',
    data
  })
}
export function addSubject(data) {
  return request({
    url: '/web/subjectMamager/addSubject',
    method: 'post',
    data
  })
}
export function addJournal(data) {
  return request({
    url: '/web/journalManager/addJournal',
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
