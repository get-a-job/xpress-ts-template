import type { Request, Response, NextFunction } from "express";

export const getHome = (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to the home api")
};
