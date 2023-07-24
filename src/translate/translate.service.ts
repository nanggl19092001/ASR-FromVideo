import { AutomaticSpeechRecognitionOutput } from "@huggingface/inference";
import { Injectable } from "@nestjs/common/decorators";
import HuggingFaceUtils from "src/utils/huggingface-utils";

@Injectable({})
export default class TranslateService {
    translate(file: any): any{
        return HuggingFaceUtils.getInstance().automaticSpeechRecognition(file);
    }
}