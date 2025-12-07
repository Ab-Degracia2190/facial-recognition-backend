import 'dotenv/config';
import { connectDB } from './database/config';
import { EmployeesController } from './controllers';
import type { MulterRequest } from './types';
export { connectDB, EmployeesController };
export type { MulterRequest };
declare const _default: {
    connectDB: typeof connectDB;
    EmployeesController: typeof EmployeesController;
};
export default _default;
