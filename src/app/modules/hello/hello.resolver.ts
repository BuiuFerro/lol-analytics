
import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from '../../services/ServiceExample/app.service';

@Resolver()
export class HelloResolver {
    constructor(private readonly appService: AppService) { }
    @Query(() => String)
    getHello(): string {
        return this.appService.getHello();
    }
}
