import { Controller, Get } from '@nestjs/common'


@Controller('/app')
export class AppController {
    @Get('/hello')
    getHelloRoute() {
        return 'Hello, World!'
    }

    @Get('/goodbye')
    getGoodbyeRoute() {
        return "Goodbye, World!"
    }
}