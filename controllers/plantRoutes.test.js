import app from "../app.js"
import request from "supertest"

// Run "npm test" to begin

// POST /PLANTS TEST SUITE

// GET /PLANTS TEST SUITE

describe("GET /plants", () => {
  let user
  let token
  let login
  let res

  beforeAll(async () => {
    login = await request(app).post("/users/login").send({
      email: "josh@gmail.com",
      password: "josh123"
    })
    token = login._body.token
  })

  beforeAll(async () => {
    user = await request(app).get("/plants").set('Authorization', `Bearer ${token}`).query({ q: 'monstera' })
  })

  test("Returns JSON", () => {
    expect(user.status).toBe(200)
    expect(user.header["content-type"]).toMatch("json")
  })

  test("Returns an array", () => {
    expect(user.body).toBeInstanceOf(Array)
  })

  test("Searches API for correct plants and returns them in an array of 2 plants", () => {
    expect(user.body).toHaveLength(2)
    expect(user.body[0].common_name).toBe("Swiss cheese plant")
  })

  test("API fetch includes the plant's common and scientific name", () => {
    expect(user.body[0]).toHaveProperty("common_name")
    expect(user.body[0]).toHaveProperty("scientific_name")
  })

  test("String query (q) must be supplied", async () => {
    res = await request(app).get("/plants").set('Authorization', `Bearer ${token}`)
    console.log(res)
    expect(res.status).toBe(200)
    expect(res.header["content-type"]).toMatch("json")
    expect(res.text).toContain("Error")
  })
})