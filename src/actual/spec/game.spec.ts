import _ from "lodash";
import { gameRunner } from "../src/game-runner";
import { getRandom } from "./rands";
import master from "./master.json";

describe("The game", function () {
  it("should work ;-)", function () {
    const loggedLines = [];
    const oldLog = console.log;
    console.log = function (arg) {
      loggedLines.push(arg);
    };
    _.range(15).forEach(() => {
      gameRunner(getRandom);
    });
    console.log = oldLog;
    expect(loggedLines).toEqual(master);
  });
});
