import { superHeros } from '../../src/js-fpundation/02-destructuring'


describe('Destructuring', () => {
  test('SuperHeros should contain Flash, Superman', () => {
    expect(superHeros).toContain('Flash')
    expect(superHeros).toContain('Superman')
  })

  test('first heroe should be Flash and second Superman', () => {
    const [flash, superman] = superHeros
    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })

  test('SuperHeros should be an array', () => {
    expect(superHeros).toBeInstanceOf(Array)
  })
})