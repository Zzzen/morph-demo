const { createProject, ts } = require("@ts-morph/bootstrap");

main();

async function main() {
    const project = await createProject({ tsConfigFilePath: "tsconfig.json" });
    const diagnostics = ts.getPreEmitDiagnostics(project.createProgram());
    console.log(diagnostics);
}
