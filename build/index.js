console.log("Start importing a module...");
import("markdown-to-text").then((o) => {
  console.log("Module has been loaded: ", o);
});
