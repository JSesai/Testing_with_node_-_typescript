//A A A  es arange, act  acert
describe('Test in the app file', () => {
        
    test('should be 30', () => {
        //1. Arange - preparacion 
        const num1 = 10
        const num2 = 20
    
    
    
        //2. Act - actuar
        const result = num1 + num2 + 5
    
    
        //3. Assert - asersion         
        expect(result).toBe(35)
    })
})