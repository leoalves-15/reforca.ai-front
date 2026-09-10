// import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
// import { getBNCC } from "../../services/bncc/bnccService"

// const BNCCContext = createContext<any>(null)

// export function BNCCProvider({ children }: { children: ReactNode }) {

//   const [bncc, setBncc] = useState(null)

//   useEffect(() => {
//     getBNCC().then(setBncc)
//   }, [])

//   return (
//     <BNCCContext.Provider value={bncc}>
//       {children}
//     </BNCCContext.Provider>
//   )
// }

// export function useBNCC() {
//   return useContext(BNCCContext)
// }