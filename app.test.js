import app from "./app.js"
import request from "supertest"

// Test suite
describe("App Test", () => {
  test("GET /", async () => {
    // Simulate a GET request to the app's "/" path and return intercepted response object
    const res = await request(app).get("/")
    // Tests
    expect(res.status).toBe(200)
    expect(res.header["content-type"]).toMatch("json")
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Plantscape Index")
  })
})