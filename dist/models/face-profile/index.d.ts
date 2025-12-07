import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
}, {}, mongoose.DefaultSchemaOptions> & {
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    employee_id: mongoose.Types.ObjectId;
    image_url: string;
    facial_embeddings: number[];
    created_at?: number | null | undefined;
    updated_at?: number | null | undefined;
    deleted_at?: number | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
