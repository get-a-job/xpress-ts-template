import type { Request, Response, NextFunction } from "express";

export const getHome = (req: Request, res: Response, _next: NextFunction) => {
    res.render("home", { title: "Welcome!", message: "Hello from EJS 👋" });
};
