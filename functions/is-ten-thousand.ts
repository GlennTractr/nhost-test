import { Request, Response } from "express";
import isTenThousandFn from "is-ten-thousand";

export default (req: Request, res: Response) => {
  const { number } = req.query;

  const isTenThousand = isTenThousandFn(parseInt(number as string, 10));

  if (isTenThousand) res.status(200).send(`${number} is ten thousand`);
  else res.status(200).send(`${number} is not ten thousand`);
};
