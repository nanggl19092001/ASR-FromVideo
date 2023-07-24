import { AutomaticSpeechRecognitionOutput } from "@huggingface/inference";
import { Injectable } from "@nestjs/common/decorators";
import HuggingFaceUtils from "src/utils/huggingface-utils";

@Injectable({})
export default class TranslateService {
    translate(file: Express.Multer.File | Buffer): Promise<AutomaticSpeechRecognitionOutput>{
        return HuggingFaceUtils.getInstance().automaticSpeechRecognition(file);
    }
}