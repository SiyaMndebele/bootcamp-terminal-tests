let assert = require("assert");
let greet = require("../function/greet");

describe('The greet function' , function(){
    
    it('Should return "Hello, Siya" when I greet Siya' , function(){
        
        assert.equal('Hello, Siya', greet('Siya'));
        
    });

    it('Should return "Hello, Nhlanhla" when I greet Nhlanhla' , function(){
        
        assert.equal('Hello, Nhlanhla', greet('Nhlanhla'));
        
    });

    it('Should return "Hello" when no name is entered' , function(){
        
        assert.equal('Hello', greet());
        
    });


});