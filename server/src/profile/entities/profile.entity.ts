import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema({ timestamps: true })
export class Profile {
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true, unique: true })
    userName: string;

    @Prop()
    displayName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    avatar: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Group', default: null })
    notifications: string[];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: null,
    })
    messages: string[];
    @Prop()
    courses: string[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
