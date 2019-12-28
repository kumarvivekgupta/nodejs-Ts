import { injectable } from 'inversify';

@injectable()
export abstract class TransformerAbstract<T> {
    public abstract transform(submission: T): any;
}