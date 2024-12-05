import { Request, Response, NextFunction } from 'express';

class ParseQueryMiddleware {
  /**
   * Middleware to parse the query parameters in the request.
   * If the parameter is JSON-stringified, it will be parsed.
   * Otherwise, the original value will be retained.
   */
  public parse(req: Request, res: Response, next: NextFunction) {
    try {
      const parsedQuery: Record<string, any> = {};

      for (const [key, value] of Object.entries(req.query)) {
        // Try parsing JSON-stringified values; otherwise, retain the value
        try {
          parsedQuery[key] = JSON.parse(value as string);
        } catch {
          parsedQuery[key] = value;
        }
      }

      req.query = parsedQuery;
      next();
    } catch (error) {
      res.status(400).json({ error: 'Invalid query parameters' });
    }
  }
}

export default ParseQueryMiddleware;
