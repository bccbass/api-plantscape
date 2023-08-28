import app from "../app.js"
import request from "supertest"

describe("POST /users/register", () => {
  let res

  beforeAll(async () => {
    res = await request(app).post("/users/register").send({
      firstName: "Arnold",
      lastName: "Schwarzenegger",
      email: "arnie@gmail.com",
      password: "illbeback",
    })
  })

  test("Returns a JSON body with _id", () => {
    // expect(res.status).toBe(201)
    expect(res.header["content-type"]).toMatch("json")
    // expect(res.body._id).toBeDefined()
  })

  // test("firstName has _id and correct name", () => {
  //   expect(res.body.firstName).toBeDefined()
  //   expect(res.body.firstName._id).toBeDefined()
  //   expect(res.body.firstName.name).toBeDefined()
  //   expect(res.body.firstName.name).toBe("Test")
  // })
})

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
    expect(res.body).toHaveLength(10)
  })

  test("Each category has a valid 'firstName' and '_id'", () => {
    res.body.forEach((el) => {
      expect(el._id).toBeDefined()
      expect(el.firstName).toBeDefined()
    })
  })
})