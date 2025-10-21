import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App() {
  return (
    <section className='tw-whoToFollowCard'>
      <strong className='tw-whoToFollowCard-title'>Who to follow</strong>
      <section className="tw-whoToFollowCard-suggestions">
        <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />
        <TwitterFollowCard userName="ConBdeBuenazo" name="Diego Balestra" initialIsFollowing />
        <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
        <TwitterFollowCard userName="BrawlStars" name="Brawl Stars" />
        <TwitterFollowCard userName="BetaProfiles" name="Beta Profiles" />
      </section>
    </section>
  )
}
