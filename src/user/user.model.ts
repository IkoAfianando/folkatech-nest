import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;


@Schema()
export class User {
    @Prop()
    id: number

    @Prop()
    userName: string

    @Prop()
    accountNumber: string

    @Prop({ required: true, unique: true })
    emailAddress: string

    @Prop()
    identityNumber: string

    @Prop()
    dateCreated: Date

    @Prop()
    dateUpdated: Date

}

export const UserSchema = SchemaFactory.createForClass(User);