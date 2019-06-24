import {defer, empty} from 'rxjs'
import {delay, repeat, startWith} from 'rxjs/operators';

const randomDelay$ = defer(() => {
    const duration = Math.random() * 1000;
    return empty().pipe(
        delay(duration),
        startWith(duration),
    )
});

export const randomInterval$ = randomDelay$.pipe(repeat());
