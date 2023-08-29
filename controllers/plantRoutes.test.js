import app from "../app.js"
import request from "supertest"

// Run "npm test" to begin

// GET /PLANTS TEST SUITE

describe("GET /plants", () => {
  let res

  beforeEach(async () => {
    res = await request(app).get("/plants").query({ q: 'monstera' })
    console.log(res)
  })

  test("Returns JSON", () => {
    expect(res.status).toBe(200)
    expect(res.header["content-type"]).toMatch("json")
  })

  test("Returns an array", () => {
    expect(res.body).toBeInstanceOf(Array)
  })

  test("Searches API for correct plants and returns them in an array of 2 plants", () => {
    expect(res.body).toHaveLength(2)
    expect(res.body[0].common_name).toBe("Swiss cheese plant")
  })

  test("API fetch includes the plant's common and scientific name", () => {
    expect(res.body[0]).toHaveProperty("common_name")
    expect(res.body[0]).toHaveProperty("scientific_name")
  })
})