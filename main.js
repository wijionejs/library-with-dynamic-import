console.log("Start importing a module...");

import("markdown-to-text").then(mod => {
  console.log("Module has been loaded: ", mod);
});