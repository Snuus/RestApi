import { Request, Response } from 'express'
import { createUserInput } from '../schema/user.schema'
import { createUser } from '../service/user.service'
import logger from '../utils/logger'

export async function createUserHandler(req: Request<{}, {}, createUserInput['body']>, res: Response) {
    try {
        const user = await createUser(req.body) // call create user service 
        console.log(user)
        return res.send(user)
    } catch (e: any) {
        logger.error(e)
        return res.status(409).send(e.message)

    }
}