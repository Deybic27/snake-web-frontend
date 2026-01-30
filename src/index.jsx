import { Routes, Route } from "react-router-dom"
import LoginRegister from "./loginRegister"
import Welcome from "./welcome"

function Index() {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  )
}

export default Index