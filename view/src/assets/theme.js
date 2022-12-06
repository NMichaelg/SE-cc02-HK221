import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/system";

//color design tokens
export const tokens = {
    primaryGreen: {
        100: "#e7eae7",
        200: "#cfd6ce",
        300: "#b8c1b6",
        400: "#a0ad9d",
        500: "#889885",
        600: "#6d7a6a",
        700: "#525b50",
        800: "#363d35",
        900: "#1b1e1b"
    },
    lightBlack: {
        100: "#d4d4d6",
        200: "#aaa9ad",
        300: "#7f7d83",
        400: "#55525a",
        500: "#2a2731",
        600: "#221f27",
        700: "#19171d",
        800: "#111014",
        900: "#08080a"
    },
    black: {
        100: "#d3d2d4",
        200: "#a6a5a9",
        300: "#7a787d",
        400: "#4d4b52",
        500: "#211e27",
        600: "#1a181f",
        700: "#141217",
        800: "#0d0c10",
        900: "#070608"
    },
    lightGreen: {
        100: "#dbf2d7",
        200: "#b7e4af",
        300: "#93d788",
        400: "#6fc960",
        500: "#4bbc38",
        600: "#3c962d",
        700: "#2d7122",
        800: "#1e4b16",
        900: "#0f260b"
    },
    darkGreen: {

        100: "#d6ebd7",
        200: "#add7ae",
        300: "#83c386",
        400: "#5aaf5d",
        500: "#319b35",
        600: "#277c2a",
        700: "#1d5d20",
        800: "#143e15",
        900: "#0a1f0b"
    },
    hightlightGreen: {
        100: "#f0ffeb",
        200: "#e1ffd6",
        300: "#d1ffc2",
        400: "#c2ffad",
        500: "#b3ff99",
        600: "#8fcc7a",
        700: "#6b995c",
        800: "#48663d",
        900: "#24331f"
    },
    backgroundWhite: {
        100: "#fefefe",
        200: "#fcfcfc",
        300: "#fbfbfb",
        400: "#f9f9f9",
        500: "#f8f8f8",
        600: "#c6c6c6",
        700: "#959595",
        800: "#636363",
        900: "#323232"
    },
    yellow: {
        100: "#fbf7cc",
        200: "#f8ee99",
        300: "#f4e666",
        400: "#f1dd33",
        500: "#edd500",
        600: "#beaa00",
        700: "#8e8000",
        800: "#5f5500",
        900: "#2f2b00"
    },
    normalYellow: {
        100: "#fffede",
        200: "#fffcbd",
        300: "#fffb9b",
        400: "#fff97a",
        500: "#fff859",
        600: "#ccc647",
        700: "#999535",
        800: "#666324",
        900: "#333212"
    },
    normalRed: {
        100: "#ffdfdf",
        200: "#ffbfbf",
        300: "#ff9f9f",
        400: "#ff7f7f",
        500: "#ff5f5f",
        600: "#cc4c4c",
        700: "#993939",
        800: "#662626",
        900: "#331313"
},
}

const theme = createTheme({
    palette:{
        background:{
            mainGreen: "#889885",
            mainGray: "#f8f8f8",
            mainWhite:"#FFFFFF"
        },
        button:{
            normalRed: "#FF5F5F",
            normalYellow: "#FFF859",
            normalGreen: "#A3FF77",
        }
    }
})

export default theme
