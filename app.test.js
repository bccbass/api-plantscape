import app from './app.js'
import request from 'supertest'

// New test suite
describe("App Test", () => {
  // New test
  test("GET /", async () => {
    // Simulate a get request to the app's "/" path and return intercepted response object
    const res = await request(app).get("/")
    // Test conditions
    expect(res.status).toBe(200)
    expect(res.header['content-type']).toMatch('application/json')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Plantscape Index")
  })

  test("GET /users", async () => {
    const res = await request(app).get("/users")
    expect(res.status).toBe(200)
    expect(res.header['content-type']).toMatch('application/json')
    expect(res.body.info).toBeDefined()
    expect(res.body.info).toBe("Plantscape Index")
  })
})