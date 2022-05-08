const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
const Todo = require('../api/models/todo.model')


let existingTodo = {
    task: "create tests"
};
let existingTodoId;


before(function (done) {
    this.timeout(3000);
    setTimeout(done, 2000);
    Todo.create(existingTodo, function (err, todo) {
        err ? console.error(err) : existingTodo = todo;
        existingTodoId = existingTodo._id.toString();
    });
});

describe("todos API", function (){
    it("should return all todos", function (done) {
        Todo.count({}, function(err, count) {
            request(app)
                .get("/todos")
                .expect(200)
                .then(function (res) {
                    expect(res.body.length).to.be.eql(count);
                    expect(res.body[0].task).to.be.eql(existingTodo.task);
                    done();
                })
                .catch(function (err) {done(err)});
        });
    });

    it("should create new todo", function (done) {
        Todo.count({}, function(err, count) {
            const beforeCount = count;
            const newTodo = {
                task: "laundry"
            };            
            
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

    it("should update todo", function (done) {
        expect(existingTodo.status).to.be.eql('to do')
        const updatedTodo = {
            _id: existingTodoId,
            task: existingTodo.task,
            status: 'done'
        };
        
        request(app)
            .put(`/todos/${existingTodoId}`)
            .send(updatedTodo)
            .expect(200)
            .then(function (res) {
                expect(res.body.status).to.be.eql(updatedTodo.status);
                Todo.findById(existingTodoId, function(err, todo) {
                    expect(todo.status).to.be.eql(updatedTodo.status);
                });
                done();
            })
            .catch(function (err) {done(err)});;
    });

    it("should delete todo", function (done) {
        Todo.count({}, function(err, count) {
            const beforeCount = count;       
            
            request(app)
                .delete(`/todos/${existingTodoId}`)
                .expect(200)
                .then(function (res) {
                    Todo.count({}, function(err, count) {
                        expect(count).to.be.eql(beforeCount - 1);
                        Todo.findById(existingTodoId, function (err, todo) {
                            expect(err).to.any;
                        });
                    });
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