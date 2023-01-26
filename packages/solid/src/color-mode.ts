import { isServer } from "solid-js/web";

import { __DEV__ } from "./utils/assertion";
import {mockBody} from "./utils/object";

export type ColorMode = "light" | "dark" | "system";

const hasLocalStorageSupport = () => typeof Storage !== "undefined";

const COLOR_MODE_STORAGE_KEY = "zzhh-ui-color-mode";

/**
 * Theme CSS class name added to `document.body` base on mode.
 */
export const colorModeClassNames = {
    light:"zzhh-ui-light",
    dark:"zzhh-ui-dark",
};

function getColorModeFromLocalStorage(){
    if(!hasLocalStorageSupport()){
        return null;
    }

    try{
        return localStorage.getItem(COLOR_MODE_STORAGE_KEY) as ColorMode |null;
    }catch(error){
        if(__DEV__){
            console.log(error);
        }
        return null;
    }
}

export function saveColorModeToLocalStorage(value:ColorMode){
    if(!hasLocalStorageSupport()){
        return;
    }

    try{
        localStorage.setItem(COLOR_MODE_STORAGE_KEY,value);
    }catch(error){
        if(__DEV__){
            console.log(error);
        }
    }
}

/**
 * Get the default color mode based on system preference or from local storage.
 * @param fallbackValue Fallback color mode value,if `system` it will be the system color mode.
 * @return The default color mode to use.
 */
export function getDefaultColorMode(fallbackValue: ColorMode): ColorMode{
    const persistedPreference = getColorModeFromLocalStorage();

    if(persistedPreference){
        return persistedPreference;
    }else if (fallbackValue === "system"){
        const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return isSystemDark ? "dark" : "light";
    }else{
        return fallbackValue;
    }
}

/**
 * Toggle the theme class to apply based on color mode.
 */
export function getColorModeClassName(isDark: boolean){
    return isDark ? colorModeClassNames.dark : colorModeClassNames.light;
}

/**
 * Toggle the theme class from `document.body` based on color mode.
 */
export function syncBodyColorModeClassName(isDark:boolean){
    const body = isServer ? mockBody : document.body;

    body.classList.add(getColorModeClassName(isDark));
    body.classList.remove(isDark ? colorModeClassNames.light : colorModeClassNames.dark);
}

