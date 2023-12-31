import app from "../app.js"
import request from "supertest"

// Run "npm test" to begin

// GET /USERS TEST SUITE

describe("GET /users", () => {
  let res

  beforeEach(async () => {
    res = await request(app).get("/users")
  })

  test("Returns JSON", () => {
    expect(res.status).toBe(200)
    expect(res.header["content-type"]).toMatch("json")
  })

  test("Returns an array of 3 elements", () => {
    expect(res.body).toBeInstanceOf(Array)
    expect(res.body).toHaveLength(3)
  })

  test("Each user has a valid 'firstName' and '_id'", () => {
    res.body.forEach((el) => {
      expect(el._id).toBeDefined()
      expect(el.firstName).toBeDefined()
    })
  })
})

// GET /USERS/:ID TEST SUITE

describe("GET /users/:id", () => {
  let login
  let token
  let user

  beforeAll(async () => {
    login = await request(app).post("/users/login").send({
      email: "josh@gmail.com",
      password: "josh123"
    })
    token = login._body.token
  })

  beforeAll(async () => {
    user = await request(app).get(`/users/${login._body.id}`).set('Authorization', `Bearer ${token}`)
  })

  test("Returns JSON", () => {
    expect(user.status).toBe(200)
    expect(user.header["content-type"]).toMatch("json")
  })

  test("User has a valid 'firstName' and '_id'", () => {
    expect(user._body._id).toBeDefined()
    expect(user._body.firstName).toBeDefined()
  })
})

// DELETE /USERS/:ID TEST SUITE

describe("DELETE /users/:id", () => {
  let res
  let del
  let err

  beforeAll(async () => {
    res = await request(app).post("/users/register").send({
      firstName: "Donald",
      lastName: "Trump",
      email: "donald@gmail.com",
      password: "president"
    })
  })

  beforeAll(async () => {
    del = await request(app).delete(`/users/${res._body._id}`)
  })

  test("Registered user data can be deleted", () => {
    expect(del.status).toBe(200)
  })

  test("Correct user id must be supplied to delete a user record", async () => {
    err = await request(app).delete("/users/")
    expect(err.status).toBe(404)
  })
})

// PUT /USERS/:ID TEST SUITE

describe("PUT /users/:id", () => {
  let res
  let login
  let update
  let token

  beforeAll(async () => {
    res = await request(app).post("/users/register").send({
      firstName: "Donald",
      lastName: "Trump",
      email: "donald@gmail.com",
      password: "president"
    })
  })

  beforeAll(async () => {
    login = await request(app).post("/users/login").send({
      email: "donald@gmail.com",
      password: "president"
    })
    token = login._body.token
  })

  beforeAll(async () => {
    update = await request(app).put(`/users/${res._body._id}`).send({
      firstName: "Don"
    })
    .set('Authorization', `Bearer ${token}`)
  })

  afterAll(async () => {
    await request(app).delete(`/users/${res._body._id}`)
  })

  test("Registered user data can be updated", () => {
    expect(update.status).toBe(200)
  })

  test("User data is updated as intended", () => {
    expect(update._body.firstName).toBe("Don")
  })
})

// POST /USERS/LOGIN TEST SUITE

describe("POST /users/login", () => {
  let res

  beforeAll(async () => {
    res = await request(app).post("/users/login").send({
      email: "josh@gmail.com",
      password: "josh123"
    })
  })

  test("Registered user is able to login successfully", () => {
    expect(res.status).toBe(200)
    expect(res.header["content-type"]).toMatch("json")
  })

  test("Invalid credentials return an error", async () => {
    const attempt = await request(app).post("/users/login").send({
      email: "invalid@gmail.com",
      password: "unregistered"
    })
    expect(attempt.status).toBe(200)
    expect(attempt.text).toContain("error")
  })

  test("Successful login returns JWT token", async () => {
    expect(res.text).toContain("token")
  })
})

// POST /USERS/REGISTER TEST SUITE

describe("POST /users/register", () => {
  let res

  beforeAll(async () => {
    res = await request(app).post("/users/register").send({
      firstName: "Elton",
      lastName: "John",
      email: "ejohn@gmail.com",
      password: "rocketman"
    })
  })

  test("Returns a JSON body with _id", () => {
    expect(res.status).toBe(201)
    expect(res.header["content-type"]).toMatch("json")
    expect(res.body._id).toBeDefined()
  })

  test("firstName has the correct value", () => {
    expect(res.body.firstName).toBeDefined()
    expect(res.body.firstName).toBe("Elton")
  })

  test("lastName has the correct value", () => {
    expect(res.body.lastName).toBeDefined()
    expect(res.body.lastName).toBe("John")
  })

  test("Email has the correct value", () => {
    expect(res.body.email).toBeDefined()
    expect(res.body.email).toBe("ejohn@gmail.com")
  })

  test("A user cannot be added if already registered", async () => {
    const user = await request(app).post("/users/register").send({
      firstName: "Josh",
      lastName: "Davis",
      email: "josh@gmail.com",
      password: "josh123"
    })
    expect(user.status).toBe(400)
    expect(user.text).toContain("error")
  })

  afterAll(async () => {
    await request(app).delete(`/users/${res.body._id}`)
  })
})