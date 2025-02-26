import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const app = new Hono();
const prisma = new PrismaClient();

app.post("/api/v2/fulfill/async", async (c) => {
    try {
        const reqBody= await c.req.json();

        const newUser = await prisma.bunLog.create({
            data: {
                data: JSON.stringify(reqBody),
            },
        });

        return c.json({ message: "User created successfully", user: newUser });
    } catch (error: any) {
        return c.json({ error: error.message }, 500);
    }
});

export default {
    port: 3000,
    fetch: app.fetch,
};
