export default class KPromise {
    constructor(handle) {
        this['[[PromiseState]]'] = 'pending';
        this['[[PromiseResult]]'] = undefined;
        this.resolveFn = undefined;
        this.rejectFn = undefined;
        handle(this.#resolve.bind(this), this.#reject.bind(this))
    }

    #resolve(val) {
        this['[[PromiseState]]'] = 'fulfilled';
        this['[[PromiseResult]]'] = val;
        const run = () => {
            this.resolveFn(val);
        }
        // setTimeout(run);
        let ob = new MutationObserver(run);
        ob.observe(document.body, {
            attributes: true
        })
        document.body.setAttribute("kkb", "value")
    }
    #reject(err) {
        this['[[PromiseState]]'] = 'rejected';
        this['[[PromiseResult]]'] = err;
        // this.rejectFn(err);
        const run = () => {
            this.rejectFn(err);
        }
        // setTimeout(run);
        let ob = new MutationObserver(run);
        ob.observe(document.body, {
            attributes: true
        })
        document.body.setAttribute("kkb", "value")
    }
    then(onResolved, onRejected) {
        // if(this['[[PromiseState]]'] === 'fulfilled'){
        //     onResolved(this['[[PromiseResult]]']);
        // }
        // 保存 onResolved, onRejected
        this.resolveFn = onResolved;
        this.rejectFn = onRejected;
    }
}