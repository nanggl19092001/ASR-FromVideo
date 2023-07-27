import { Controller } from "@nestjs/common";
import { Get, Query, Post, UseInterceptors, UploadedFile, Res, Render } from "@nestjs/common/decorators";
import TranslateService from "./translate.service";
import { Response } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { AutomaticSpeechRecognitionOutput } from "@huggingface/inference";

@Controller({
    path: "translate"
})
export default class TranslateController {

    constructor(private readonly translateService: TranslateService) {
    }

    @Get()
    async translateView(@Query("name") name: string, @Res() response: Response) {
        return response.render(
            this.translateService.getViewName(),
            {
                title: "Translate",
                js: this.translateService.getJsPath(),
                css: this.translateService.getCssPath()
            }
        )
    }

    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async translateVideoFile(@UploadedFile() file: Express.Multer.File | ArrayBufferLike | any): Promise<AutomaticSpeechRecognitionOutput>{
        return await this.translateService.translate(file.buffer ? file.buffer : file);
    }
}