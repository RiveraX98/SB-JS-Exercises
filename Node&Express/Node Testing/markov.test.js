
const jest = require("jest")
const markov = require("./markov")

describe("MarkovMachine",function(){
    beforeAll(function(){
        let mm = new markov.MarkovMachine("the cat in the hat")
    })
    test("makeChains", function(){
       chains =  mm.makeChains()
       expect(chains).toequal(expect.any(Object))
       expect(chains).toequal({
        'the': [ 'cat', 'hat' ],
        'cat': [ 'in' ],
        'in' : [ 'the' ],
        'hat' : [ null ]
      })
    })

    test("makeText", function(){
        text = mm.makeText()
        expect(text).toEqual(expect.any(String))
    })
})