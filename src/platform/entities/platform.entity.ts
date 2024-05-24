import mongoose, { Schema, Document } from 'mongoose';


export interface Platform extends Document {

        id: number,
    
        attributes: {
            title: string,
            slug: string,
            order: number,
            createdAt: Date,
            updatedAt: Date,
            publishedAt: Date,
            icon: {
                data: {
                    id: number,
                    attributes: {
                        name: string,
                        alternativeText: string,
                        caption: string,
                        width: number,
                        height: number,
                        formats: string,
                        hash: string,
                        ext: string,
                        mime: string,
                        size: number,
                        url: string,
                        previewUrl: string,
                        provider: string,
                        provider_metadata: {
                            public_id: string,
                            resource_type: string,
                        },
                        createdAt: Date,
                        updatedAt: Date,
                    }
                }
            }
        }
    }

export const PlatformSchema = new Schema({
    attributes: {
        title: { type: String, required: true },
        slug: { type: String, required: true },
        order: { type: Number, required: true },
        createdAt: { type: Date, required: true },
        updatedAt: { type: Date, required: true },
        publishedAt: { type: Date, required: true },
        icon: {
            data: {
                id: { type: Number, required: true },
                attributes: {
                    name: { type: String, required: true },
                    alternativeText: { type: String, required: false },
                    caption: { type: String, required: false },
                    width: { type: Number, required: true },
                    height: { type: Number, required: true },
                    formats: { type: String, required: false },
                    hash: { type: String, required: true },
                    ext: { type: String, required: true },
                    mime: { type: String, required: true },
                    size: { type: Number, required: true },
                    url: { type: String, required: true },
                    previewUrl: { type: String, required: false },
                    provider: { type: String, required: true },
                    provider_metadata: {
                        public_id: { type: String, required: true },
                        resource_type: { type: String, required: true },
                    },
                    createdAt: { type: Date, required: true },
                    updatedAt: { type: Date, required: true },
                }
            }
        }
    }
});


export default mongoose.model<Platform>('Platform', PlatformSchema);

