import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    }

    async all(): Promise<UserDocument[]> {
        return await this.userModel.find();
    }

    async create(data): Promise<UserDocument> {
        return await this.userModel.create(data);
    }

    async get(id: string): Promise<UserDocument> {
        return await this.userModel.findOne({ _id: id });
    }

    async update(id: string, data: Partial<UserDocument>): Promise<UserDocument> {
        return await this.userModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<UserDocument> {
        return await this.userModel.findByIdAndRemove(id);
    }
}
