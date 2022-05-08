const request = require('supertest');
const expect = require('chai').expect;

const app = require('../server');
const Todo = require('../api/models/todo.model')

const existingTodo = {
    task: "create tests"
};

const newTodo = {
    task: "laundry"
};

before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
    Todo.create(existingTodo);
});

describe("todos", function (){
    it("should return all todos", function (done) {
        request(app)
            .get("/todos")
            .expect(200)
            .then(function (res) {
                expect(res.body[0].task).to.be.eql(existingTodo.task);
                done();
            })
            .catch(function (err) {done(err)});
    });

    it("should create new todo", function (done) {
        Todo.count({}, function(err, count) {
            const beforeCount = count;
            request(app)
            .post("/todos")
            .send(newTodo)
            .expect(201)
            .then(function (res) {
                Todo.count({}, function(err, count) {
                    expect(count).to.be.eql(beforeCount + 1);
                });
                expect(res.body.task).to.be.eql(newTodo.task);
                done();
            })
            .catch(function (err) {done(err)});
        })
    });
});

after(async function () {
    console.log('Deleting test database...')
    Todo.deleteMany({})
        .then(function () {console.log('Test database deleted.');})
        .catch(function (err) {console.error(err);});
});