import { BaseService } from './base-service';

export class ServiceB extends BaseService {
  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
