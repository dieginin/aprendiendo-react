import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
  { userName: "midudev", name: "Miguel Angel Duran" },
  { userName: "ConBdeBuenazo", name: "Diego Balestra", initialIsFollowing: true },
  { userName: "elonmusk", name: "Elon Musk" },
  { userName: "BrawlStars", name: "Brawl Stars" },
  { userName: "BetaProfiles", name: "Beta Profiles" },
]

export function App() {
  return (
    <section className='tw-whoToFollowCard'>
      <strong className='tw-whoToFollowCard-title'>Who to follow</strong>
      <section className="tw-whoToFollowCard-suggestions">
        {
          users.map(({ userName, name, initialIsFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={initialIsFollowing}
            />
          ))
        }
      </section>
    </section>
  )
}
