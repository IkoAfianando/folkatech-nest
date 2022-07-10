import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    all() {
        return this.userService.all();
    }

    @Post()
    create(
        @Body('userName') userName: string,
        @Body('accountNumber') accountNumber: string,
        @Body('emailAddress') emailAddress: string,
        @Body('identityNumber') identityNumber: string,
    ) {
        return this.userService.create({
            userName,
            accountNumber,
            emailAddress,
            identityNumber,
            dateCreated: new Date(),
        });
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.userService.get(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body('userName') userName: string,
        @Body('accountNumber') accountNumber: string,
        @Body('emailAddress') emailAddress: string,
        @Body('identityNumber') identityNumber: string,
    ) {
        return this.userService.update(id, {
            userName,
            accountNumber,
            emailAddress,
            identityNumber,
            dateUpdated: new Date(),
        });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }

}
