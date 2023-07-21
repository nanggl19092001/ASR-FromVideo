import { Injectable } from "@nestjs/common/decorators";
import HuggingFaceUtils from "src/utils/huggingface-utils";

@Injectable({})
export default class TranslateService {
    translate(){
        return HuggingFaceUtils.getInstance().automaticSpeechRecognition();
    }
}