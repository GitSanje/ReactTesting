import { http, HttpResponse } from 'msw' //MSW (Mock Service Worker)

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { name: 'Bruce Wayne' },
      { name: 'Clark Kent' },
      { name: 'Princess Diana' },
    ])
  }),
]
