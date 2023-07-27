import { AutomaticSpeechRecognitionOutput } from "@huggingface/inference";
import { Injectable } from "@nestjs/common/decorators";
import { join } from "path";
import { cssPath, jsPath } from "src/utils/constaint";
import HuggingFaceUtils from "src/utils/huggingface-utils";

@Injectable({})
export default class TranslateService {

    getViewName() {
        return "translate";
    }

    getJsPath() {
        return join(jsPath, "translate.js");
    }

    getCssPath() {
        return join(cssPath, "translate.css");
    }

    translate(file: any): any{
        return HuggingFaceUtils.getInstance().automaticSpeechRecognition(file);
    }
}