import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { QuestionController } from './controllers/question.controller';
import { OptionController } from './controllers/option.controller';
import { ResponseController } from './controllers/response.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { OptionService } from './services/option.service';
import { ResponseService } from './services/response.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [
    QuizController,
    QuestionController,
    OptionController,
    ResponseController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
    UserModule,
  ],
  providers: [QuizService, QuestionService, OptionService, ResponseService],
})
export class QuizModule {}