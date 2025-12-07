import 'dotenv/config'
import { connectDB } from './database/config'
import { EmployeesController } from './controllers'
import type { MulterRequest } from './types'

export { connectDB, EmployeesController }
export type { MulterRequest }
export default { connectDB, EmployeesController }