import { Controller, Get, Render, Res } from '@nestjs/common';
import { HomeService } from './home.service';
import { Response } from 'express';

@Controller({
    path: ""
})
export class HomeController {

    constructor(private homeService: HomeService){
    }

    @Get()
    @Render("home")
    homView(@Res() response: Response){
        response.render(this.homeService.getViewName(),
            {
                title: "Home",
                js: this.homeService.getJsPath(),
                css: this.homeService.getCssPath()
            }
        )
    }
}
