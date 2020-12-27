"use strict";

import { gameRunner } from "./game-runner";

gameRunner(function(maxInt) {
  return Math.floor(Math.random() * maxInt) + 1;
});
