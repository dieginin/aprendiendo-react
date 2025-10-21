import { users } from './utils/constants.js'
import { TwitterWhoToFollowCard } from './components/TwitterWhoToFollowCard'

export function App() {
  return <TwitterWhoToFollowCard users={users} />
}