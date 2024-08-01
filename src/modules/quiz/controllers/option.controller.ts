import {
    Body,
    Controller,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
  import { OptionService } from '../services/option.service';
  import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dto/create-option.dto';
  
  @ApiTags('Questions')
  @ApiBearerAuth()
  @Controller('question/option')
  export class OptionController {
    constructor(
      private optionService: OptionService,
      private questionService: QuestionService,
    ) {}
  
    @Post('')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
      description: 'The option that got created',
      type: Option,
    })
    async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
      const question = await this.questionService.findOne(
        createOption.questionId,
      );
      const option = await this.optionService.creatOption(createOption, question);
      return { question, createOption, option };
    }
  }