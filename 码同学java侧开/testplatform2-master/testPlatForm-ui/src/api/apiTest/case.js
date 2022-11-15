import request from '@/utils/request'

// 查询测试用例列表
export function listCase(query) {
  return request({
    url: '/apiTest/case/list',
    method: 'get',
    params: query
  })
}

// 查询测试用例详细
export function getCase(id) {
  return request({
    url: '/apiTest/case/' + id,
    method: 'get'
  })
}

// 新增测试用例
export function addCase(data) {
  return request({
    url: '/apiTest/case',
    method: 'post',
    data: data
  })
}

// 修改测试用例
export function updateCase(data) {
  return request({
    url: '/apiTest/case',
    method: 'put',
    data: data
  })
}

// 删除测试用例
export function delCase(id) {
  return request({
    url: '/apiTest/case/' + id,
    method: 'delete'
  })
}
