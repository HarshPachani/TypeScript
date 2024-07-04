import { useState } from "react"
import Box from "./components/Box"
const App = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <div>
      {/* <Box 
        heading="Hello world" 
        // count={1} 
        func1={(a: string) => {
          console.log(a)
        }} 
      >
        {<>This is reserved children prop...</>}
      </Box>
      */}
      <Box label="Search" value={search} setter={setSearch}/>
    </div>
  )
}

export default App