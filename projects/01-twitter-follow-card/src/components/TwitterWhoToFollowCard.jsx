import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function TwitterWhoToFollowCard({ users = [{ userName: "unknown", name: "Unknown" }] }) {
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
