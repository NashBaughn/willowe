// @flow
import boot from "./src/boot/index";

console.ignoredYellowBox = [
    'Setting a timer'
]

const app = boot();

export default app;
