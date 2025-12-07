import Employees from './employees';
import FaceProfile from './face-profile';
export { Employees, FaceProfile };
declare const _default: {
    Employees: import("mongoose").Model<{
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    }>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
        first_name: string;
        last_name: string;
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
        middle_name?: string | null | undefined;
        address?: string | null | undefined;
        contact_number?: string | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    FaceProfile: import("mongoose").Model<{
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    }>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<{
        employee_id: import("mongoose").Types.ObjectId;
        image_url: string;
        facial_embeddings: number[];
        created_at?: number | null | undefined;
        updated_at?: number | null | undefined;
        deleted_at?: number | null | undefined;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
};
export default _default;
