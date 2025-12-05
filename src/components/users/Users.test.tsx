import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { test, expect, describe } from 'vitest'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(3)
  })

  test('renders error when server fails', async () => {
    // Override handler for this test
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        return HttpResponse.text('Server Error', { status: 500 })
      })
    )

    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
