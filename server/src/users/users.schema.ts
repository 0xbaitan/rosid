import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  email: string;
}

export type UsersDocument = HydratedDocument<Users>;

export const UsersSchema = SchemaFactory.createForClass(Users);
