// import React, { useEffect, useLayoutEffect } from "react";
// import * as Select from "@radix-ui/react-select";
//
// import { theme_store } from "./model";
// import { THEME } from "@/entities/toggle-theme/constants";
// import clsx from "clsx";

export const ToggleTheme = () => {
  <div></div>;
};
//
// export function ToggleTheme() {
//   const theme = theme_store((state) => state.theme);
//
//   // useLayoutEffect(() => {
//   //   let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   //
//   //   function update(e: any) {
//   //     console.log(e);
//   //     document.documentElement.classList.add("changing-theme");
//   //     const isDark = e.matches;
//   //
//   //     if (theme === "system") {
//   //       if (isDark) {
//   //         document.documentElement.classList.add("dark");
//   //       } else {
//   //         document.documentElement.classList.remove("dark");
//   //       }
//   //     } else if (theme === "dark") {
//   //       document.documentElement.classList.add("dark");
//   //     } else {
//   //       document.documentElement.classList.remove("dark");
//   //     }
//   //
//   //     document.documentElement.classList.remove("changing-theme");
//   //   }
//   //
//   //   mediaQuery.addEventListener("change", update);
//   //
//   //   return () => {
//   //     mediaQuery.removeEventListener("change", update);
//   //   };
//   // }, [theme]);
//
//   useEffect(() => {
//     let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//
//     function handleChange(event) {
//       const isDark = event.matches;
//
//       if (theme === THEME.SYSTEM) {
//         if (isDark) {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       } else if (theme === THEME.DARK) {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     }
//
//     mediaQuery.addEventListener("change", handleChange);
//
//     return () => {
//       mediaQuery.removeEventListener("change", handleChange);
//     };
//   }, [theme]);
//
//   return (
//     // <div className="relative flex gap-1 bg-transparent">
//     //   <button>asd</button>
//     //   <div className="bg-gray-600 flex-1 z-20 w-32"></div>
//     //   <div className="bg-gray-600 w-8 h-8 z-20"></div>
//     //
//     //   <div className="absolute w-full h-full z-10 border-black border -bottom-0.5 -right-0.5" />
//     // </div>
//     <div>
//       <Select.Root>
//         <Select.Trigger className="SelectTrigger" aria-label="Food">
//           <Select.Value placeholder="Select a fruit…" />
//           <Select.Icon className="SelectIcon">
//             {/*<ChevronDownIcon />*/}
//           </Select.Icon>
//         </Select.Trigger>
//         <Select.Portal>
//           <Select.Content className="SelectContent">
//             <Select.ScrollUpButton className="SelectScrollButton">
//               {/*<ChevronUpIcon />x*/}
//             </Select.ScrollUpButton>
//             <Select.Viewport className="SelectViewport">
//               <Select.Group>
//                 <Select.Label className="SelectLabel">Fruits</Select.Label>
//                 <SelectItem value="apple">Apple</SelectItem>
//                 <SelectItem value="banana">Banana</SelectItem>
//                 <SelectItem value="blueberry">Blueberry</SelectItem>
//                 <SelectItem value="grapes">Grapes</SelectItem>
//                 <SelectItem value="pineapple">Pineapple</SelectItem>
//               </Select.Group>
//
//               <Select.Separator className="SelectSeparator" />
//
//               <Select.Group>
//                 <Select.Label className="SelectLabel">Vegetables</Select.Label>
//                 <SelectItem value="aubergine">Aubergine</SelectItem>
//                 <SelectItem value="broccoli">Broccoli</SelectItem>
//                 <SelectItem value="carrot" disabled>
//                   Carrot
//                 </SelectItem>
//                 <SelectItem value="courgette">Courgette</SelectItem>
//                 <SelectItem value="leek">Leek</SelectItem>
//               </Select.Group>
//
//               <Select.Separator className="SelectSeparator" />
//
//               <Select.Group>
//                 <Select.Label className="SelectLabel">Meat</Select.Label>
//                 <SelectItem value="beef">Beef</SelectItem>
//                 <SelectItem value="chicken">Chicken</SelectItem>
//                 <SelectItem value="lamb">Lamb</SelectItem>
//                 <SelectItem value="pork">Pork</SelectItem>
//               </Select.Group>
//             </Select.Viewport>
//             <Select.ScrollDownButton className="SelectScrollButton">
//               {/*<ChevronDownIcon />*/}
//             </Select.ScrollDownButton>
//           </Select.Content>
//         </Select.Portal>
//       </Select.Root>
//     </div>
//   );
// }
//
// const SelectItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item
//         className={clsx("SelectItem", className)}
//         {...props}
//         ref={forwardedRef}
//       >
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className="SelectItemIndicator">
//           {/*<CheckIcon />*/}
//         </Select.ItemIndicator>
//       </Select.Item>
//     );
//   }
// );
