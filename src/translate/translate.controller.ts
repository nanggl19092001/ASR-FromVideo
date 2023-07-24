import { Controller } from "@nestjs/common";
import { Get, Query, Post, UseInterceptors, UploadedFile, Render, Request, Req } from "@nestjs/common/decorators";
import TranslateService from "./translate.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { join } from "path";
import { AutomaticSpeechRecognitionOutput } from "@huggingface/inference";

@Controller({
    path: "translate"
})
export default class TranslateController {

    constructor(private readonly translateService: TranslateService) {
    }

    @Get()
    @Render('translate')
    async translateView(@Query("name") name: string){
        return {
            message: name
        }
    }

    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async translateVideoFile(@UploadedFile() file: Express.Multer.File | ArrayBufferLike | any): Promise<AutomaticSpeechRecognitionOutput>{
        return await this.translateService.translate(file.buffer);
    }
}