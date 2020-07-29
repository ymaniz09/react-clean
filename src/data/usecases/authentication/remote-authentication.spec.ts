import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call PostHttpClient with correct URL', async () => {
    const url = 'any_url'
    const postHttpClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, postHttpClientSpy)
    await sut.auth()
    expect(postHttpClientSpy.url).toBe(url)
  })
})
