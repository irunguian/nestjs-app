import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
  import { QuestionService } from '../services/question.service';
  import { QuizService } from '../services/quiz.service';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../dto/create-question.dto';
  
  @ApiTags('Questions')
  @ApiBearerAuth()
  @Controller('question')
  export class QuestionController {
    constructor(
      private questionService: QuestionService,
      private quizService: QuizService,
    ) {}
  
    @Post('')
    @UsePipes(ValidationPipe)
    @ApiCreatedResponse({
      description: 'Question added to a quiz',
      type: Question,
    })
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
      const quiz = await this.quizService.findOne(question.quizId);
      return await this.questionService.createQuestion(question, quiz);
    }
  }