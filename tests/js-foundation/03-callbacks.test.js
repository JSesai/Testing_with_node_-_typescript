import  { getUserById }  from '../../src/js-fpundation/03-callbacks'


describe('js-foundation/03-callbacks.ts', () => {
    test('the function getuserbyid should return error if user does not exist', () => {
        const id = 10
        getUserById(id, (err, user) => {
            expect(err).toBe(`User with id ${id} not found`)
            expect(user).toBeUndefined()
            
        })
    })
})