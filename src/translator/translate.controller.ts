import { Controller, Get, Query } from '@nestjs/common';
import { TranslateService } from './translate.service';

@Controller('translate')
export class TranslateController {
  constructor(private readonly translateService: TranslateService) {}

  @Get()
  async translateText(
    @Query('sourceLang') sourceLang: string,
    @Query('targetLang') targetLang: string,
    @Query('text') text: string,
  ) {
    return this.translateService.translate(sourceLang, targetLang, text);
  }
}
