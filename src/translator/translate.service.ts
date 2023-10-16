import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TranslateService {
  async translate(
    sourceLang: string,
    targetLang: string,
    text: string,
  ): Promise<string> {
    const apiKey = 'pub_5ea42245705181c4bb14f4f26ec58303';
    const response = await axios.get('https://translate.google.com/', {
      params: {
        source: sourceLang,
        target: targetLang,
        q: text,
        key: apiKey,
      },
    });
    return response.data.translatedText;
  }
}
