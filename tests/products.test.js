const request = require("supertest");
const app = require("../index");

describe("Products API", () => {
    it("should return an empty list initially", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    it("should add a new product", async () => {
        const newProduct = { name: "Football" };

        const res = await request(app)
        .post("/products")
        .send(newProduct)
        .set("Content-Type", "application/json");

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(newProduct);
    });

    it("should return the added product in list", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toBe(200);
        expect(res.body).toContainEqual({ name: "Football" });
    });
});
