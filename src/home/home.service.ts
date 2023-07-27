import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
    getViewName(){
        return "home";
    }

    getCssPath(){
        return "/css/home.css";
    }

    getJsPath(){
        return "/js/home.js";
    }
}
