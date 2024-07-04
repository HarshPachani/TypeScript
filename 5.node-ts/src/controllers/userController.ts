import { NextFunction, Request, Response } from "express";

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
    const users: Array<string> = ['A', 'B', 'C'];
    
    res.json({
        users,
    })
} 