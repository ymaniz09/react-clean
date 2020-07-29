import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call PostHttpClient with correct URL', async () => {
    class PostHttpClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve(undefined)
      }
    }
    const url = 'any_url'
    const postHttpClientSpy = new PostHttpClientSpy()
    const sut = new RemoteAuthentication(url, postHttpClientSpy)
    await sut.auth()
    expect(postHttpClientSpy.url).toBe(url)
  })
})
