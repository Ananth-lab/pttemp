import { Injectable } from '@nestjs/common';

@Injectable()
export class PreviewService {
  create(createPreviewDto:any) {
    return 'This action adds a new preview';
  }

  findAll() {
    return `This action returns all preview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} preview`;
  }

  update(id: number, updatePreviewDto:any) {
    return `This action updates a #${id} preview`;
  }

  remove(id: number) {
    return `This action removes a #${id} preview`;
  }
}
