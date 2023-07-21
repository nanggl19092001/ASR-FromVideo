import { HfInference } from "@huggingface/inference";
import { readFileSync } from "fs";
import * as path from "path";

export default class HuggingFaceUtils {
    private static instance: HuggingFaceUtils;
    private hf: HfInference;

    private constructor() {
        this.hf = new HfInference("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");
    };

    public static getInstance(): HuggingFaceUtils {
        if(!this.instance){
            return new HuggingFaceUtils();
        }

        return this.instance;
    }

    async automaticSpeechRecognition() {
        return await this.hf.automaticSpeechRecognition({
            model: "NgVN/whisper-small-vi",
            data: readFileSync(path.join(__dirname, "../../assets/audio/common_voice_vi_21833254.mp3"))
        });
    }

}