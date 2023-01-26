const pkgRootPath = `<rootDir>`;
const solidjsPath = `${pkgRootPath}/../../node_modules/solid-js`;

module.exports = {
    preset:"ts-jest",

    global:{
        "ts-jest":{
            tsconfig:`${pkgRootPath}/tsconfig.json`,
            babelConfig:{
                presets:["@babel/preset-env","babel-preset-solid"]
            }
        }
    },

    testEnvironment:"jsdom",

    setupFilesAfterEnv:[`${pkgRootPath}/../../jest.setup.ts`,"regenerator-runtime"],

    moduleNameMapper:{
        "solid-js/web":`${solidjsPath}/web/dist/web.cjs`,
        "solid-js/store":`${solidjsPath}/store/dist/store.cjs`,
        "solid-js":`${solidjsPath}/dist/solid.cjs`
    },

    verbose:true,
    testTimeout:30000
};
