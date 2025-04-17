"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/persona",{

/***/ "(pages-dir-browser)/./pages/persona.js":
/*!**************************!*\
  !*** ./pages/persona.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PersonaSelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(pages-dir-browser)/./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(pages-dir-browser)/./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(pages-dir-browser)/./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PersonaSelection() {\n    _s();\n    const [showOverlay, setShowOverlay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [selectedPersona, setSelectedPersona] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); // Store the selected persona\n    const personas = [\n        {\n            name: \"Innovator\",\n            color: \"bg-pink-500\",\n            description: \"Forward-thinkers shaping tomorrow.\"\n        },\n        {\n            name: \"Traditionalist\",\n            color: \"bg-yellow-500\",\n            description: \"Stable investors valuing time-tested methods.\"\n        },\n        {\n            name: \"Adventurer\",\n            color: \"bg-blue-500\",\n            description: \"Daring risk-takers seeking new challenges.\"\n        },\n        {\n            name: \"Athlete\",\n            color: \"bg-green-500\",\n            description: \"Disciplined and competitive in every move.\"\n        },\n        {\n            name: \"Artist\",\n            color: \"bg-purple-500\",\n            description: \"Creative minds making unique financial decisions.\"\n        }\n    ];\n    // Function to save the selected persona to the database\n    const savePersona = async (persona)=>{\n        try {\n            const response = await fetch(\"/api/savePersona\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    persona\n                })\n            });\n            const data = await response.json();\n            if (response.ok) {\n                console.log(\"Persona saved successfully:\", data);\n            } else {\n                console.error(\"Failed to save persona:\", data);\n            }\n        } catch (error) {\n            console.error(\"Error saving persona:\", error);\n        }\n    };\n    // Animation variants\n    const containerVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.3\n            }\n        }\n    };\n    const cardVariants = {\n        hidden: {\n            opacity: 0,\n            y: 50\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 0.5\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-yellow-100 flex flex-col items-center justify-center py-10 px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-orbitron font-bold text-4xl sm:text-5xl text-center text-gray-800 mb-10\",\n                children: \"Choose Your Persona\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6\",\n                variants: containerVariants,\n                initial: \"hidden\",\n                animate: \"visible\",\n                children: personas.map((persona, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"p-6 rounded-lg text-white text-center transform \".concat(persona.color),\n                        variants: cardVariants,\n                        whileHover: {\n                            boxShadow: \"0px 0px 30px 10px rgba(255, 255, 255, 0.8)\",\n                            scale: 1.02\n                        },\n                        transition: {\n                            duration: 0.3,\n                            ease: \"easeInOut\"\n                        },\n                        onClick: ()=>{\n                            setSelectedPersona(persona); // Set the selected persona\n                            savePersona(persona); // Save to the database\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-montserrat font-bold mb-2\",\n                                children: persona.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-montserrat text-sm\",\n                                children: persona.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                whileHover: {\n                    scale: 1.1\n                },\n                whileTap: {\n                    scale: 0.9\n                },\n                className: \"mt-10 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white py-2 px-6 rounded-lg font-montserrat font-bold shadow-lg\",\n                onClick: ()=>setShowOverlay(true),\n                children: \"Next: Meet Your Financial Companion\"\n            }, void 0, false, {\n                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            showOverlay && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-montserrat z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded-lg shadow-lg text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Coming Soon!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg mb-6\",\n                            children: \"Meet your AI Financial Companion in the upcoming section.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/chatbot\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-montserrat font-bold shadow-lg\",\n                                children: \"Proceed to Chatbot Placeholder\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                            lineNumber: 136,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-4 ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-lg font-montserrat font-bold\",\n                            onClick: ()=>setShowOverlay(false),\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n                lineNumber: 130,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\fintech_intern_assignment\\\\frontend\\\\pages\\\\persona.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(PersonaSelection, \"lqW1M1lNjLHDjkOsXbHykeOjzw8=\");\n_c = PersonaSelection;\nvar _c;\n$RefreshReg$(_c, \"PersonaSelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2dDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNZOzRCQUFHWixXQUFVO3NDQUEwQjs7Ozs7O3NDQUN4Qyw4REFBQ2E7NEJBQUViLFdBQVU7c0NBQWU7Ozs7OztzQ0FHNUIsOERBQUNyQyxrREFBSUE7NEJBQUNxRCxNQUFLO3NDQUNULDRFQUFDRjtnQ0FBT2QsV0FBVTswQ0FBd0c7Ozs7Ozs7Ozs7O3NDQUk1SCw4REFBQ2M7NEJBQ0NkLFdBQVU7NEJBQ1ZXLFNBQVMsSUFBTTNDLGVBQWU7c0NBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBbkp3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIkQ6XFxmaW50ZWNoX2ludGVybl9hc3NpZ25tZW50XFxmcm9udGVuZFxccGFnZXNcXHBlcnNvbmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVyc29uYVNlbGVjdGlvbigpIHtcclxuICBjb25zdCBbc2hvd092ZXJsYXksIHNldFNob3dPdmVybGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRQZXJzb25hLCBzZXRTZWxlY3RlZFBlcnNvbmFdID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0b3JlIHRoZSBzZWxlY3RlZCBwZXJzb25hXHJcblxyXG4gIGNvbnN0IHBlcnNvbmFzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIklubm92YXRvclwiLFxyXG4gICAgICBjb2xvcjogXCJiZy1waW5rLTUwMFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGb3J3YXJkLXRoaW5rZXJzIHNoYXBpbmcgdG9tb3Jyb3cuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRyYWRpdGlvbmFsaXN0XCIsXHJcbiAgICAgIGNvbG9yOiBcImJnLXllbGxvdy01MDBcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiU3RhYmxlIGludmVzdG9ycyB2YWx1aW5nIHRpbWUtdGVzdGVkIG1ldGhvZHMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkFkdmVudHVyZXJcIixcclxuICAgICAgY29sb3I6IFwiYmctYmx1ZS01MDBcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRGFyaW5nIHJpc2stdGFrZXJzIHNlZWtpbmcgbmV3IGNoYWxsZW5nZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkF0aGxldGVcIixcclxuICAgICAgY29sb3I6IFwiYmctZ3JlZW4tNTAwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRpc2NpcGxpbmVkIGFuZCBjb21wZXRpdGl2ZSBpbiBldmVyeSBtb3ZlLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBcnRpc3RcIixcclxuICAgICAgY29sb3I6IFwiYmctcHVycGxlLTUwMFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGl2ZSBtaW5kcyBtYWtpbmcgdW5pcXVlIGZpbmFuY2lhbCBkZWNpc2lvbnMuXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNhdmUgdGhlIHNlbGVjdGVkIHBlcnNvbmEgdG8gdGhlIGRhdGFiYXNlXHJcbiAgY29uc3Qgc2F2ZVBlcnNvbmEgPSBhc3luYyAocGVyc29uYSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2F2ZVBlcnNvbmFcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBwZXJzb25hLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlBlcnNvbmEgc2F2ZWQgc3VjY2Vzc2Z1bGx5OlwiLCBkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcGVyc29uYTpcIiwgZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgcGVyc29uYTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEFuaW1hdGlvbiB2YXJpYW50c1xyXG4gIGNvbnN0IGNvbnRhaW5lclZhcmlhbnRzID0ge1xyXG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgIHZpc2libGU6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4zLCAvLyBTdGFnZ2VyIHRoZSBhcHBlYXJhbmNlIG9mIGVhY2ggY2FyZFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSwgLy8gQ2FyZHMgZmFkZSBhbmQgc2xpZGUgdXBcclxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41IH0gfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmcteWVsbG93LTEwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xMCBweC00XCI+XHJcbiAgICAgIHsvKiBQYWdlIFRpdGxlICovfVxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1vcmJpdHJvbiBmb250LWJvbGQgdGV4dC00eGwgc206dGV4dC01eGwgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTgwMCBtYi0xMFwiPlxyXG4gICAgICAgIENob29zZSBZb3VyIFBlcnNvbmFcclxuICAgICAgPC9oMT5cclxuXHJcbiAgICAgIHsvKiBQZXJzb25hIENhcmRzIENvbnRhaW5lciAqL31cclxuICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC02XCJcclxuICAgICAgICB2YXJpYW50cz17Y29udGFpbmVyVmFyaWFudHN9XHJcbiAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3BlcnNvbmFzLm1hcCgocGVyc29uYSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNiByb3VuZGVkLWxnIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdHJhbnNmb3JtICR7cGVyc29uYS5jb2xvcn1gfVxyXG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxyXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7XHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMzBweCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiLCAvLyBHbG93aW5nIHdoaXRlIHNoYWRvd1xyXG4gICAgICAgICAgICAgIHNjYWxlOiAxLjAyLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQZXJzb25hKHBlcnNvbmEpOyAvLyBTZXQgdGhlIHNlbGVjdGVkIHBlcnNvbmFcclxuICAgICAgICAgICAgICBzYXZlUGVyc29uYShwZXJzb25hKTsgLy8gU2F2ZSB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbW9udHNlcnJhdCBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICAgIHtwZXJzb25hLm5hbWV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbW9udHNlcnJhdCB0ZXh0LXNtXCI+e3BlcnNvbmEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICB7LyogTmV4dCBCdXR0b24gKi99XHJcbiAgICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtNDAwIHRvLXJlZC01MDAgaG92ZXI6ZnJvbS1vcmFuZ2UtNTAwIGhvdmVyOnRvLXJlZC02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTYgcm91bmRlZC1sZyBmb250LW1vbnRzZXJyYXQgZm9udC1ib2xkIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd092ZXJsYXkodHJ1ZSl9IC8vIFNob3cgb3ZlcmxheSB3aGVuIGNsaWNrZWRcclxuICAgICAgPlxyXG4gICAgICAgIE5leHQ6IE1lZXQgWW91ciBGaW5hbmNpYWwgQ29tcGFuaW9uXHJcbiAgICAgIDwvbW90aW9uLmJ1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBPdmVybGF5ICovfVxyXG4gICAgICB7c2hvd092ZXJsYXkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtbW9udHNlcnJhdCB6LTUwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Db21pbmcgU29vbiE8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTZcIj5cclxuICAgICAgICAgICAgICBNZWV0IHlvdXIgQUkgRmluYW5jaWFsIENvbXBhbmlvbiBpbiB0aGUgdXBjb21pbmcgc2VjdGlvbi5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NoYXRib3RcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgaG92ZXI6YmctcHVycGxlLTcwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNiByb3VuZGVkLWxnIGZvbnQtbW9udHNlcnJhdCBmb250LWJvbGQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICBQcm9jZWVkIHRvIENoYXRib3QgUGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBtbC0yIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgcHktMiBweC02IHJvdW5kZWQtbGcgZm9udC1tb250c2VycmF0IGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd092ZXJsYXkoZmFsc2UpfSAvLyBDbG9zZSBvdmVybGF5XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIm1vdGlvbiIsInVzZVN0YXRlIiwiUGVyc29uYVNlbGVjdGlvbiIsInNob3dPdmVybGF5Iiwic2V0U2hvd092ZXJsYXkiLCJzZWxlY3RlZFBlcnNvbmEiLCJzZXRTZWxlY3RlZFBlcnNvbmEiLCJwZXJzb25hcyIsIm5hbWUiLCJjb2xvciIsImRlc2NyaXB0aW9uIiwic2F2ZVBlcnNvbmEiLCJwZXJzb25hIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjb250YWluZXJWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImNhcmRWYXJpYW50cyIsInkiLCJkdXJhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsIm1hcCIsImluZGV4Iiwid2hpbGVIb3ZlciIsImJveFNoYWRvdyIsInNjYWxlIiwiZWFzZSIsIm9uQ2xpY2siLCJoMiIsInAiLCJidXR0b24iLCJ3aGlsZVRhcCIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-browser)/./pages/persona.js\n"));

/***/ })

});