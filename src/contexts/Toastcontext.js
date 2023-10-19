import { createContext } from "react";
import MySnackBar from "../components/MySnackBar";

export const TosatContext = createContext({});

// export const TosatPrevoider = ({ children }) => {
//   return (
//     <>
//       <TosatPrevoider>
//         <MySnackBar></MySnackBar>
//         {children}
//       </TosatPrevoider>
//     </>
//   );
// };
