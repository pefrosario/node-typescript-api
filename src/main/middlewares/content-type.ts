import { Request, Response, NextFunction } from 'express'

export const cotentType = (req: Request, res: Response, next: NextFunction) => {
  res.type('json')
  next()
}
