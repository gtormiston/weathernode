var supertest = require("supertest"),
should = require("chai").should(),
expect = require("chai").expect,
api = supertest("http://localhost:3000");

describe('App', function(){
  it('should return a 200 response', function(done){
    api.get('/')
    expect(200,done());
  });
  
});
