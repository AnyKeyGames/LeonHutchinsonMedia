
import { AppRoutes } from '../../routes';

export function App(props: any) {
  
  return (
    <>  
      {/* <UserContext.Provider value={UserValue}> */}
        {AppRoutes.createAppElement()}
      {/* </UserContext.Provider> */}
    </>
  )
}
