import { Controller } from "@nestjs/common";
import { Get, Query } from "@nestjs/common/decorators";
import TranslateService from "./translate.service";

@Controller({
    path: "translate"
})
export default class TranslateController {

    constructor(private readonly translateService: TranslateService) {
    }

    @Get()
    async translate(@Query("text") text: string) {
        return await this.translateService.translate();
    }
}